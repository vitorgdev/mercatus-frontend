<template>
  <div>
    <AppBar />
    <Sidebar />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </div>
</template>

<script>
import AppBar from "./AppBar";
import Sidebar from "./Sidebar";
export default {
  components: {
    AppBar,
    Sidebar
  }
};
</script>
