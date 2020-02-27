<template>
  <b-input-group id="email-group">
    <b-input-group-text slot="prepend">
      <font-awesome-icon :icon="userIcon" />
    </b-input-group-text>
    <b-form-input
      class="med-borderless"
      id="email"
      v-model="email"
      type="email"
      required
      placeholder="Email"
    ></b-form-input>
  </b-input-group>
</template>
<script>
export default {

}
</script>
