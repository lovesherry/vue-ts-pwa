<template>
    <div class="home-nav">
        <mu-appbar style="width: 100%;" color="primary">
            <mu-button icon slot="left">
                <i class="iconfont icon-ai221 more"></i>
            </mu-button>
            收集箱
            <mu-menu slot="right">
                <mu-button flat class="button">
                    <i class="iconfont icon-dashujukeshihuaico- settings"></i>
                </mu-button>
                <mu-list slot="content">
                <mu-list-item button>
                    <mu-list-item-content>
                    <mu-list-item-title>Menu Item 1</mu-list-item-title>
                    </mu-list-item-content>
                </mu-list-item>
                <mu-list-item button>
                    <mu-list-item-content>
                    <mu-list-item-title>Menu Item 2</mu-list-item-title>
                    </mu-list-item-content>
                </mu-list-item>
                </mu-list>
            </mu-menu>
        </mu-appbar>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HomeNav extends Vue {
  @Prop() private msg!: string;
}
</script>
<style lang="less" scoped>
@import '../../../style/mixin.less';
.more {
    font-size: 25px;
    height: 20px;
}
.button-more {

}
.mu-appbar .button {
    line-height: normal !important;
}
.settings {
    font-size: 35px;
}
</style>

