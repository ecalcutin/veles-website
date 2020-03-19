<template>
  <v-footer color="accent" padless>
    <v-row justify="center" no-gutters>
      <v-col class="accent lighten-2 py-4 text-center white--text" cols="12">
        <span>
          2003 - {{currentYear}}
          <strong>&laquo;VELES S.R.L.&raquo;</strong>
        </span>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>