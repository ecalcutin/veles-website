<template>
  <v-container fluid class="app-container">
    <v-row>
      <v-col cols="12" sm="3" class="d-none d-sm-flex">
        <v-list>
          <v-subheader>Памятники</v-subheader>
          <v-list-item>
            <v-list-item-title>Гранитные</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Бетонные</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Мраморные</v-list-item-title>
          </v-list-item>
        </v-list>
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
                <v-row>
                  <v-col>
                    <v-checkbox label="Одинарные" />
                  </v-col>
                  <v-col>
                    <v-checkbox label="Двойные" />
                  </v-col>
                  <v-col>
                    <v-checkbox label="Мраморные" />
                  </v-col>
                  <v-col>
                    <v-checkbox label="Бетонные" />
                  </v-col>
                </v-row>
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
      count: 24
    };
  }
};
</script>
<style lang="scss" scoped>
</style>