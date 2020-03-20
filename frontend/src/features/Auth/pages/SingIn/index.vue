<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "SingIn",

  data() {
    return {
      form: { email: "admin@gmail.com", password: "123456" }
    };
  },

  computed: {
    ...mapState("Auth", ["loading"])
  },
  methods: {
    ...mapActions("Auth", ["actionSingIn"]),

    singIn({ email, password }) {
      this.actionSingIn({ email, password, router: this.$router });
      this.form = { email: "", password: "" };
    }
  }
};
</script>

<template>
  <div class="container grid-xs py-2">
    <div class="panel">
      <div class="panel-header">
        <div class="panel-title">Login</div>
      </div>
      <div class="panel-nav">
        <!-- navigation components: tabs, breadcrumbs or pagination -->
      </div>
      <div class="panel-body">
        <form @submit.prevent="singIn(form)">
          <div class="form-group">
            <label class="form-label" for="inputEmail">Email</label>
            <input
              id="inputEmail"
              type="text"
              v-model="form.email"
              class="form-input"
              placeholder="Digite seu email"
            />
          </div>

          <div class="form-group">
            <label class="form-label" for="inputPassword">Senha</label>
            <input
              id="inputPassword"
              type="password"
              autocomplete="false"
              v-model="form.password"
              class="form-input"
              placeholder="Digite sua senha"
            />
          </div>

          <br />
          <button class="btn btn-primary input-group-btn" :class="loading ? 'loading' : ''">Entrar</button>
        </form>
      </div>
      <div class="panel-footer">
        <!-- buttons or inputs -->
      </div>
    </div>
  </div>
</template>
