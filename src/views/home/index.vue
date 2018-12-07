<template>
  <div class="home">
    <router-view class="home-view"/>
    <BottomNav></BottomNav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BottomNav from '@/components/BottomNav.vue';

@Component({
  components: {
    BottomNav,
  },
})
export default class Home extends Vue {

}
</script>
<style lang="less" scoped>
.home {
  height: 100vh;
  .home-view {
    height: calc(100vh - 56px);
  }
}
</style>

