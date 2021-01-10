<template>
  <div class="home w">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import Card from '@/components/Card.vue';

export default Vue.extend({
  name: 'Home',
  async created () {
    const { data } = await this.$api.getArticles();
    console.log(data);
  },
  components: {
    Card
  }
});
</script>

<style lang="scss" scoped>
.home {
  margin-top: 60px;
}
</style>

