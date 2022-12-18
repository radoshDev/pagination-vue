import { createApp } from 'vue'
import { Quasar } from 'quasar'
import App from './App.vue'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import { store } from './store/store'

createApp(App).use(store).use(Quasar).mount('#app')
