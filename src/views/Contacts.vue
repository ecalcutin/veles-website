<template>
  <div>
    <HeroHeading title="Контакты" description="Рассматриваем варианты сотрудничества">
      <v-btn fab absolute bottom right>
        <v-icon>mdi-phone</v-icon>
      </v-btn>
    </HeroHeading>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d176206.93841274903!2d28.49659771473298!3d46.36475683996693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c9deef79056f11%3A0x7d94d6b789bc7e04!2sVelesstan!5e0!3m2!1sen!2s!4v1582401432050!5m2!1sen!2s"
      width="100%"
      height="400"
      frameborder="0"
      style="border:0; display:block;"
      allowfullscreen
    ></iframe>
    <v-sheet color="accent" dark tile class="sheet-block">
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="12" xs="12" sm="8" lg="7" class="text-center">
            <h2 class="display-1">НАПИШИТЕ НАМ</h2>
            <div style="height: 24px" />
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12" xs="12" sm="12" md="6">
                    <v-text-field
                      type="text"
                      label="Как к Вам обратиться?"
                      autocomplete="new-password"
                    />
                  </v-col>
                  <v-col cols="12" xs="12" md="6">
                    <v-text-field type="tel" label="Телефон" autocomplete="new-password" />
                  </v-col>
                  <v-col cols="12" xs="12" md="12">
                    <v-textarea rows="2" label="Текст сообщения" />
                  </v-col>
                  <v-btn block text>Отправить</v-btn>
                </v-row>
              </v-container>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet tile class="sheet-block">
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="12" xs="12" sm="8" lg="7" class="text-center">
            <h2 class="display-1">НАША КОМАНДА</h2>
            <div style="height: 24px" />
            <v-row>
              <v-col cols="12" xs="12" sm="12" md="4">
                <v-card flat>
                  <v-card-text class="pb-0">
                    <v-avatar size="128">
                      <img
                        :src="require('@/assets/images/calcutina_natalia.jpg')"
                        alt="Калкутина Наталья"
                      />
                    </v-avatar>
                    <v-list-item>
                      <v-list-item-content class="pb-0">
                        <v-list-item-title>Калкутина Наталья</v-list-item-title>
                        <v-list-item-subtitle>Руководитель</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="4">
                <v-card flat>
                  <v-card-text class="pb-0">
                    <v-avatar size="128">
                      <img
                        :src="require('@/assets/images/calcutin_serghei.jpg')"
                        alt="Калкутин Сергей"
                      />
                    </v-avatar>
                    <v-list-item>
                      <v-list-item-content class="pb-0">
                        <v-list-item-title>Калкутин Сергей</v-list-item-title>
                        <v-list-item-subtitle>Руководитель</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="4">
                <v-card flat>
                  <v-card-text class="pb-0">
                    <v-avatar size="128">
                      <img :src="require('@/assets/images/pavel_iularji.jpg')" alt="Павел Юларжи" />
                    </v-avatar>
                    <v-list-item>
                      <v-list-item-content class="pb-0">
                        <v-list-item-title>Юларжи Павел</v-list-item-title>
                        <v-list-item-subtitle>Руководитель</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="4">
                <v-card flat>
                  <v-card-text class="pb-0">
                    <v-avatar size="128">
                      <img :src="require('@/assets/images/vlah_anna.jpg')" alt="Влах Анна" />
                    </v-avatar>
                    <v-list-item>
                      <v-list-item-content class="pb-0">
                        <v-list-item-title>Влах Анна</v-list-item-title>
                        <v-list-item-subtitle>Менеджер</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="4">
                <v-card flat>
                  <v-card-text class="pb-0">
                    <v-avatar size="128">
                      <img
                        :src="require('@/assets/images/calcutin_evgheni.jpg')"
                        alt="Калкутин Евгений"
                      />
                    </v-avatar>
                    <v-list-item>
                      <v-list-item-content class="pb-0">
                        <v-list-item-title>Калкутин Евгений</v-list-item-title>
                        <v-list-item-subtitle>Контент менеджер</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="4">
                <v-card flat>
                  <v-card-text class="pb-0">
                    <v-avatar color="accent" size="128">
                      <img
                        :src="require('@/assets/images/tolmach_alexandr.jpg')"
                        alt="Толмач Александр"
                      />
                    </v-avatar>
                    <v-list-item>
                      <v-list-item-content class="pb-0">
                        <v-list-item-title>Толмач Александр</v-list-item-title>
                        <v-list-item-subtitle>Контент менеджер</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import HeroHeading from "@/components/HeroHeading";
export default {
  name: "ContactsPage",
  components: {
    HeroHeading
  },
  methods: {}
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
.sheet-block {
  padding: 48px 0;
}
</style>