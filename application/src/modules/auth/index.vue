<template>
  <div class="auth-background">
    <v-container>
      <v-row align-v="center">
        <v-col cols="6">
          <v-row>
            <v-col cols="2" align-self="center">
              <img :src="logo" alt="logo" width="80%" />
            </v-col>

            <v-col class="identity" align-self="center">
              <span class="white--text display-2">kokkua</span>
            </v-col>
          </v-row>
          <v-row style="margin-top:20%">
            <v-col>
              <span class="headline red-line">kokkua apresenta</span>
            </v-col>
          </v-row>
          <v-row class="mt-3">
            <v-col cols="8">
              <span class="description white--text display-3"
                >toda sua empresa em um sistema.</span
              >
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8" class="text-right">
              <span class="headline more"
                >saiba mais <img :src="arrow" width="15em" alt=""
              /></span>
            </v-col>
          </v-row>
          <v-row class="mt-5">
            <v-col class="system">
              <div></div>
            </v-col>
            <v-col class="system">
              <div></div>
            </v-col>
            <v-col class="system">
              <div></div>
            </v-col>
            <v-col class="system">
              <div></div>
            </v-col>
          </v-row>
          <v-row class="mt-5">
            <v-col class="system">
              <div></div>
            </v-col>
            <v-col class="system">
              <div></div>
            </v-col>
            <v-col class="system">
              <div></div>
            </v-col>
            <v-col class="system">
              <div></div>
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          <v-row justify="end" align="center" style="height: 100%">
            <v-col cols="8">
              <v-card>
                <v-card-title>
                  <v-row>
                    <v-col>
                      <div justify="center">
                        <img width="50%" :src="avatar" />
                      </div>
                    </v-col>
                  </v-row>
                </v-card-title>
                <v-card-text class="mt-5">
                  <v-row>
                    <v-col>
                      <b-form @submit.stop.prevent="onSubmit">
                        <b-input-group id="email-group">
                          <b-input-group-text slot="prepend">
                            <font-awesome-icon :icon="userIcon" />
                          </b-input-group-text>
                          <b-form-input
                            autocomplete="off"
                            :state="
                              $v.form.email.$dirty
                                ? !$v.form.email.$error
                                : null
                            "
                            aria-describedby="input-1-live-feedback"
                            class="med-borderless"
                            id="email"
                            v-model="$v.form.email.$model"
                            type="email"
                            required
                            placeholder="Email"
                          ></b-form-input>
                          <b-form-invalid-feedback id="input-live-feedback">
                            <span v-if="$v.form.email.$model.length == ''"
                              >Esse campo é obrigatório.</span
                            >
                            <span v-else
                              >O formato deve ser: fulano@algo.algo!</span
                            >
                          </b-form-invalid-feedback>
                        </b-input-group>
                        <b-input-group id="email-group" class="mt-4">
                          <b-input-group-text slot="prepend">
                            <font-awesome-icon :icon="lockIcon" />
                          </b-input-group-text>
                          <b-form-input
                            :state="
                              $v.form.password.$dirty
                                ? !$v.form.password.$error
                                : null
                            "
                            class="med-borderless"
                            id="password"
                            v-model="$v.form.password.$model"
                            type="password"
                            required
                            placeholder="Senha"
                          ></b-form-input>
                          <b-form-invalid-feedback id="input-live-feedback">
                            <span>Esse campo é obrigatório.</span>
                          </b-form-invalid-feedback>
                        </b-input-group>
                        <div class="d-flex justify-content-center mt-5">
                          <b-button
                            type="submit"
                            :disabled="$v.form.$invalid"
                            variant="purple"
                          >
                            ENTRAR
                          </b-button>
                        </div>
                      </b-form>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-row>
                  <v-col class="text-center mt-4" cols="12"
                    ><span style="color: #7D7D7D"
                      >esqueceu a senha?? nós resolvemos.</span
                    ></v-col
                  >
                  <v-col class="text-center">
                    <b-link class="" style="color: #292939; font-size: 1.5rem"
                      >clique aqui!</b-link
                    >
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import store from "./_store";
import Logo from "../../assets/images/logo.svg";
import Arrow from "../../assets/images/arrow.svg";
import Avatar from "../../assets/images/man.svg";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "AuthScreen",
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      logo: Logo,
      arrow: Arrow,
      avatar: Avatar,
      userIcon: faUser,
      lockIcon: faLock,
      form: {
        email: "",
        password: ""
      }
    };
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  },
  created() {
    const STORE_KEY = "$_auth";
    // eslint-disable-next-line no-underscore-dangle
    if (!(STORE_KEY in this.$store._modules.root._children)) {
      this.$store.registerModule(STORE_KEY, store);
    }
  },
  methods: {
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$error) return;
      this.$store.dispatch("$_auth/authenticate", this.form);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/md/_colors.scss";
.system {
  div {
    width: 80px;
    height: 80px;
    background-color: #dfdfe2;
    box-shadow: 0px 2px 6px #636363;
  }
  top: 0px;
  transition: all 50ms linear;
  &:hover {
    top: -10px;
    transition: all 100ms linear;
  }
}
.auth-background {
  background-image: url("../../assets/images/background-authentication.svg");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  height: 100vh;
}
.container {
  padding-top: 3%;
  .identity {
    span {
      font-weight: bold;
    }
  }
  .headline {
    &.more {
      transition: border-color 500ms ease;
      border-bottom: 1px solid transparent;
      cursor: pointer;
      &:hover {
        border-bottom: 1px solid red;
      }
    }
    color: $grey-light;
    &.red-line {
      &:before {
        content: "";
        position: absolute;
        width: 7%;
        /* height: 0px; */
        border: 1px solid red;
        margin-top: 1.4em;
      }
    }
  }
  .description {
    font-size: 2.2rem;
    font-family: "Inconsolata", monospace !important;
    line-height: 4rem;
  }
}
</style>
