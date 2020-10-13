<template>
  <v-card tile>
    <v-card-text class="text-center">
      <v-icon class="d-block mb-1" color="primary" :size="80">
        {{ icon }}
      </v-icon>
      <span class="d-block font-weight-bold text-caption mb-1">
        {{ title }}
      </span>
      <span
        class="d-block font-weight-bold text-xs-h6 text-xl-h4 primary--text mb-1"
      >
        {{ value }}
      </span>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "KpiCard",
  props: {
    icon: {
      type: String
    },
    title: {
      type: String
    },
    value: {
      type: String
    }
  }
};
</script>
