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
    <v-toolbar-items>
      <v-btn text to="/" tag="a">Главная</v-btn>
      <v-btn text to="/gravestones" tag="a">Памятники</v-btn>
      <v-btn text to="/accessories" tag="a">Атрибутика</v-btn>
      <v-btn text to="/decor" tag="a">Декор</v-btn>
      <v-btn text to="/services" tag="a">Услуги</v-btn>
      <v-btn text to="/contacts" tag="a">КОнтакты</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>