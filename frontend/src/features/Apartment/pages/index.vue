<script>
import { mapState, mapActions } from "vuex";
import { Load, Error, Table, Pagination } from "@/components/UI";
import { required, between } from "vuelidate/lib/validators";

export default {
  name: "Apartment",
  components: {
    Table,
    Load,
    Error,
    Pagination
  },
  mounted() {
    // this.actionGetApartaments();
    this.handleSearch("", 1);
  },
  validations: {
    form: {
      type: {
        required
      },
      description: {
        required
      },
      rooms: {
        required,
        between: between(1, 3)
      },
      bathrooms: {
        required,
        between: between(1, 5)
      },
      size: {
        required
      },
      location: {
        required
      }
    }
  },
  data() {
    return {
      search: {
        term: "",
        page: 1
      },
      form: {
        id: 0,
        type: "",
        description: "",
        rooms: "",
        bathrooms: "",
        size: "",
        location: ""
      },
      validateMessages: {
        type: { required: "Obrigatório" },
        description: { required: "Obrigatório" },
        rooms: {
          required: "Obrigatório",
          between: "Valor deve  ser entre 1 e 3"
        },
        bathrooms: {
          required: "Obrigatório",
          between: "Valor deve  ser entre 1 e 5"
        },
        size: { required: "Obrigatório" },
        location: { required: "Obrigatório" }
      },
      columns: [
        { key: "id", label: "ID" },
        { key: "type", label: "Tipo" },
        { key: "description", label: "Descrição" },
        { key: "rooms", label: "Quarto(s)" },
        { key: "bathrooms", label: "Banheiro(s)" },
        { key: "location", label: "Localização" }
      ]
    };
  },
  computed: {
    ...mapState("Apartment", [
      "apartments",
      "pagination",
      "loading",
      "loading_save",
      "loading_search"
    ])
    // ...mapGetters("Apartment", ["leanCategories"])
  },
  methods: {
    ...mapActions("Apartment", [
      "actionGetApartaments",
      "actionSave",
      "actionUpdate",
      "actionRemove",
      "actionSearch"
    ]),
    async handleSubmit(formValues) {
      this.$v.form.$touch();

      if (!this.$v.form.$invalid) {
        if (formValues.id > 0) {
          await this.actionUpdate(formValues);
        } else {
          await this.actionSave(formValues);
          this.reset();
        }
      }
    },
    handleSearch(term, page) {
      this.actionSearch({
        term,
        page
      });
    },
    handleEdit(item) {
      this.form = { ...item };
    },
    handleRemove(item) {
      // console.log(item);
      const result = confirm("Você confirma a exclusão ?");

      if (result) {
        this.actionRemove(item);
      }
    },

    previous(page) {
      if (this.search.page <= 1) return;
      this.search.page = page - 1;
      this.handleSearch(this.search.term, this.search.page);
    },
    next(page, last_page) {
      if (last_page <= page) return;
      this.search.page = page + 1;
      this.handleSearch(this.search.term, this.search.page);
    },
    reset() {
      this.form.id = 0;
      this.form.type = "";
      this.form.description = "";
      this.form.rooms = "";
      this.form.bathrooms = "";
      this.form.size = "";
      this.form.location = "";
      this.$v.form.$reset();
    },
    isError(field, key) {
      // console.log(this.$v.form[field][key], key);
      return !this.$v.form[field][key] && this.$v.form[field].$dirty;
    }
  }
};
</script>

