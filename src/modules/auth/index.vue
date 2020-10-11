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
              <validation-observer ref="observer">
                <v-form>
                  <validation-provider
                    v-slot="{ errors }"
                    name="Usuário"
                    rules="required"
                  >
                    <v-text-field
                      label="Usuário"
                      :error-messages="errors"
                      v-model="form.username"
                      filled
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    name="Senha"
                    rules="required"
                  >
                    <v-text-field
                      v-model="form.password"
                      :error-messages="errors"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="showPassword = !showPassword"
                      :type="showPassword ? 'text' : 'password'"
                      label="Senha"
                      filled
                    ></v-text-field>
                  </validation-provider>
                </v-form>
              </validation-observer>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-btn @click="submit" x-large expansed color="primary" tile block>
            Entrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { required } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} não pode ser vazio(a)"
});

export default {
  name: "AuthModule",
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      errors: null,
      form: {
        username: "",
        password: ""
      },
      showPassword: false
    };
  },
  methods: {
    submit() {
      this.$refs.observer.validate();
    }
  }
};
</script>
