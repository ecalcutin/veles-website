<template>
  <div>
    <HeroHeading title="Контакты" description="Рассматриваем варианты сотрудничества" />
    <main class="app-container">
      <v-row justify="center">
        <v-col xs="12" sm="12" md="10" lg="8" xl="8">
          <v-row>
            <v-col xs="12" sm="6" md="6">
              <v-card outlined>
                <v-card-title>Наши адреса</v-card-title>
                <v-card-subtitle>Офис и филиалы</v-card-subtitle>
                <v-card-text>
                  <v-list>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>ул. Ленина, 3а</v-list-item-title>
                        <v-list-item-subtitle>г. Комрат</v-list-item-subtitle>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-chip label>Офис</v-chip>
                      </v-list-item-action>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>ул. Шевченко, 54</v-list-item-title>
                        <v-list-item-subtitle>г. Комрат</v-list-item-subtitle>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-chip label>24/7</v-chip>
                      </v-list-item-action>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>ул. Победы, 29</v-list-item-title>
                        <v-list-item-subtitle>г. Комрат</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>ул. Гагарина, 26</v-list-item-title>
                        <v-list-item-subtitle>г. Каушаны</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>ул. Барбу Лэутару, 13</v-list-item-title>
                        <v-list-item-subtitle>г. Чимишлия</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>ул. Ленина, 13</v-list-item-title>
                        <v-list-item-subtitle>г. Чадыр-Лунга</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col xs="12" sm="6" md="6">
              <v-card outlined>
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