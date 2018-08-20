<template>
    <section class="page-loading">
        <img class="loading" src="/static/img/page-animation.gif" alt="翻页加载动画">
</section>
</template>

<script>
export default {
    name: 'listLoading',
    data() {
        return {};
    },
    mounted:function(){
        $('.page-loading').css('width',$(window).width());
    }
}
</script>

<style>
.page-loading {
    position: fixed;
    top: 0px;
    left: 0;
    right: 0;
    bottom: 60px;
    z-index: 99999;
    background-color: #fff;
}
img.loading {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-100%);
    width: 20%;
}
</style>
