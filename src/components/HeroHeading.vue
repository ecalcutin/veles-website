<template>
  <v-sheet tile color="accent" class="veles-container">
    <v-row no-gutters align="end" class="white--text row-container">
      <div class="text">
        <h1>{{title}}</h1>
        <p>{{description}}</p>
      </div>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  name: "HeroHeading",
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.row-container {
  height: 100%;
  padding: 0 16px;

  .text {
    margin-top: 80px;
    margin-bottom: 20px;
    h1 {
      text-transform: uppercase;
      font-weight: 300;
    }
    p {
      font-weight: 300;
    }
  }
}
</style>