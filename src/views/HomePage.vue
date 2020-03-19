<template>
  <div>
    <v-parallax height="350" :src="require('@/assets/images/parallax-home.jpg')">
      <v-row no-gutters justify="center" class="app-container">
        <v-col class="py-0" sm="12">
          <v-row class="fill-height" align="center">
            <v-col class="" cols="12" sm="6" md="6">
              <h1 class="display-1 font-weight-thin mb-4">
                Гарантия памяти
                <br />о ваших близких
              </h1>
              <h4 class="subheading">
                Производство надгробных памятников
                <br />и доставка по всей Молдове
              </h4>
              <div style="height: 64px" />
              <v-btn
                to="/gravestones"
                title="Купить гранитный памятник"
                tag="a"
                x-large
                color="accent"
                elevation="24"
              >Выбрать памятник</v-btn>
            </v-col>
            <v-col class="py-0 d-none d-sm-flex" cols="12" sm="6" md="6">
              <v-img :src="require('@/assets/images/BannerImg.png')" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-parallax>
    <SectionBlock id="quality-block" color="#dcd7d2" title="Высочайшее качество">
      <v-row no-gutters align="center">
        <v-col cols="12" sm="6">
          <v-img
            contain
            max-height="200"
            :src="require('@/assets/images/StandardsImg.png')"
            :lazy-src="require('@/assets/images/StandardsImg.png')"
          />
        </v-col>
        <v-col cols="12" sm="6">
          <h3 class="text-center text-sm-left">О нашей мастерской</h3>
          <p>
            Наша Компания специализируется на изготовлении
            <strong>гранитных надгробных памятников</strong> эксклюзивного дизайна.
            Каждый
            <strong>гранитный памятник</strong> для нас - произведение искусства. Каждая деталь прорабатывается тщательно
            на всем этапе
            <strong>призводства</strong>.
          </p>
        </v-col>
      </v-row>
    </SectionBlock>
    <SectionBlock id="advantages-block" title="Преимущества">
      <v-row no-gutters justify="space-between">
        <v-col cols="12" sm="6">
          <v-row no-gutters>
            <v-avatar class="avatar" color="accent" size="64">
              <v-icon size="32" class="white--text">mdi-wallet-plus</v-icon>
            </v-avatar>
            <v-col>
              <h3>Гарантия низкой цены</h3>
              <p>Если нашли памятник дешевле, то мы снизим цену. Пришлите ссылку на памятник в другом магазине.</p>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6">
          <v-row no-gutters>
            <v-avatar class="avatar" color="accent" size="64">
              <v-icon size="32" class="white--text">mdi-cash-remove</v-icon>
            </v-avatar>
            <v-col>
              <h3>Работаем без предоплаты</h3>
              <p>Платите только за результат. Памятник можно оплатить через 7 дней после получения.</p>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6">
          <v-row no-gutters>
            <v-avatar class="avatar" color="accent" size="64">
              <v-icon size="32" class="white--text">mdi-snowflake</v-icon>
            </v-avatar>
            <v-col>
              <h3>Заморозим цену на 1 год</h3>
              <p>Если хотите заказать памятник позже, то мы сохраним цену и избавим вас от повышений.</p>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6">
          <v-row no-gutters>
            <v-avatar class="avatar" color="accent" size="64">
              <v-icon size="32" class="white--text">mdi-phone</v-icon>
            </v-avatar>
            <v-col>
              <h3>Полная смета</h3>
              <p>Сразу рассчитаем всю стоимость с доставкой и установкой. Просто позвоните или напишите на e-mail</p>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6">
          <v-row no-gutters>
            <v-avatar class="avatar" color="accent" size="64">
              <v-icon size="32" class="white--text">mdi-hammer-wrench</v-icon>
            </v-avatar>
            <v-col>
              <h3>Установим памятник</h3>
              <p>Мы грамотно осуществим монтаж гранитных памятников и оград по Вашим требованиям.</p>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6">
          <v-row no-gutters>
            <v-avatar class="avatar" color="accent" size="64">
              <v-icon size="32" class="white--text">mdi-grave-stone</v-icon>
            </v-avatar>
            <v-col>
              <h3>Безукоризненные эскизы</h3>
              <p>Квалифицированные персонал и высококачественное сырьё гарантируют желанный результат.</p>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6">
          <v-row no-gutters>
            <v-avatar class="avatar" color="accent" size="64">
              <v-icon size="32" class="white--text">mdi-alarm-light</v-icon>
            </v-avatar>
            <v-col>
              <h3>Натуральный гранит</h3>
              <p>Мы работаем только с натуральным монолитным черным гранитом из карьеров в Украине.</p>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6">
          <v-row no-gutters>
            <v-avatar class="avatar" color="accent" size="64">
              <v-icon size="32" class="white--text">mdi-truck</v-icon>
            </v-avatar>
            <v-col>
              <h3>Доставка по Молдове</h3>
              <p>Мы доставим памятник в любую точку Молдовы за очень низкую цену.</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </SectionBlock>
  </div>
</template>

<script>
import SectionBlock from "@/components/SectionBlock";
export default {
  name: "HomePage",
  components: {
    SectionBlock
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
#quality-block {
  h3 {
    margin-bottom: 24px;
  }
  p {
    text-indent: 1em;
    text-align: justify;
  }
}
#advantages-block {
  .avatar {
    margin-right: 24px;
  }
}
</style>