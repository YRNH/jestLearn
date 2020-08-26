<template>
  <div>
    <h1>TodoList</h1>
    <Header @add="addUndoItem"/>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'TodoList',
  components: {
    Header
  },
  props: {
   
  },
  data() {
    return {
      undoList: []
    }
  },
  methods: {
    addUndoItem(inputValue) {
      this.undoList.push(inputValue);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
