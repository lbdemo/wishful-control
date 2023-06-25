<template>
  <div class="kepu-container">
    <!-- 头部搜索栏 -->
    <van-cell custom-class="top" url="/pages/search/index">
        <van-button 
        type="info" 
        slot="title"
        size="small"
        round
        custom-class="search-btn">搜索</van-button>
    </van-cell>
    <!-- 频道tab栏 -->
    <van-tabs :active="active" custom-class="tabs-list" :ellipsis="false">
        <van-tab 
        v-for="channel in channels"
        :key="channel.id" 
        :title="channel.name">
        <ArticleList :channel="channel"></ArticleList>
        </van-tab>
        <div slot="nav-right" class="placeholder"></div>
        <div slot="nav-right" class="gengduo">
            <van-icon 
            @click="showPopup"
            name="ellipsis" 
            size="20px"/>
        </div>
    </van-tabs>

    <!-- 频道弹出层 -->
    <van-popup
      :show='isChannelEditShow'
      closeable
      position="bottom"
      custom-style="height: 100%"
      @close="onClose">
      <ChannelEdit
      :MyChannels="channels"
      ></ChannelEdit>
    </van-popup>


  </div>
</template>
<script>
// import {getUserChannels} from '@/api/user'
import ArticleList from './components/article-list'
import ChannelEdit from './components/channel-edit.vue'
// import { mapState } from 'vuex'
// import { getItem } from '@/utils/storage'

  export default {
      name: "KepuIndex",
      components:{
          ArticleList,
          ChannelEdit
      },
      computed:{
          // ...mapState(['user']),
      },
      data(){
          return{
              active: 0,
              channels:[{
                name: '高血压',
                id:1,
              },
              {
                name: '冠心病',
                id:2,
              },
              {
                name: '脑卒中',
                id:3,
              },
              {
                name: '糖尿病',
                id:14,
              },
              {
                name: '慢性气管炎',
                id:15,
              },
              {
                name: '肺气肿',
                id:16,
              }],
              isChannelEditShow:false
          }
      },
      created(){
          // this.loadChannels();
      },
      methods:{
          
        showPopup() {
           this.isChannelEditShow = true
              console.log(this.isChannelEditShow)
              },
        onClose(){
          this.isChannelEditShow = false
        },
        // onUpdateActive(index,isChannelEditShow){
        //     this.active = index
        //     this.isChannelEditShow = isChannelEditShow
        // }
      }
  }
</script>

<style lang="scss">

.kepu-container {
    .top{
        padding: 0;
        display: flex;
        text-align: center;
        -ms-flex-item-align: center;
        background-color: #5babfb;
        .search-btn{
            height: 27px;
            width: 100px;
        }
    }
    .tabs-list{
        height: 20px;
    }
    .placeholder{
      width: 30px;
      height: 45px;
      flex-shrink: 0;
    }
    .gengduo{
        position: fixed;
            right: 0;
            width: 30px;
            height: 45px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #fff;
            opacity: 0.902;
    }
}
</style>