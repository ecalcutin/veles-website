<template>
  <v-navigation-drawer v-model="sideNav" clipped absolute app>
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
      set(opened) {
        this.$store.dispatch(UI_SIDENAV_TOGGLE, opened);
      }
    }
  }
};
</script>