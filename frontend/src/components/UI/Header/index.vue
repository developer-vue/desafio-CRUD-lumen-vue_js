<template>
  <div class="container grid-lg">
    <header class="navbar">
      <section class="navbar-section">
        <router-link v-if="!signed" to="/singin" class="btn btn-link">Login</router-link>
        <router-link v-if="!signed" to="/singup" class="btn btn-link">Criar Conta</router-link>
        <router-link v-if="signed" to="/dashboard" class="btn btn-link">Dashboard</router-link>
        <router-link v-if="signed" to="/apartment" class="btn btn-link">Apartamentos</router-link>
      </section>
      <section class="navbar-center">
        <img class="img-responsive img-logo" src="@/assets/logo.png" alt="Logo da emprsa" />
      </section>
      <section class="navbar-section">
        <a
          class="btn btn-link"
          title="https://github.com/davidfaria"
          target="_blank"
          href="https://github.com/davidfaria"
        >Github</a>
        <a
          class="btn btn-link"
          title="www.linkedin.com/in/davidfaria89"
          target="_blank"
          href="https://github.com/davidfaria"
        >Linkedin</a>
        <figure
          v-if="signed"
          :title="user.name"
          class="avatar avatar-lg"
          style="margin-right: 4px;"
        >
          <img :src="require('@/assets/avatar.png')" alt="..." />
        </figure>

        <div v-if="signed" class="input-group input-inline">
          <button @click="handleLogout" class="btn btn-error input-group-btn">Sair</button>
        </div>
      </section>
    </header>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Header",

  computed: {
    ...mapState("Auth", ["signed", "user"])
  },
  methods: {
    ...mapActions("Auth", ["actionLogout"]),
    handleLogout() {
      this.actionLogout({ router: this.$router });
    }
  }
};
</script>

<style scoped>
.img-logo {
  max-width: 100px;
}
</style>
