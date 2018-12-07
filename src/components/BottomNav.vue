<template>
    <div class="bottom-nav">
        <mu-button active-class="active" to="/home/collect">
            <i class="iconfont icon-dingdanyiwancheng"></i>
        </mu-button>
        <mu-button active-class="active" to="/home/survey">
            <i class="iconfont icon-calendar_icon"></i>
        </mu-button>
        <mu-button active-class="active" to="/home/settings">
            <i class="iconfont icon-shezhi21"></i>
        </mu-button>
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
.bottom-nav {
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-content: flex-end;
    .mu-button {
        width: 33.3%;
        height: 100%;
        border: none;
        box-shadow: none;
        border-radius: 0;
        i {
            font-size: 20px;
        }
        &.active {
            i{
                color: #2196F3;
            }
        }
    }
}
</style>
