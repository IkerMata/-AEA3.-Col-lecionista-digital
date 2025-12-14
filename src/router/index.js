import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import SearchPage from '@/views/SearchPage.vue';
import FavoritesPage from '@/views/FavoritesPage.vue';
import ItemDetailPage from '@/views/ItemDetailPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/search', component: SearchPage },
    { path: '/favorites', component: FavoritesPage },
    { path: '/item/:id', component: ItemDetailPage },
  ]
});

export default router
