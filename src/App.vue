<template>
  <v-app>
    <SideNavigation />
    <NavigationBar />
    <v-content>
      <transition
        name="fade"
        mode="out-in"
        @beforeLeave="beforeLeave"
        @enter="enter"
        @afterEnter="afterEnter"
      >
        <router-view />
      </transition>
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
  data: () => ({}),
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style> 