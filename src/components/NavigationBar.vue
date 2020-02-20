<template>
  <v-app-bar app class="veles-container">
    <v-img
      alt="Велес логотип"
      class="shrink mr-2"
      :src="require('@/assets/grave.svg')"
      transition="scale-transition"
      width="30"
    />
    <span style="font-size: 30px">𝐕𝐄𝐋𝐄𝐒</span>
    <v-spacer></v-spacer>
    <v-btn class="nav-button" :ripple="false" text to="/" tag="a">Главная</v-btn>
    <v-btn class="nav-button" :ripple="false" text to="/gravestones" tag="a">Памятники</v-btn>
    <v-btn class="nav-button" :ripple="false" text to="/accessories" tag="a">Атрибутика</v-btn>
    <v-btn class="nav-button" :ripple="false" text to="/decor" tag="a">Декор</v-btn>
    <v-btn class="nav-button" :ripple="false" text to="/services" tag="a">Услуги</v-btn>
    <v-btn class="nav-button" :ripple="false" text to="/contacts" tag="a">КОнтакты</v-btn>
  </v-app-bar>
</template>