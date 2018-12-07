<template>
    <div class="taskItem">
        <div class="level"></div>
        <div class="content">
            <mu-checkbox v-model="msg" value="eat" label="Eat"></mu-checkbox>
            <h2>rqrdadasaddas</h2>
            <p>54354354</p>
        </div>
        <div class="edit"></div>
        <div class="del"></div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BottomNav extends Vue {
  @Prop() private msg!: string;
  
}
</script>
<style lang="less" scoped>
.taskItem {
    background: #fff;
}
</style>
