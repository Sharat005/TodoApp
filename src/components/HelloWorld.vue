<template>
  <div class="hello">
    <div class="left">
      <h1 class="title is-1"> {{ title }} </h1>
      <div class="content">
        <form @submit.prevent="addTodo">
          <input class="input" type="text" placeholder="Add a TODO" v-model="newTodo" />
        </form>
      </div>

      <div v-if="!todos.length"> Nothing to do </div>
      <div class="content">
        <ul>
          <li v-for="(todo, index) in todos" v-bind:key="index">
            {{ todo }}
          <button class ="rm" v-on:click="removeTodos(index, todo)"> Done </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="right">
      <div class="content">
        <info></info>
      </div>
      <div class="content">
        <h3 class="title is-3"> Completed Tasks </h3>
        <div v-if="!completed.length"> Nothing is Completed </div>
        <ul>
          <li v-for="done in completed">
            {{ done }}
          </li>
        </ul>
      </div>
    </div>    
  </div>
</template>

<script>
import info from '@/components/info.vue'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  data() {
    return {
      newTodo: '',
      param: {}
    }
  },
  components: {
    info
  },
  computed: {
    ...mapState([
    'title',
    'todos',
    'completed'
  ])
  },
  methods: {
    ...mapMutations([
      'ADD_TODO'
    ]),
    ...mapActions([
       'removeTodo'
    ]),
    addTodo: function() {
      this.ADD_TODO(this.newTodo)
      this.newTodo = ''
    },
    removeTodos: function(todo, done) {
     this.param.todo = todo
     this.param.done = done
     this.removeTodo(this.param)
    } 
  }
}
</script>

<style>
  html, #app, .home {
    height: 100%;
  }
  body {
    background-color: #F4F4F4;
    margin: 0;
    height: 100%;
  }

  .hello {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 100%;
    grid-template-areas:
      "left right";
    height: 100%;
  }

  .left, .right {
    padding: 30px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
  ul li {
    padding: 20px;
    background: white;
    margin-bottom: 8px;
  }

  .right {
    grid-area: right;
    background-color: #E9E9E9;
  }

  .rm {
    float: right;
    text-transform: uppercase;
    font-size: .8em;
    background: #0000FF;
    border: none;
    padding: 5px;
    color:  #ffffff;
    cursor:pointer;
  }

</style>
