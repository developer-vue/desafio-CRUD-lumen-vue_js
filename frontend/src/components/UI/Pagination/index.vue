<script>
export default {
  name: "Pagination",
  props: {
    pagination: { Type: Object, required: true }
  }
};
</script>

<template>
  <ul class="pagination center">
    <li
      class="page-item"
      :class="(pagination.current_page <= 1) ? 'disabled' : ''"
      :disabled="pagination.current_page <= 1"
    >
      <a href="#" tabindex="-1" @click="$emit('previous', pagination.current_page)">Anterior</a>
    </li>
    <li class="page-item active">
      <a href="#">{{ pagination.current_page }}</a>
    </li>
    <li
      class="page-item"
      :class="(pagination.last_page <= pagination.current_page) ? 'disabled' : ''"
      @click="$emit('next', pagination.current_page, pagination.last_page)"
    >
      <a href="#">Próximo</a>
    </li>
  </ul>
</template>