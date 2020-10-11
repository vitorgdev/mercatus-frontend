<template>
  <v-navigation-drawer app clipped class="elevation-6" expand-on-hover>
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
  name: "Sidebar"
};
</script>
