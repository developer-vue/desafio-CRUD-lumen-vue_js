<template>
  <div>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th v-for="col in columns" :key="col.key">{{ col.label }}</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.id">
          <td v-for="col in columns" :key="col.key">{{row[col.key]}}</td>
          <td class="btn-actions">
            <button
              @click="$emit('edit', row)"
              title="editar"
              class="btn btn-action s-circle btn-edit"
            >
              <i class="icon icon-edit"></i>
            </button>

            <button
              @click="$emit('remove', row)"
              title="excluir"
              class="btn btn-action s-circle btn-delete"
            >
              <i class="icon icon-delete"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    columns: { Type: Object, required: true },
    rows: { Type: Object, required: true }
  }
};
</script>

<style scoped>
table tr td {
  font-size: 13px;
}

.btn-delete:hover {
  background: #d95000;
  color: #fff;
}

.btn-edit:hover {
  background: #4b48d6;
  color: #fff;
}

.btn-actions {
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-actions button {
  margin: 4px;
}
</style>