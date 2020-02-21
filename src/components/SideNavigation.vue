<template>
  <v-navigation-drawer v-model="sideNav" app>
    <v-list>
      <v-subheader>Меню</v-subheader>
      <v-list-item-group>
        <v-list-item to="/">
          <v-list-item-title>Главная</v-list-item-title>
        </v-list-item>
        <v-list-item to="/gravestones">
          <v-list-item-title>Памятники</v-list-item-title>
        </v-list-item>
        <v-list-item to="/accessories">
          <v-list-item-title>Атрибутика</v-list-item-title>
        </v-list-item>
        <v-list-item to="/decor">
          <v-list-item-title>Декор</v-list-item-title>
        </v-list-item>
        <v-list-item to="/services">
          <v-list-item-title>Услуги</v-list-item-title>
        </v-list-item>
        <v-list-item to="/contacts">
          <v-list-item-title>Контакты</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { UI_SIDENAV_TOGGLE } from "@/store/ui/action-types";
export default {
  name: "SideNavigation",
  computed: {
    sideNav: {
      get() {
        return this.$store.state.UI.sideNav.opened;
      },
      set(value) {
        if (!value) this.$store.dispatch(UI_SIDENAV_TOGGLE, value);
      }
    }
  }
};
</script>