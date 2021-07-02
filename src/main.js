import { createApp } from 'vue'
import App from './App.vue'
import './index.css';
import components from './components/UI'

const app = createApp(App)

for (const iterator of components) {
    app.component(iterator.name, iterator)
}
// components.forEach(component =>{
//     app.component(component.name, component)
// })


app.mount('#app')
