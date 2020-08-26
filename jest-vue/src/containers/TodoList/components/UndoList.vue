<template>
  <div>
    
  </div>
</template>
<script>
export default {
  name: 'UndoList',
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