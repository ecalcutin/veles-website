<template>
  <v-navigation-drawer clipped stateless :value="opened" app>
    <!-- -->
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "SideNavigation",
  computed: {
    opened() {
      return this.$store.state.UI.sideNav.opened;
    }
  }
};
</script>