<template>
  <div>
    <h1></h1>
    <input data-test="input" type="text" v-model="inputValue" @keyup.enter="addToItem">
  </div>
</template>
<script>
export default {
  name: 'Header',
  props:{},
  data() {
    return {
      inputValue:''
    }
  },
  methods: {
    addToItem() {
      this.inputValue && this.$emit('add', this.inputValue);
      this.inputValue = '';
    }
  }
}
</script>
<style lang="less" scoped>

</style>