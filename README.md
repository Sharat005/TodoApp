# vue-project

This simple application lets you track your day to day tasks. It is created using vue.js and with the help of vuex, state(data) is managed better.

It consists of two pages, One on the left lets you add a todo and also view the pending Todo's.
The one on the right lets you view the finished todo's and also shows the number of pending todo's.

Both the pages are completely different components, No data is passed between each other instead store is used save state 
and retrive from it. The first page saves data and second one is updated instantly which accesses directly from store.
Getters and mutations are used to change the state such as todo's pending, count of todo's pending and completed todo's.

Post call is made using AXIOS everytime a user adds a todo.

Plugins Used:
Vuex
Bulma
Axios


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
