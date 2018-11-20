import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
	  title: 'TODO App',
	  todos: [
	  'Learn Vuex',
	  'Implement Vuex',
    'Complete a Project'],
	  completed: []
	},
	getters: {
	  countTodos: state => {
	    return state.todos.length 
	}
    },
    mutations: {
      ADD_TODO: (state, todo) => {
      	state.todos.push(todo)
        axios.post("https://demo3267822.mockable.io/addTodo", state.todos)
        .then(function(response){
          console.log(response.config.data)
        })
      },
      REMOVE_TODO: (state, param) => {
      	state.todos.splice(param.todo, 1)
      	state.completed.push(param.done)
      }	
    },
    actions: {
      removeTodo: (context, param) => {
        context.commit('REMOVE_TODO', param)	
      }
    }
})