<template>
    <div class="content">
      <h2 class="title is-2"> Status </h2>
        <p>There are {{ countTodos }} tasks Pending </p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'info',
  computed: {
    ...mapGetters([
    'countTodos'
  ])
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
