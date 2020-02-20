<template>
  <v-app>
    <NavigationBar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
export default {
  name: "App",
  components: {
    NavigationBar
  },
  data: () => ({})
};
</script>

<style lang="scss" scoped>
.nav-button {
  background-color: transparent;
  &::before {
    background-color: transparent;
  }
}
</style> 