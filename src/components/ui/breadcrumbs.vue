<template>
  <v-breadcrumbs class="pa-0 mt-2" :items="items"></v-breadcrumbs>
</template>

<script>
export default {
  name: "Breadcrumbs",
  props: {
    routes: {
      type: Array
    }
  },
  data: () => ({
    items: [
      {
        text: "Dashboard",
        disabled: false,
        to: { name: "dashboard" }
      }
    ]
  })
};
</script>
