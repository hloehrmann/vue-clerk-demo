import './assets/main.css'

import { createApp } from 'vue'
import { clerkPlugin } from 'vue-clerk/plugin'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router).use(clerkPlugin, {
	publishableKey: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
})

app.mount('#app')
