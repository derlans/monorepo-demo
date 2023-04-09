import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './samples/node-api'
import { add } from '@monorepo-demo/utils'

console.log(add, add(1, 2))
createApp(App)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
