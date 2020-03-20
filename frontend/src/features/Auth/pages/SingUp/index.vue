<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "SingUp",
  components: {},
  data() {
    return {
      form: { name: "", email: "", password: "", password_confirmation: "" }
    };
  },
  computed: {
    ...mapState("Auth", ["loading"])
  },
  methods: {
    ...mapActions("Auth", ["actionSingUp"]),

    singUp({ name, email, password, password_confirmation }) {
      console.log({ name, email, password, password_confirmation });
      this.actionSingUp({ name, email, password, password_confirmation });
      this.form = {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      };
    }
  }
};
</script>

<template>
  <div class="container grid-xs py-2">
    <div class="panel">
      <div class="panel-header">
        <div class="panel-title">Crie seu cadastro</div>
      </div>
      <div class="panel-nav">
        <!-- navigation components: tabs, breadcrumbs or pagination -->
      </div>
      <div class="panel-body">
        <form @submit.prevent="singUp(form)">
          <div class="form-group">
            <label class="form-label" for="inputName">Nome</label>
            <input
              id="inputName"
              type="text"
              v-model="form.name"
              class="form-input"
              placeholder="Digite seu nome"
            />
          </div>

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

          <div class="form-group">
            <label class="form-label" for="inputPasswordConfirmation">Confirmar Senha</label>
            <input
              id="inputPasswordConfirmation"
              type="password"
              autocomplete="false"
              v-model="form.password_confirmation"
              class="form-input"
              placeholder="confirmar senha"
            />
          </div>
          <br />
          <button
            class="btn btn-primary input-group-btn"
            :class="loading ? 'loading' : ''"
          >Cadastrar</button>
        </form>
      </div>
      <div class="panel-footer">
        <!-- buttons or inputs -->
      </div>
    </div>
  </div>
</template>
