import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
  faFacebook,
  faInstagram,
  faGithub,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faFacebook, faInstagram, faGithub, faYoutube)

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
