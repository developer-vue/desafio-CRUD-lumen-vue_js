<template>
  <div v-if="loading">
    <Spinner
      :line-size="lineSize"
      :size="size"
      :message="message"
      :text-fg-color="textColor"
      :font-size="fontSize"
      :speed="speed"
    ></Spinner>
  </div>
</template>

<script>
import Spinner from 'vue-simple-spinner';
export default {
  name: 'Load',
  components: {
    Spinner
  },
  props: {
    loading: { Type: Boolean, default: false },
    message: { Type: String, default: '' },
    size: { Type: Number, default: 46 },
    lineSize: { Type: Number, default: 7 },
    textColor: { Type: String, default: '#333' },
    fontSize: { Type: Number, default: 18 },
    speed: { Type: Number, default: 1 }
  }
};
</script>

<style scoped></style>
