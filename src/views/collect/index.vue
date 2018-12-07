<template>
  <div class="collect">
    <HomeNav />
    <TaskItem />
    <div>79890</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeNav from './components/HomeNav.vue';
import TaskItem from '@/components/TaskItem.vue';
@Component({
  components: {
    HomeNav,
    TaskItem,
  },
})
export default class Home extends Vue {

}
</script>