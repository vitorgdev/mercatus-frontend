<template>
  <div>
    <AppBar @rightUserBar="openUserBar" />
    <Sidebar />
    <RightUserBar
      @changeRightUserBarStatus="openUserBar"
      :toggleRightUserBar="toggleRightUserBar"
    />
    <v-main>
      <v-container>
        <Breadcrumbs />
        <v-divider class="mt-3" />
        <router-view />
      </v-container>
    </v-main>
  </div>
</template>

<script>
import AppBar from "./AppBar";
import Sidebar from "./Sidebar";
import Breadcrumbs from "../ui/breadcrumbs";
import RightUserBar from "./RightUserBar";
export default {
  data() {
    return {
      toggleRightUserBar: false
    };
  },
  components: {
    AppBar,
    Sidebar,
    RightUserBar,
    Breadcrumbs
  },
  methods: {
    openUserBar(e) {
      this.toggleRightUserBar = e;
    }
  }
};
</script>
