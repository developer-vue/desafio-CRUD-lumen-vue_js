<template>
  <div id="app">
    <Header />
    <div class="container grid-lg">
      <router-view class="py-2" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Header } from "@/components/UI";
export default {
  name: "App",
  components: {
    Header
  },
  created() {
    this.actionInit();
  },
  methods: {
    ...mapActions("Auth", ["actionInit"])
  }
};
</script>

