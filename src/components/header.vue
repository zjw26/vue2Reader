<template>
<div class="header-tab" id="app_header">
    <div class="Swipe-tab Swipe-tab_2 f-cb">
        <a href="javascript:" v-on:click="tabSwitch(1)" :class="tab_1_class"></a>
        <a href="javascript:" v-on:click="tabSwitch(2)" :class="tab_2_class"></a>
        <i style="transition-duration:.5s;"></i>
    </div>
    <em class="header-user"></em>
    <em class="header-checkin" ></em>
</div>
</template>

<script>
export default {
  name: 'app-header',
  props: {
  },
  data(){
      return {
        header_position:0,
        tab_1_class:'Swipe-tab__on',
        tab_2_class:'',
        index_header_tab_width:''
      }
  },
  mounted:function(){
      this.initStyle();
  },
  methods:{
      initStyle(){
          var offset = $($('.Swipe-tab').find('a')[0]).offset();
          this.index_header_tab_width = offset.width;
          $('.header-tab i').css('width',this.index_header_tab_width);
          $('.header-tab i').css('transform',`translate3d(${this.header_position}px,0,0)`);
      },
      tabSwitch:function(pos){
        if(pos===1){
            this.header_position=0;
            this.tab_1_class='Swipe-tab__on';
            this.tab_2_class="";
            $('.header-tab i').css('transform',`translate3d(${this.header_position}px,0,0)`);
            this.$emit('tabswitch',1);
        }else if(pos===2){
            this.header_position = this.index_header_tab_width;
            this.tab_2_class='Swipe-tab__on';
            this.tab_1_class="";
            $('.header-tab i').css('transform',`translate3d(${this.header_position}px,0,0)`);
            this.$emit('tabswitch',2);
        }
      },
  }
}
</script>

<style>
    .header-tab a:before {
        content: '\4e66\67b6';
        display: block;
        margin: 0 auto;
        width: 2em;
    }
    .header-tab a:before {
        content: '\4e66\67b6';
        display: block;
        margin: 0 auto;
        width: 2em;
    }
    .header-tab a:first-child:before {
        content: '\4e66\57ce';
    }
    .header-tab{
        padding:0px 90px;
        text-align: center;
        line-height: 44px;
        background: #850f0f;
        border:1px solid #850f0f;
        position:relative;
    }

    .header-tab i {
        bottom: 6px;
    }

    .header-tab i::before{
        content:'';
        display: block;
        height:2px;
        width:40px;
        margin:0 auto;
        background: #ff6600;
    }

    .header-user {
        position: absolute;
        right: 5px;
        top: 2px;
        width: 28px;
        height: 40px;
        background: url(http://image.read.duokan.com/mfsv2/download/fdsc3/p01dSYLeWtSR/tY73MgTfVw7UAS.png) no-repeat center;
        background-size: 16px;
    }

    .header-about {
        position: absolute;
        right: 0px;
        top: 2px;
        width: 30px;
        height: 40px;
        background: url(/static/img/more_if.png) no-repeat center;
        background-size: 16px;
    }

    .header-checkin{
        position:absolute;
        left:0px;
        top:0px;
        width:44px;
        height:44px;
        background: url("/static/img/book2.png") no-repeat center;
        background-size: 22px;
    }

    .Swipe-tab {
        position: relative;
        overflow: hidden;
        z-index:1;
    }

    .Swipe-tab>i{
        position: absolute;
        left:0;
        transition:transform ease-out;
    }

    .Swipe-tab>a{
        float:left;
        color:#e7e3de;
    }

    .Swipe-tab_2>a{
        width:50%;
        text-align: center;
        font-size: 16px;
    }

    .f-cb::after{
        clear:both;
        content:'';
        overflow: hidden;
        visibility: hidden;
        height:0;
        display: block;
    }

    a.Swipe-tab__on{
        color: #ff6600;
    }

    .drop-menu{
        position: relative;
        display: none;
    }
    .drop-menu ul {
        position: absolute;
        top: -7px;
        right: -75px;
        z-index: 100;
        background: #fff7fa;
        padding: 0 10px;
        border-radius: 4px;
        box-shadow: 0 2px 1px 1px #6a4646;
    }

    .drop-menu ul li:first-child{
        border-bottom: #850f0f 1px solid;
    }
</style>
