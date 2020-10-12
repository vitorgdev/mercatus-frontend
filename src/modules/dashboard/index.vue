<template>
  <v-row>
    <v-col cols="6">
      <v-row>
        <v-col cols="3" v-for="kpi in kpis" :key="kpi.value">
          <Kpi :icon="kpi.icon" :title="kpi.title" :value="kpi.value" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <RandomChart></RandomChart>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="6">
      <v-row>
        <v-col cols="3" v-for="kpi in kpis" :key="kpi.value">
          <Kpi :icon="kpi.icon" :title="kpi.title" :value="kpi.value" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <RandomChart></RandomChart>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import Kpi from "./_components/KpiCard";
import RandomChart from "../../components/ui/charts/RandomChart";
export default {
  name: "Dashboard",
  data() {
    return {
      kpis: [
        {
          icon: "mdi-account-multiple-outline",
          title: "Cliente",
          value: "7890"
        },
        {
          icon: "mdi-account-multiple-outline",
          title: "Produtos Vendidos",
          value: "42568"
        },
        {
          icon: "mdi-account-multiple-outline",
          title: "Email's",
          value: "25"
        },
        {
          icon: "mdi-account-multiple-outline",
          title: "Venda",
          value: "3589,00"
        }
      ]
    };
  },
  components: {
    Kpi,
    RandomChart
  }
};
</script>
