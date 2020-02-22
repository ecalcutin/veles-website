<template>
  <div>
    <HeroHeading title="Контакты" description="Рассматриваем варианты сотрудничества" />
    <main class="app-container">
      <v-row justify="center">
        <v-col>
          <v-row no-gutters>
            <v-sheet width="100%" class="text-center my-5 py-5">
              <h2 class="d-inline display-3 text-center">Свяжитесь с нами</h2>
            </v-sheet>
          </v-row>
          <v-row>
            <v-col>
              <v-card flat>
                <v-card-title class="justify-end reverse-flex">Наши адреса</v-card-title>
                <v-card-subtitle class="text-right reverse-text">Офис и филиалы</v-card-subtitle>
                <v-card-text>
                  <v-list>
                    <v-list-item>
                      <v-list-item-content class="text-right reverse-text">
                        <v-list-item-title>ул. Ленина, 3а</v-list-item-title>
                        <v-list-item-subtitle>г. Комрат</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content class="text-right reverse-text">
                        <v-list-item-title>ул. Шевченко, 54</v-list-item-title>
                        <v-list-item-subtitle>г. Комрат</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content class="text-right reverse-text">
                        <v-list-item-title>ул. Победы, 29</v-list-item-title>
                        <v-list-item-subtitle>г. Комрат</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content class="text-right reverse-text">
                        <v-list-item-title>ул. Гагарина, 26</v-list-item-title>
                        <v-list-item-subtitle>г. Каушаны</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content class="text-right reverse-text">
                        <v-list-item-title>ул. Барбу Лэутару, 13</v-list-item-title>
                        <v-list-item-subtitle>г. Чимишлия</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content class="text-right reverse-text">
                        <v-list-item-title>ул. Ленина, 13</v-list-item-title>
                        <v-list-item-subtitle>г. Чадыр-Лунга</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-col>
            <v-divider class="d-none d-sm-flex" vertical></v-divider>
            <v-col>
              <v-card flat>
                <v-card-title>Наши сотрудники</v-card-title>
                <v-card-subtitle>Руководители и менеджеры</v-card-subtitle>
                <v-card-text>
                  <v-list>
                    <v-list-item>
                      <v-list-item-avatar>
                        <img
                          :src="require('@/assets/images/calcutina_natalia.jpg')"
                          alt="Калкутина Наталья"
                        />
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title>Калкутина Наталья</v-list-item-title>
                        <v-list-item-subtitle>Руководитель</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-avatar>
                        <img
                          :src="require('@/assets/images/calcutin_serghei.jpg')"
                          alt="Калкутин Сергей"
                        />
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title>Калкутин Сергей</v-list-item-title>
                        <v-list-item-subtitle>Руководитель</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-avatar>
                        <img :src="require('@/assets/images/pavel_iularji.jpg')" alt="Павел Юларжи" />
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title>Павел Юларжи</v-list-item-title>
                        <v-list-item-subtitle>Руководитель</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-avatar>
                        <img :src="require('@/assets/images/vlah_anna.jpg')" alt="Влах Анна" />
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title>Влах Анна</v-list-item-title>
                        <v-list-item-subtitle>Менеджер</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-avatar>
                        <img
                          :src="require('@/assets/images/calcutin_evgheni.jpg')"
                          alt="Калкутин Евгений"
                        />
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title>Калкутин Евгений</v-list-item-title>
                        <v-list-item-subtitle>Менеджер</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-avatar>
                        <v-icon x-large>mdi-account-circle</v-icon>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title>Толмач Александр</v-list-item-title>
                        <v-list-item-subtitle>Менеджер</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </main>
  </div>
</template>

<script>
import HeroHeading from "@/components/HeroHeading";
export default {
  name: "ContactsPage",
  components: {
    HeroHeading
  }
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 570px) {
  .reverse-flex {
    justify-content: start !important;
  }
  .reverse-text {
    text-align: left !important;
  }
}
</style>