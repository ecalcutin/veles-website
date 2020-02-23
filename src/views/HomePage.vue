<template>
  <div>
    <v-parallax height="350" :src="require('@/assets/images/parallax-home.jpg')">
      <v-row justify="center" class="app-container">
        <v-col class="py-0" sm="12">
          <v-row class="fill-height" justify="center" align="center">
            <v-col cols="12" sm="7" md="5">
              <h1 class="display-1 font-weight-thin mb-4">
                Гарантия памяти
                <br />о ваших близких
              </h1>
              <h4 class="subheading">
                Производство надгробных памятников
                <br />и доставка по всей Молдове
              </h4>
              <div style="height: 64px" />
              <v-btn
                to="/gravestones"
                title="Купить гранитный памятник"
                tag="a"
                x-large
                color="accent"
                elevation="24"
              >Выбрать памятник</v-btn>
            </v-col>
            <v-col id="stone" class="py-0 d-none d-sm-flex" cols="12" sm="5" md="5">
              <v-img :src="require('@/assets/images/BannerImg.png')" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-parallax>
    <v-sheet height="400"></v-sheet>
    <v-sheet height="400" color="grey"></v-sheet>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  components: {},
  computed: {}
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 780px) {
  #stone {
    display: none !important;
  }
}
</style>