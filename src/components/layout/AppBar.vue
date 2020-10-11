<template>
  <v-app-bar app clipped-left color="white" light>
    <v-btn text @click="backRoute">
      <span class="text-h6 font-weight-regular text-uppercase">PISTORIUM</span>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
      text
    >
      <v-badge
        dot
        class="mr-6"
        :content="countMessages"
        :value="countMessages"
        color="#FF402E"
        overlap
      >
        <v-icon color="accent">mdi-bell</v-icon>
      </v-badge>

      <span class="mr-2">Olá, {{ `${firstName} ${lastName}` }}</span>
      <v-icon color="accent">mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    firstName: {
      type: String,
      default: "Zezinho"
    },
    lastName: {
      type: String,
      default: "da Silva"
    },
    collapsed: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    countMessages: 1
  }),
  methods: {
    handlerCollapseNavigationDrawner(collapse) {
      this.collapsed = !collapse;
    },
    backRoute() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>
