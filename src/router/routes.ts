import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
<<<<<<< Updated upstream
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
=======
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/SavedRecipe',
        component: () => import('pages/SavedRecipe.vue'),
      },
      {
        path: '/Test',
        component: () => import('pages/TestPage.vue'),
      },
    ],
>>>>>>> Stashed changes
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
