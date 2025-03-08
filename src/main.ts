import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { createApp } from 'vue';
import App from './App.vue';

import './assets/main.css';

library.add(faAngleDown);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');