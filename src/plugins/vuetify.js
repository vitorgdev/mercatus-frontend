import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#FF6F61",
        secondary: "#3F428E",
        accent: "#606060",
        error: "#A72828",
        warning: "#FFAB61",
        info: "#C661FF",
        success: "#28A745"
      }
    }
  }
});
