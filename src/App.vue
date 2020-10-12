<template>
  <VApp>
    <Component :is="layout" />
  </VApp>
</template>

<script>
import Base from "./components/layout/Base";
import Blank from "./components/layout/Blank";
const STORE_KEY = "$_auth";
import { mapGetters } from "vuex";

import JWT from "./api/jwt";

import storeAuth from "./modules/auth/_store";

export default {
  name: "App",

  data: () => ({
    layout: ""
  }),

  computed: {
    ...mapGetters({ authenticated: "$_auth/authenticated" })
  },

  created() {
    if (!(STORE_KEY in this.$store._modules.root._children)) {
      this.$store.registerModule(STORE_KEY, storeAuth);
    }
  },

  components: {
    Base,
    Blank
  },

  watch: {
    async $route(newVal) {
      switch (newVal.name) {
        case "login":
          if (JWT.getToken()) {
            await this.$router.push("/");
            this.layout = Base;
          } else {
            this.layout = Blank;
          }
          break;
        default:
          if (JWT.getToken()) {
            this.layout = Base;
          } else {
            this.layout = Blank;
          }

          break;
      }
    }
  }
};
</script>
