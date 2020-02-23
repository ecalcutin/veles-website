<template>
  <v-sheet :dark="dark" class="section-block" tile :height="height" :color="color">
    <v-container fluid class="app-container">
      <h2 class="display-1">{{title}}</h2>
      <slot></slot>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: "SectionBlock",
  props: {
    height: Number,
    color: String,
    title: String,
    dark: Boolean
  }
};
</script>
<style lang="scss" scoped>
.section-block {
  padding: 48px 0;
}
h2 {
  text-align: center;
  text-transform: uppercase;
}
</style>