<template>
  <v-app-bar clipped-left app id="toolbar">
    <div class="d-flex app-container">
      <router-link to="/" tag="a" id="brand-container" class="d-flex">
        <v-app-bar-nav-icon @click="toggleSideNav" class="d-xs-flex d-md-none"></v-app-bar-nav-icon>
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
      </router-link>
      <v-toolbar-items class="d-none d-md-flex">
        <v-menu offset-y>
          <template v-slot:activator="{on}">
            <v-btn text v-on="on">Каталог</v-btn>
          </template>
          <v-card tile style="min-width: 250px">
            <v-subheader>Меню</v-subheader>
            <v-list tile>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-grave-stone</v-icon>
                </v-list-item-action>
                <v-list-item-title>Памятники</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-fireplace-off</v-icon>
                </v-list-item-action>
                <v-list-item-title>Варианты установок</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-brush</v-icon>
                </v-list-item-action>
                <v-list-item-title>Художественное оформление</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-face-recognition</v-icon>
                </v-list-item-action>
                <v-list-item-title>Фотокерамика</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-christianity</v-icon>
                </v-list-item-action>
                <v-list-item-title>Ритуальная аттрибутика</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-equalizer-outline</v-icon>
                </v-list-item-action>
                <v-list-item-title>Изделия из Ж/Бетона</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-equalizer</v-icon>
                </v-list-item-action>
                <v-list-item-title>Изделия из гранита и мрамора</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
        <v-btn text to="/services" tag="a">Услуги</v-btn>
        <v-btn text to="/news" tag="a">Новости</v-btn>
        <v-btn text to="/contacts" tag="a">Контакты</v-btn>
      </v-toolbar-items>
    </div>
  </v-app-bar>
</template>

<script>
import { UI_SIDENAV_TOGGLE } from "@/store/ui/action-types";
export default {
  name: "NavigationBar",
  methods: {
    toggleSideNav() {
      this.$store.dispatch(UI_SIDENAV_TOGGLE, true);
    }
  }
};
</script>

<style lang="scss" scoped>
#brand-container {
  width: 100%;
  div {
    span {
      font-size: 30px;
    }
  }
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
</style>