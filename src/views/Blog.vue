<template>
  <div class="blog w init">
    <div v-if="routePath[2] === 'select'">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue';

export default Vue.extend({
  name: 'Blog',
  data () {
    return {
      routePath: this.$route.path.split('/')
    };
  }
});
</script>

<style lang="scss" scoped></style>