<template>
  <div id="index" style="height:100%;overflow:hidden">
        <Header @tabswitch="tabSwitch"></Header>
        <div style="height:100%;transition-duration: .5s;" class="double_width">
            <div class="container-wrap" style="float:left">
                <div class="container-scroll">
                    <index-top></index-top>
                    <index-list :listData="malehot" :ind=5 :title="'男生热门'">
                    </index-list>
                    <index-list :listData="femalehot" :ind=5 :title="'女生最爱'">
                    </index-list>
                    <index-list :listData="three" :ind=5 :title="'仙侠'">
                    </index-list>
                    <index-list :listData="four" :ind=5 :title="'青春校园'">
                    </index-list>
                </div>
                <list-loading v-show="isLoading"></list-loading>
            </div>
            <div style="float:left" class="container-wrap">
                <div class="container-scroll">
                    <index-shelf></index-shelf>
                </div>
            </div>
            
        </div>
        
    </div>
</template>

<script>
import axios from "axios";
import Header from "../components/header";
import indexTop from "../components/index-top";
import indexShelf from "../components/index-shelf";
import indexList from "../components/index-list";
import listLoading from '../components/list-loading';
import api from '../fetch/api.js';
import tabbar from '../components/tabbar'

export default {
  name: 'Index',
  data(){
      return{
            screen_width:0,
            double_screen_width:0,
            position:0,
            malehot:[],
            femalehot:[],
            three:[],
            four:[],
            isLoading:true,
            // recommend:d.index.items[2].data.data,
            // female:d.female.data,
            // male:d.male.data,
            // free:d.index.items[5].data.data,
            topic:[
                {ad_pic_url:"http://t1.market.xiaomi.com/thumbnail/jpeg/l640/Duokan/0ef284d9bc9a50a29471b5f91f120c69989402c63?",
                reference_id:"11916"},
                {ad_pic_url:"http://t1.market.xiaomi.com/thumbnail/jpeg/l640/Duokan/08276484becfb70a441bbb8c1c25041ff70421475?"
                ,
                reference_id:"11914"},
            ],
            
            minIndexF:0,
            maxIndexF:4,
            minIndexM:0,
            maxIndexM:4
            }
            
    },
    components:{
        Header,
        indexTop,
        indexShelf,
        tabbar,
        indexList,
        listLoading
    },
    computed: {
        cover(cover) {
            return "http://statics.zhuishushenqi.com" + cover;
        },
        isShowPageLoading(){
            if(this.hot){
                return false;
            }else{
                return true;
            }
        }
    },
    mounted:function(){
        this.initWidth();
        this.getList();
    },
    methods:{
        initWidth:function(){
            var windowWidth = $(window).width()
            this.screen_width = windowWidth;
            this.double_screen_width = 2*windowWidth;
            if(windowWidth<320){
                windowWidth = 320;
            }
            $('#index').css('width',this.screen_width);
            $('.double_width').css('width',this.double_screen_width);
            $('.double_width').css('transform',`translate3d(${this.position}px,0,0)`);
            $('.container-wrap').css('width',this.screen_width);
        },
        tabSwitch:function(pos){
            if(pos===1){
                this.position=0;
                $('.double_width').css('transform',`translate3d(${this.position}px,0,0)`);
            }else if(pos===2){
                var windowWidth = $(window).width();
                this.position = (-windowWidth);
                $('.double_width').css('transform',`translate3d(${this.position}px,0,0)`);
            }
            console.log(pos)
        },
        toBook:function(id){
            location.href="/book?id="+id;
        },
        
        changeMale:function(){
            this.minIndexM=Math.round(Math.random()*11 + 0);
            this.maxIndexM=this.minIndexM+4;
        },
        changeFemale:function(){
            this.minIndexF=Math.round(Math.random()*11 + 0);
            this.maxIndexF=this.minIndexF+4;
        },
        
        toBanner:function(id){
            location.href="/banner?id="+id;
        },
        getList(){
            var that = this;
            api.getCatBooks('male','hot','玄幻').then(data=>{
                that.malehot = data;
                that.isLoading = false;
            })
            api.getCatBooks('female','hot','古代言情').then(data=>{
                that.femalehot = data;
                that.isLoading = false;
            })
            api.getCatBooks('male','hot','仙侠').then(data=>{
                that.three = data;
                that.isLoading = false;
            })
            api.getCatBooks('female','hot','青春校园').then(data=>{
                that.four = data;
                that.isLoading = false;
            })
        }
    }
}
</script>

<style>
    .container-wrap{
            height:100%;
            overflow: hidden;
            position: relative;
        }

    .container-scroll{
        position: absolute;
        top:0px;
        bottom:0px;
        left:0px;
        right:0px;
        overflow-y: scroll;
        padding-bottom: 105px;
    }
</style>
