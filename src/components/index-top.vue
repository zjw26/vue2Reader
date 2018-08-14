<template>
    <section class="top-home">
        <div class="swiper-container" style="border-top:10px solid #f5f5f5">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" onclick="location.href='/banner?id=11890'"><img class="cover" src="http://t1.market.xiaomi.com/thumbnail/jpeg/l640/Duokan/0b51c34bc206c478b37635d1fa57e4bb869f6db78?" alt="First slide"></div>
                    <div class="swiper-slide" onclick="location.href='/banner?id=11913'"><img class="cover" src="http://t1.market.xiaomi.com/thumbnail/jpeg/l640/Duokan/0888848446f54ab8589fa332ef1fd3e8129408c16?" alt="First slide"></div>
                    <div class="swiper-slide" onclick="location.href='/banner?id=11917'"><img class="cover" src="http://t1.market.xiaomi.com/thumbnail/jpeg/l640/Duokan/03242057bdc8b4c173238d57a13ce80659c746eaf?" alt="First slide"></div>
                    <div class="swiper-slide" onclick="location.href='/banner?id=11903'"><img class="cover" src="http://t1.market.xiaomi.com/thumbnail/jpeg/l640/Duokan/0507147b10d78221189a3e931cceebdf3db42e93f?" alt="First slide"></div>
                </div>

                <!-- 如果需要导航按钮 -->
                <div class="swiper-button-prev swiper-button-white"></div>
                <div class="swiper-button-next swiper-button-white"></div>
        </div>
        <!-- <ul class="top-home__btn">
                <li>
                    <a href="/category">
                        <img class="top-home__icon" src="/static/img/category.png">
                        <p class="top-home__des">分类</p>
                    </a>
                </li>
                <li>
                    <a href="/rank">
                        <img class="top-home__icon" src="/static/img/rank.png">
                        <p class="top-home__des">排行</p>
                    </a>
                </li>
                <li>
                    <a href="/subject">
                        <img class="top-home__icon" src="/static/img/subject.png">
                        <p class="top-home__des">专题</p>
                    </a>
                </li>
                <li>
                    <a href="/male">
                        <img class="top-home__icon" src="/static/img/male.png">
                        <p class="top-home__des">男生</p>
                    </a>
                </li>
                <li>
                    <a href="/female">
                        <img class="top-home__icon" src="/static/img/female.png">
                        <p class="top-home__des">女生</p>
                    </a>
                </li>
            </ul> -->
    </section>
</template>

<script>

export default {
  name: 'Top',
  mounted:function(){
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        // 如果需要前进后退按钮
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        autoplay:{
            delay:3000
        },
        effect : 'flip',
        setWrapperSize :true,
        observer: true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents: true//修改swiper的父元素时，自动初始化swiper
    })   
  }
}
</script>

<style>
    .top-home{
        background:#fff;
        border-bottom: 2px solid #f5f5f5;
    }
    .top-home__search{
        margin:10px 13px;
        padding:1px 0 0 30px;
        font:11px/33px a;
        color:rgba(0,0,0,0.4);
        background: url(http://image.read.duokan.com/mfsv2/download/fdsc3/p01dSYLeWtSR/tY73MgTfVw7UAS.png) 8px center no-repeat;
        background-size:14px;
        border:1px solid #f5f5f5;
        border-radius:2px;
    }

    .cover{
        width:100%;
    }

    .top-home__btn {
        margin: 0 0 4px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        flex-wrap: nowrap;
        /* background: linear-gradient(#ffffff, #820303); */
        padding-top: 12px;
        padding-bottom: 2px;
    }

    .top-home__btn li{
        flex-grow:0;
        font-size:12px;
    }

    .top-home__btn li p{
        color:#070707;
    }

    .top-home__icon {
        display: block;
        height: 32px;
        width: 32px;
        margin: 0px auto;
    }

    .swiper-container-flip {
        overflow: hidden;
    }
</style>
