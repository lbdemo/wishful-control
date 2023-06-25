<template>
    <scroll-view scroll-y class="chat-content">
     <!-- recordContent 聊天记录数组-->
     <div v-for="(itemc,index) in recordContent" :key="index">
          <!-- 对方 -->
          <div class="word"  v-if="!itemc.mineMsg">
               <img :src="itemc.headUrl">
               <div class="info">
                    <p class="time">{{itemc.nickName}}  {{itemc.timestamp}}</p>
                    <div class="info-content">{{itemc.contactText}}</div>
               </div>
          </div>
          <!-- 我的 -->
          <div class="word-my"  v-else>
               <div class="info">
                    <p class="time">{{itemc.nickName}}  {{itemc.timestamp}}</p>
                    <div class="info-content">{{itemc.contactText}}</div>
               </div>
               <img :src="itemc.headUrl">
           </div>
      </div>
      <div class="send">
        <input class="text" v-model="contactText">
        <span class="btn" @click="sentText">发送</span>
      </div>
    </scroll-view>
  </template>
  <script>
  export default {
    name: '',
    components: {},
    onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
        console.log(option.id); //打印出上个页面传递的参数。
        console.log(222222222); //打印出上个页面传递的参数。
    },
    data () {
      return {
        contactText:'',
        recordContent:[{
            headUrl:'../../../static/我.png',
            mineMsg:1,
            nickName:'我',
            timestamp:111,
            contactText:'医生，最近我糖尿病又加重了',
        },
        {
            headUrl:'/static/医生.png',
            mineMsg:0,
            nickName:'徐一医生',
            timestamp:111,
            contactText:'如果最近血糖一直居高不下的话，来医院给你做个检查吧',
        },
        {
            headUrl:'/static/我.png',
            mineMsg:1,
            nickName:'我',
            timestamp:111,
            contactText:'好的',
        },
        
        ]
      }
    },
    computed: {},
    watch: {
    },
    created () {},
    mounted () {},
    methods: {
        sentText(){
            this.recordContent.push(
                {
                    headUrl:'https://img.yzcdn.cn/vant/cat.jpeg',
                    mineMsg: 1,
                    nickName: '我',
                    timestamp: new Date(),
                    contactText: this.contactText
                }) 
            this.scroll();
        },
        scroll(){
        // 获取页面滚动高度
            wx.createSelectorQuery().selectViewport().scrollOffset(function(res) {
            // 获取聊天窗口高度
            wx.createSelectorQuery().select('.chat-content').boundingClientRect(function(rect) {
                // 计算聊天窗口底部位置
                const bottom = rect.bottom + res.scrollTop;

                // 滚动页面到底部
                wx.pageScrollTo({ scrollTop: bottom });
            }).exec();
            }).exec();
        },

    }
  }
  </script>
  <style lang="scss">
  .chat-content{
    margin-bottom: 50px;
    padding-bottom: 50px;
  .word{
     display: flex;
     margin-bottom: 20px;
     img{
       width: 40px;
       height: 40px;
       border-radius: 50%;
     }
     .info{
       margin-left: 10px;
       .time{
         font-size: 12px;
         color: rgba(51,51,51,0.8);
         margin: 0;
         height: 20px;
         line-height: 20px;
         margin-top: -5px;
       }
       .info-content{
          padding: 10px;
          font-size: 14px;
          background: #fff;
          position: relative;
          margin-top: 8px;
        }
        //小三角形
        .info-content::before{
            position: absolute;
            left: -8px;
            top: 8px;
            content: '';
            border-right: 10px solid #FFF;
            border-top: 8px solid transparent;
            border-bottom: 8px solid transparent;
        }
     }
  }
 
.word-my{
    display: flex;
    justify-content:flex-end;
    margin-bottom: 20px;
    img{
       width: 40px;
       height: 40px;
       border-radius: 50%;
     }
     .info{
       width: 90%;
       margin-left: 10px;
       text-align: right;
       .time{
         font-size: 12px;
         color: rgba(51,51,51,0.8);
         margin: 0;
         height: 20px;
         line-height: 20px;
         margin-top: -5px;
         margin-right: 10px;
       }
       .info-content{
          max-width: 70%;
          padding: 10px;
          font-size: 14px;
          float: right;
          margin-right: 10px;
          position: relative;
          margin-top: 8px;
          background: #A3C3F6;
          text-align: left;
        }
        //小三角形
        .info-content::after{
            position: absolute;
            right: -8px;
            top: 8px;
            content: '';
            border-left: 10px solid #A3C3F6;
            border-top: 8px solid transparent;
            border-bottom: 8px solid transparent;
        }
     }
  }
  .send{
    width: 100%;
    height: 50px;
    background-color: beige;
    position: fixed;
    bottom: 0;
    display: flex;
    .text{
        height: 40px;
        width: 70%;
        padding-left: 3px;
        margin-top: 5px;
        margin-bottom: 5px;
        margin-right: 5px;
        margin-left: 5px;
        border-radius: 10px;
        background-color: #FFF;
    }
    .btn{
        text-align: center;
        line-height: 30px;
        height: 30px;
        flex: 1;
        margin-top: 10px;
        margin-bottom: 10px;
        border-radius: 20px;
        border: 1px solid ;
    }
  }
}
</style>