<template>
  <div fluid class="app-container">
    <v-row no-gutters class="pt-5">
      <v-col sm="2" class="d-none d-sm-flex px-0">
        <v-form>
          <v-subheader class="pl-0">Фильтры</v-subheader>
          <v-card flat>
            <v-card-text class="pt-0 px-0">
              <v-select
                value="granite"
                v-model="materialSelected"
                :items="materials"
                item-value="code"
                item-text="title"
                label="Материал"
              ></v-select>
              <v-select
                v-model="labelSelected"
                value="singles"
                :items="labels"
                item-text="title"
                item-value="code"
                label="Тип"
              ></v-select>
            </v-card-text>
          </v-card>
        </v-form>
      </v-col>
      <v-col class="px-5" sm="10">
        <v-row no-gutters class="d-sm-none">
          <v-expansion-panels flat>
            <v-expansion-panel>
              <v-expansion-panel-header class="px-0">
                <div>
                  <v-icon left>mdi-tune</v-icon>Фильтры
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-form>
                  <v-select item-text="title" label="Материал"></v-select>
                </v-form>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
        <v-divider class="d-md-none" />
        <v-data-iterator hide-default-footer :server-items-length="totalDocs" :items="items">
          <template v-slot:default="props">
            <v-row>
              <v-col v-for="item in props.items" :key="item._id" cols="12" sm="6" md="3">
                <v-card>
                  <v-img contain :src="`${uploads}/${item.imageURI}`"></v-img>
                </v-card>
              </v-col>
            </v-row>
          </template>
        </v-data-iterator>
        <v-pagination v-if="items.length" v-model="currentPage" class="my-4" :length="pages"></v-pagination>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import api from "@/plugins/api";
import qs from "query-string";
export default {
  name: "GravestonesPage",
  data() {
    return {
      items: [],
      materialSelected: "granite",
      labelSelected: "singles",
      totalDocs: 0,
      currentPage: 1,
      materials: [
        {
          title: "Гранит",
          code: "granite"
        },
        {
          title: "Мраморная крошка",
          code: "mramor"
        },
        {
          title: "Фибробетон",
          code: "concrete"
        },
        {
          title: "Все",
          code: ""
        }
      ],
      labels: [
        { title: "Одинарные", code: "singles" },
        { title: "Двойные", code: "doubles" },
        { title: "Все", code: "" }
      ]
    };
  },

  computed: {
    pages() {
      if (this.totalDocs > 15) return this.totalDocs / 15;
      else return 1;
    },
    uploads() {
      return process.env.VUE_APP_UPLOADS;
    }
  },
  watch: {
    materialSelected(newVal) {
      this.fetchItems();
    },
    labelSelected(newVal) {
      this.fetchItems();
    }
  },
  mounted() {
    this.fetchItems();
  },
  methods: {
    async fetchItems() {
      this.items = [];
      const query = qs.stringify({
        page: this.currentPage,
        label: this.labelSelected,
        material: this.materialSelected,
        isPublished: true,
        category: "gravestones",
        limit: 9
      });
      const response = await api.get(`/website/products?${query}`);
      this.items = response.data.docs;
      this.totalDocs = response.data.totalDocs;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>