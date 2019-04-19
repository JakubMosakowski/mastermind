import Vue from 'vue';
import Router from 'vue-router';
import AddGame from './addgame/AddGame.vue';
import Game from './game/Game.vue';
import Search from './search/Search.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: AddGame,
    },
    {
      path: '/game',
      name: 'game',
      component: Game,
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
    },
  ],
});
