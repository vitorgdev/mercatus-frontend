<template>
  <v-row justify="center" style="height: 100%;">
    <v-col cols="auto" align-self="center">
      <v-card tile class="mx-auto my-12 pl-6 pr-6 pb-6">
        <v-card-title class="justify-center">
          <v-row>
            <v-col cols="12" class="text-center">
              <span
                class="d-block accent--text text-h5 font-weight-medium text-center"
              >
                Bem vindo ao Pistorium
              </span>
              <span class="d-block accent--text text-h6 font-weight-thin">
                Logue-se para continuar
              </span>
            </v-col>
          </v-row>
        </v-card-title>

        <v-card-text>
          <v-row>
            <v-col>
              <v-text-field label="Usuário" filled></v-text-field>
              <v-text-field
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                :type="showPassword ? 'text' : 'password'"
                label="Senha"
                filled
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-btn x-large expansed color="primary" tile block>
            Entrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "AuthModule",
  data() {
    return {
      showPassword: false
    };
  }
};
</script>
