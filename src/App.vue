<template>
  <v-app :class="authenticated ? '' : 'login__backgroundcolor'">
    <AppBar v-if="authenticated" />
    <Sidebar v-if="authenticated" />
    <v-main>
      <v-container :style="authenticated ? '' : 'height: 100vh'">
        <Component :is="authenticated ? 'HelloWorld' : 'Login'" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import AppBar from "./components/layout/AppBar";
import Sidebar from "./components/layout/Sidebar";
import { mapGetters } from "vuex";
import Login from "../src/modules/auth";

export default {
  name: "App",

  computed: {
    ...mapGetters({ authenticated: "$_auth/authenticated" })
  },

  components: {
    HelloWorld,
    AppBar,
    Sidebar,
    Login
  },

  data: () => ({
    //
  })
};
</script>
