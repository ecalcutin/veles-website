<template>
  <v-app>
    <SideNavigation />
    <NavigationBar />
    <v-content>
      <router-view />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import SideNavigation from "@/components/SideNavigation";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    NavigationBar,
    SideNavigation,
    Footer
  },
  data: () => ({})
};
</script>

<style lang="scss" scoped>
</style> 