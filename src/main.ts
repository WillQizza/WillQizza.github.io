import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faAngleDown, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { createApp } from 'vue';
import App from './App.vue';

import './assets/main.css';

library.add(faAngleDown, faLocationDot);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');