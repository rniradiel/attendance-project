import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCaretDown, faUser, faMagnifyingGlass, faCalendarWeek, faDownload, faBuilding, faUsers, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faCaretDown, faUser, faMagnifyingGlass, faCalendarWeek, faDownload, faBuilding, faUsers, faLocationDot);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
