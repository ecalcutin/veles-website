<template>
  <v-container fluid class="app-container">
    <v-row>
      <v-col cols="12" sm="3" class="d-none d-sm-flex">
        <v-form>
          <v-subheader>Фильтры</v-subheader>
          <v-card flat>
            <v-card-text class="pt-0">
              <v-select item-text="title" :items="materialType" label="Материал"></v-select>
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
                  <v-select item-text="title" :items="materialType" label="Материал"></v-select>
                </v-form>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
        <v-divider class="d-md-none" />
        <v-row>
          <v-col cols="12" sm="6" md="4" lg="3" v-for="n in count" :key="n">
            <v-card>
              <v-card-text>Test card name</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "GravestonesPage",
  data() {
    return {
      count: 24,
      materialType: [
        {
          title: "Гранитные",
          value: "granite"
        },
        {
          title: "Бетонные",
          value: "concrete"
        },
        {
          title: "Мраморные",
          value: "mramor"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
</style>