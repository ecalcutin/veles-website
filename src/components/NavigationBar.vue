<template>
  <v-app-bar app class="veles-container">
    <div id="brand-container" class="d-flex">
      <v-app-bar-nav-icon class="d-xs-flex d-md-none"></v-app-bar-nav-icon>
      <v-spacer class="d-md-none d-sm-flex" />
      <div class="d-flex align-center">
        <v-img
          alt="Велес логотип"
          class="shrink mr-2"
          :src="require('@/assets/images/logo.svg')"
          transition="scale-transition"
          width="30"
          height="30"
        />
        <span>𝐕𝐄𝐋𝐄𝐒</span>
      </div>
      <v-spacer class="d-none d-sm-flex"></v-spacer>
    </div>
    <v-toolbar-items class="d-none d-md-flex">
      <v-btn text to="/" tag="a">Главная</v-btn>
      <v-btn text to="/gravestones" tag="a">Памятники</v-btn>
      <v-btn text to="/accessories" tag="a">Атрибутика</v-btn>
      <v-btn text to="/decor" tag="a">Декор</v-btn>
      <v-btn text to="/services" tag="a">Услуги</v-btn>
      <v-btn text to="/contacts" tag="a">КОнтакты</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<style lang="scss" scoped>
#brand-container {
  width: 100%;
  div {
    span {
      font-size: 30px;
    }
  }
}
</style>