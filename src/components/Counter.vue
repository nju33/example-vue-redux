<template>
  <button @click="increment">{{counter}}</button>
</template>

<script>
import withState from '../with-state';
import store from '../store';

export default {
  mixins: [withState(state => ({counter: state.counter}))],
  name: 'Counter',
  methods: {
    increment() {
      store.dispatch({type: 'INCREMENT'});
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
