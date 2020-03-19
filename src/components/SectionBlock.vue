<template>
  <v-sheet :dark="dark" class="section-block" tile :height="height" :color="color">
    <div fluid class="app-container">
      <h2 class="display-1">{{title}}</h2>
      <slot></slot>
    </div>
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
  padding: 64px 0;
}
h2 {
  margin-bottom: 32px;
  font-weight: 300 !important;
  text-align: center;
  text-transform: uppercase;
}
</style>