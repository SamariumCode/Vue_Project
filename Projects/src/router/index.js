import { createRouter, createWebHistory } from 'vue-router';
import PhoneStep from '@/components/loginPages/PhoneStep.vue';
import CheckPassword from '@/components/loginPages/CheckPassword.vue';
import RegisterPageOne from '@/components/registerPages/registerPageOne.vue';
import MainPage from '@/components/mainPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'PhoneStep',
      component: PhoneStep,
    },
    {
      path: '/checkPassword',
      name: 'CheckPassword',
      component: CheckPassword,
    },
    {
      path: '/register',
      name: 'RegisterPageOne',
      component: RegisterPageOne,
    },
    {
      path: '/mainPage',
      name: 'MainPage',
      component: MainPage,
    },
  ],
});

export default router;
