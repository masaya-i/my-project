import TOP from './pages/TOP.vue'
import MYSELF from './pages/MYSELF.vue'
import MUSIC from './pages/MUSIC.vue'
import SKILL from './pages/SKILL.vue'
import GAME from './pages/GAME.vue'

export const routes = [
  // path はルートパスからのアドレス
  // component は import したコンポーネントの名称
  {
    path: '/TOP',
    component: TOP
  },
  {
    path: '/MYSELF',
    component: MYSELF
  },
  {
    path: '/MUSIC',
    component: MUSIC
  },
  {
    path: '/SKILL',
    component: SKILL
  },
  {
    path: '/GAME',
    component: GAME
  },
]
