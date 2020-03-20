<template>
  <p class="form-input-hint" v-if="show">
    {{ message }}
  </p>
</template>

<script>
export default {
  name: 'Error',
  props: {
    show: { Type: Boolean, required: false },
    message: { Type: String, required: true }
  }
};
</script>

<style scoped></style>
