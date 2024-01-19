import "./assets/styles/main.css";

import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faXmark,
  faArrowRight,
  faTrash,
  faWind,
  faDroplet,
  faUmbrella,
  faArrowsToCircle,
  faThermometerThreeQuarters,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faXmark,
  faArrowRight,
  faTrash,
  faWind,
  faDroplet,
  faUmbrella,
  faArrowsToCircle,
  faThermometerThreeQuarters,
  faSun
);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");