<template>
  <div class="container">
    <div class="columns">
      <div class="column col-4">
        <div class="panel">
          <div class="panel-header">
            <div class="panel-title">Gerenciar Apartamentos</div>
          </div>
          <div class="panel-nav">
            <!-- navigation components: tabs, breadcrumbs or pagination -->
          </div>
          <div class="panel-body">
            <form @submit.prevent="handleSubmit(form)">
              <div
                class="form-group"
                :class="{
                  'has-error': $v.form.type.$error
                }"
              >
                <label class="form-label" for="select-tipo">Tipo</label>
                <select v-model.trim="$v.form.type.$model" id="select-tipo" class="form-select">
                  <option value="Aluga-se">Aluga-se</option>
                  <option value="Vende-se">Vende-se</option>
                  <option value="Alugado">Alugado</option>
                  <option value="Vendido">Vendido</option>
                </select>
                <Error
                  v-for="(message, key) in validateMessages.type"
                  :key="key"
                  :show="isError('type', key)"
                  :message="message"
                />
              </div>
              <div
                class="form-group"
                :class="{
                  'has-error': $v.form.description.$error
                }"
              >
                <label class="form-label" for="input-description">Descrição</label>
                <input
                  v-model.trim="$v.form.description.$model"
                  class="form-input"
                  type="text"
                  id="input-description"
                  placeholder="Ex: Apartamento 101"
                />
                <Error
                  v-for="(message, key) in validateMessages.description"
                  :key="key"
                  :show="isError('description', key)"
                  :message="message"
                />
              </div>
              <div
                class="form-group"
                :class="{
                  'has-error': $v.form.rooms.$error
                }"
              >
                <label class="form-label" for="input-rooms">Quarto(s)</label>
                <input
                  v-model.trim="$v.form.rooms.$model"
                  class="form-input"
                  type="number"
                  id="input-rooms"
                />
                <Error
                  v-for="(message, key) in validateMessages.rooms"
                  :key="key"
                  :show="isError('rooms', key)"
                  :message="message"
                />
              </div>
              <div
                class="form-group"
                :class="{
                  'has-error': $v.form.bathrooms.$error
                }"
              >
                <label class="form-label" for="input-bathrooms">Banheiro(s)</label>
                <input
                  v-model.trim="$v.form.bathrooms.$model"
                  class="form-input"
                  type="number"
                  id="input-bathrooms"
                />
                <Error
                  v-for="(message, key) in validateMessages.bathrooms"
                  :key="key"
                  :show="isError('bathrooms', key)"
                  :message="message"
                />
              </div>
              <div
                class="form-group"
                :class="{
                  'has-error': $v.form.size.$error
                }"
              >
                <label class="form-label" for="input-size">Tam. (m2)</label>
                <input
                  v-model.trim="$v.form.size.$model"
                  min="0"
                  class="form-input"
                  type="number"
                  id="input-size"
                />
                <Error
                  v-for="(message, key) in validateMessages.size"
                  :key="key"
                  :show="isError('size', key)"
                  :message="message"
                />
              </div>
              <div
                class="form-group"
                :class="{
                  'has-error': $v.form.location.$error
                }"
              >
                <label class="form-label" for="input-location">Localização</label>
                <input
                  v-model.trim="$v.form.location.$model"
                  class="form-input"
                  type="text"
                  id="input-location"
                  placeholder="Ex: 1º Andar, 2º Andar"
                />
                <Error
                  v-for="(message, key) in validateMessages.location"
                  :key="key"
                  :show="isError('location', key)"
                  :message="message"
                />
              </div>
              <div class="form-group">
                <div class="col-12">
                  <button type="button" class="btn btn-primary float-left" @click="reset">Novo</button>
                  <button
                    class="btn btn-primary float-right"
                    :class="loading_save ? 'loading' : ''"
                  >Salvar</button>
                </div>
              </div>
              <!-- form structure -->
            </form>
          </div>
          <div class="panel-footer">
            <!-- buttons or inputs -->
          </div>
        </div>
      </div>
      <div class="column col-8">
        <form @submit.prevent="handleSearch(search.term, 1)">
          <div class="has-icon-right">
            <input type="text" v-model="search.term" class="form-input" placeholder="Pesquisar" />
            <i class="form-icon" :class="loading_search ? 'loading' : ''"></i>
          </div>
        </form>

        <hr />

        <Load :loading="loading" />
        <Table
          v-if="!loading && apartments.length"
          :columns="columns"
          :rows="apartments"
          @edit="handleEdit"
          @remove="handleRemove"
        />

        <div class="empty" v-if="!apartments.length">
          <div class="empty-icon">
            <i class="icon icon-search"></i>
          </div>
          <p class="empty-title h5">Nehum registro encontrado...</p>
        </div>

        <div v-if="apartments.length">
          <strong>Total: {{ pagination.total}}</strong>
          <br />
          <strong>Página: {{ pagination.current_page}} / {{ pagination.total}} itens por página: {{pagination.per_page }}</strong>

          <br />
          <br />
          <Pagination :pagination="pagination" @previous="previous" @next="next" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
