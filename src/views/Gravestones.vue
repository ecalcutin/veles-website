<template>
  <v-container fluid class="app-container">
    <v-row>
      <v-col cols="12" sm="3" class="d-none d-sm-flex">
        <v-form>
          <v-subheader>Фильтры</v-subheader>
          <v-card flat>
            <v-card-text class="pt-0">
              <v-select item-text="title" label="Материал"></v-select>
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
        <v-data-iterator
          :server-items-length="totalDocs"
          :items-per-page.sync="itemsPerPage"
          :page.sync="page"
          :items="items"
        >
          <template v-slot:default="props">
            <v-row>
              <v-col v-for="item in props.items" :key="item._id" cols="12" sm="6" md="4">
                <v-card>
                  <v-img height="400" :src="`${uploads}/${item.imageURI}`"></v-img>
                  <v-card-title>{{item._id}}</v-card-title>
                  <v-card-text></v-card-text>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn @click.stop="openCrudDialog('update', item)" text>Редактировать</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </template>
        </v-data-iterator>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from "@/plugins/api";
import {
  PAGE_INDEX_SET,
  PAGE_LIMIT_SET
} from "@/store/products/mutation-types";
import { PRODUCTS_GET } from "@/store/products/action-types";
export default {
  name: "GravestonesPage",
  data() {
    return {};
  },
  computed: {
    productType() {
      return this.$route.query.products;
    },
    items() {
      return this.$store.state.products.items;
    },
    totalDocs() {
      return this.$store.state.products.pagination.totalDocs;
    },
    page: {
      get() {
        return this.$store.state.products.pagination.page;
      },
      set(index) {
        this.$store.commit(PAGE_INDEX_SET, index);
        this.$store.dispatch(PRODUCTS_GET);
      }
    },
    itemsPerPage: {
      get() {
        return this.$store.state.products.pagination.itemsPerPage;
      },
      set(limit) {
        this.$store.commit(PAGE_LIMIT_SET, limit);
        this.$store.dispatch(PRODUCTS_GET);
      }
    }
  },

  mounted() {
    this.$store.dispatch(PRODUCTS_GET);
  }
};
</script>
<style lang="scss" scoped>
</style>