<template>
  <div>
    <button class="btn-label" @click="labelHandler">vue
      <i class="btn-cancel">x</i>
    </button>
  </div>
</template>

<script lang="js">
import Vue from 'vue';

export default Vue.extend({
  name: 'Label',
  methods: {
    labelHandler (e) {
      e.preventDefault();
    }
  }
});
</script>

<style lang="scss" scoped>
.btn-label {
  outline: none;
  height: 25px;
  padding: 2px 15px;
  font-size: 14px;
  border: 1px solid #999;
  border-radius: 15px;

  .btn-cancel {
    display: inline-block;
    width: 5px;
    height: 5px;
    border: 1px solid black;
    border-radius: 50%;
  }
}
</style>