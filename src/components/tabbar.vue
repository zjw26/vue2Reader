<template>
    <section class="tabbar">
        <router-link :to="{ name: 'index' }" class="tab-item" exact>
            <div class="tab-item-icon"  @click="setActive(0)">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shouye"></use>
                </svg>
            </div>
            <p class="tab-item-label">首页</p>
        </router-link>
        <router-link :to="{ name: 'book' }" class="tab-item" exact>
            <div class="tab-item-icon">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-zhuanti"></use>
                </svg>
            </div>
            <p class="tab-item-label">专题</p>
        </router-link>
        <router-link :to="{ name: 'category' }" class="tab-item" exact > 
            <div class="tab-item-icon">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-fenlei"></use>
                </svg>
            </div>
            <p class="tab-item-label">分类</p>
        </router-link>
        <router-link :to="{ name: 'rank' }" class="tab-item" exact>
            <div class="tab-item-icon">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-paixing"></use>
                </svg>
            </div>
            <p class="tab-item-label">排行</p>
        </router-link>
    </section>
</template>

<script>
export default {
    name: 'tabbar',
    data() {
        return {};
    },
    methods:{
    },
    mounted:function(){
    }
    
}
</script>

<style scoped lang="scss">
.router-link-active{
     background:#efe6e0;
}
.active {
        background:#efe6e0;
}

.tabbar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0px;
    z-index: 1;
    display: flex;
    height: 60px;
    background-color: #fff;
    border-top: 1px solid rgba(0, 0, 0, .1);
    box-sizing: border-box;

    .tab-item {
        display: block;
        flex: 1;
        padding: 10px 0;

        &.router-link-exact-active {
        }
    }

    

    .tab-item-icon {
        width: 24px;
        height: 24px;
        margin: 0 auto 4px;

        .icon {
            width: 24px;
            height: 24px;
        }
    }
    .tab-item-label {
        text-align: center;
        font-size: 12px;
    }
}
</style>