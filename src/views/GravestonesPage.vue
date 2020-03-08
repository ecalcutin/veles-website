<template>
  <v-container fluid class="app-container">
    <v-row>
      <v-col cols="12" sm="3" class="d-none d-sm-flex">
        <v-form>
          <v-subheader>Фильтры</v-subheader>
          <v-card flat>
            <v-card-text class="pt-0">
              <v-select item-text="title" label="Материал"></v-select>
              <v-checkbox v-for="item in labels" :key="item._id" :label="item.title" />
            </v-card-text>
          </v-card>
        </v-form>
      </v-col>
      <v-col cols="12" sm="9">
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
                  <v-img height="300" :src="`${uploads}/${item.imageURI}`"></v-img>
                </v-card>
              </v-col>
            </v-row>
          </template>
        </v-data-iterator>
        <v-pagination v-if="items.length" v-model="currentPage" class="my-4" :length="pages"></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from "@/plugins/api";
export default {
  name: "GravestonesPage",
  data() {
    return {
      items: [],
      totalDocs: 0,
      currentPage: 1,
      categoryID: "5e62e6fc0c02f01824df9122",
      labels: []
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
  mounted() {
    this.fetchItems();
    api.get(`/website/labels`).then(response => {
      this.labels = response.data;
      console.log(this.labels);
    });
  },
  methods: {
    async fetchItems() {
      this.items = [];
      const response = await api.get(
        `/website/products?category=${this.categoryID}&page=${this.currentPage -
          1}`
      );
      this.items = response.data.items;
      this.totalDocs = response.data.totalDocs;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>