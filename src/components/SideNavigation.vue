<template>
  <v-navigation-drawer clipped v-model="sideNav" app>
    <!-- -->
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