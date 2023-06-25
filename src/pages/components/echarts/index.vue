<template>
    <div class="my-container">
      <!-- 基本用户信息 -->
      <h5 style="padding: 10px 0 5px 0;">基本信息</h5>
      <van-cell 
      :border="false"  
      custom-class="my-card"
      title-class="text">
        <span slot="icon"><van-icon name="contact" size="45px"/></span>
        <span slot="title" class="text">
        <span slot="right-icon" class="right">
          <van-icon name="arrow" size="15px"/>
        </span>
          <div>{{ user.name }}</div>
          <div>{{ user.sex }}</div>
        </span>
      </van-cell>

      <!-- 检测数据 -->
      设备状态：<span class="status">{{ status}}</span>
      <h5 style="padding: 10px 0 5px 0;">检测数据</h5>
      
      <div class="day">
        <txet style="font-size: 12px;">血糖含量</txet>
        <canvas canvas-id="lineCanvas" disable-scroll="true" class="canvas"></canvas>
        </div>
 


        <!-- 就诊信息 -->

        <h5 style="padding: 10px 0 5px 0;">就诊信息</h5>
        

        <!-- 添加区域 -->
        <van-cell size="large" center 
        :border="false" 
        custom-class="thing-item">
            <div solt="title" class="add">
                <span>
                    <van-icon name="plus" size="40px"/>
                    <br>
                    <text style="font-size: 12px; padding-right: 8px;">添加</text>
                </span>
            </div>
        </van-cell>
    </div>
  </template>
  
 <script>
  export default {
    name: '',
    components: {
    },
    props: {},
    data () {
      return {
        user:{
          name:'柒柒',
          sex:'男',
          type:1,
        },
        status:'在线' 
        
      }
    },
    computed: {},
    watch: {},
    created () {},
    onLoad () {
        var wxCharts = require('../../../utils/wxcharts-min.js');
        new wxCharts({
        canvasId: 'lineCanvas',
        type: 'line',
        categories: ['5月6日', '5月7日', '5月8日', '5月9日', '5月10日', '5月11日','5月12日'],
        series: [{
                name: '血糖',
                data: [6.7, 6.9, 7.6, 7.9, 6.8, 6.7, 6.8],
                format: function (val) {
                return val.toFixed(2);
                }
        }],
        yAxis: {
                title: 'mmol/L',
                format: function (val) {
                return val.toFixed(2);
                },
                min: 0
        },
        width: 320,
        height: 200
        });
    },
    methods: {}
  }
  </script>
  
  <style scoped lang="scss">
  .my-container{
    background-color: #f4f0f0;
    /deep/.my-card{
    border: 1px solid #c2c0c0;
    
    .text{
      font-size: 10px;
      line-height: 22px;
    }
  }
  .right{
    position: absolute;
    right: 20px;
    top: 35%;
    bottom: 65%;
  }
  /deep/.day{
    padding-left: 3px;
    .canvas{
      height: 250px;
      width: 320px;
    }
  }
  .canvas{
      height: 250px;
      width: 320px;
    }
  .status{
    font-size: 15px;
    color:aquamarine;
  }
  }
  
  /deep/.thing-item{
    border: 1px solid #777; 
    height: 100px;
  }
  .add{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>