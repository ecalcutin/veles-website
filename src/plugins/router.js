import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "home-page" */ '../views/HomePage.vue'),
    meta: {
      title: 'Главная'
    }
  },
  {
    path: '/gravestones',
    name: 'Gravestones',
    component: () =>
      import(
        /* webpackChunkName: "gravestones-page" */ '../views/Gravestones.vue'
      ),
    meta: {
      title: 'Памятники'
    }
  },
  {
    path: '/services',
    name: 'Services',
    component: () =>
      import(
        /* webpackChunkName: "services-page" */ '../views/ServicesPage.vue'
      ),
    meta: {
      title: 'Услуги'
    }
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () =>
      import(
        /* webpackChunkName: "contacts-page" */ '../views/ContactsPage.vue'
      ),
    meta: {
      title: 'Контакты'
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
