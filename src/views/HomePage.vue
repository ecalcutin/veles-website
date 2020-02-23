<template>
  <div>
    <v-parallax height="350" :src="require('@/assets/images/parallax-home.jpg')">
      <v-row justify="center" class="app-container">
        <v-col class="py-0" sm="12">
          <v-row class="fill-height" justify="center" align="center">
            <v-col class="text-center" cols="12" sm="7" md="7">
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
            <v-col class="py-0 image-breakpoint" cols="12" sm="5" md="5">
              <v-img :src="require('@/assets/images/BannerImg.png')" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-parallax>
    <SectionBlock color="#dcd7d2" title="Высочайшее качество">
      <v-row align="center">
        <v-col cols="12" sm="6">
          <v-img
            contain
            max-height="200"
            :src="require('@/assets/images/StandardsImg.png')"
            :lazy-src="require('@/assets/images/StandardsImg.png')"
          />
        </v-col>
        <v-col cols="12" sm="6">
          <h3 class="text-center text-sm-left">О нашей мастерской</h3>
          <p>
            Наша Компания специализируется на изготовлении <strong>гранитных надгробных памятников</strong> эксклюзивного дизайна.
            Каждый
            <strong>гранитный памятник</strong> для нас - произведение искусства. Каждая деталь прорабатывается тщательно
            на всем этапе
            <strong>призводства</strong>.
          </p>
        </v-col>
      </v-row>
    </SectionBlock>
    <v-sheet tile height="400">
      <v-container fluid class="app-container">
        <v-row justify="center">
          <v-col cols="12" sm="10" lg="7" class="text-center">
            <h2 class="display-1">НАША КОМАНДА</h2>
            <div style="height: 24px" />
            <v-row></v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet tile height="400"></v-sheet>
  </div>
</template>

<script>
import SectionBlock from "@/components/SectionBlock";
export default {
  name: "HomePage",
  components: {
    SectionBlock
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 780px) {
  .image-breakpoint {
    display: none !important;
  }
}
h3 {
  margin-bottom: 24px;
}
p {
  text-indent: 1em;
  text-align: justify;
}

// @media only screen and (max-width: 960px) {
//   .image {
//     display: none !important;
//   }
// }
</style>