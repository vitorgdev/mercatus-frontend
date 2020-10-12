<template>
  <v-navigation-drawer
    v-model="rightUserBarStatus"
    right
    app
    clipped
    class="elevation-6"
    temporary
  >
    <v-list nav dense class="mt-5">
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-home-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Dashboard</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-cart-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Produtos</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-shape-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Categorias</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-tape-measure</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Unidades de Medida</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-shopping-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Marcas</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "RightUserBar",
  props: {
    toggleRightUserBar: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      userBar: ""
    };
  },
  computed: {
    rightUserBarStatus: {
      get: function() {
        return this.toggleRightUserBar;
      },
      set: function(newValue) {
        this.userBar = newValue;
      }
    }
  },
  watch: {
    userBar: function(newVal) {
      this.$emit("changeRightUserBarStatus", newVal);
    }
  }
};
</script>
