<template>
  <div class="auth-background">
    <b-container>
      <b-row>
        <b-col cols="6">
          <b-row>
            <b-col
              cols="2"
              align-self="center"
            >
              <img
                :src="logo"
                alt="logo"
                width="80%"
              >
            </b-col>

            <b-col
              class="identity"
              align-self="center"
            >
              <span class="text-white display-5">kokkua</span>
            </b-col>
          </b-row>
          <b-row style="margin-top:20%">
            <b-col>
              <span class="title red-line text-grey">kokkua apresenta</span>
            </b-col>
          </b-row>
          <b-row class="mt-3">
            <b-col cols="8">
              <span class="description text-white">toda sua empresa em um sistema.</span>
            </b-col>
          </b-row>
          <b-row>
            <b-col
              cols="8"
              class="text-right"
            >
              <span class="title text-grey">saiba mais <img :src="arrow" alt=""></span>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
// import store from './_store'
import Logo from "../../assets/images/logo.svg";
import Arrow from "../../assets/images/arrow.svg";
export default {
  name: 'AuthScreen',
  data () {
    return {
      logo: Logo,
      arrow: Arrow
    }
  }
  // components: {
  //   ChatList
  // },
  // computed: {
  //   ...mapGetters({
  //     messages: "$_chat/messages"
  //   })
  // },
  // created() {
  //   const STORE_KEY = "$_chat";
  //   // eslint-disable-next-line no-underscore-dangle
  //   if (!(STORE_KEY in this.$store._modules.root._children)) {
  //     this.$store.registerModule(STORE_KEY, store);
  //   }
  // },
  // mounted() {
  //   this.$store.dispatch("$_chat/getMessages");
  // }
}
</script>
<style lang="scss" scoped>
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
      font-size: 42px;
      font-weight: bold;
    }
  }
  .title {
    font-size: 28px;
    color: #dfdfe2;
    &.red-line {
      &:before {
        content: "";
        position: absolute;
        width: 20%;
        /* height: 0px; */
        border: 1px solid red;
        top: 40px;
      }
    }
  }
  .description {
    font-size: 60px;
    font-family: "Inconsolata", monospace;
    line-height: 60px;
  }
}
</style>
