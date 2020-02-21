<template>
  <v-footer color="accent" padless>
    <v-row justify="center" no-gutters>
      <div class="py-4">
        <v-btn color="white" text rounded>Главная</v-btn>
        <v-btn class="d-none d-sm-inline" color="white" text rounded>Памятники</v-btn>
        <v-btn class="d-none d-md-inline" color="white" text rounded>Атрибутика</v-btn>
        <v-btn class="d-none d-md-inline" color="white" text rounded>Декор</v-btn>
        <v-btn color="white" text rounded>Услуги</v-btn>
        <v-btn color="white" text rounded>Контакты</v-btn>
      </div>
      <v-col class="accent lighten-2 py-4 text-center white--text" cols="12">
        <span>
          2003 - {{currentYear}}
          <strong>VELES S.R.L.</strong>
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