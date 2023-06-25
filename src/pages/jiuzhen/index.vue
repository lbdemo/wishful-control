<template>
  <div class="patientJiuzhen-container">
    <van-grid :gutter="5" reverse="true" custom-class="grid">
      <van-grid-item 
      v-for="(item,index) in disease"
      :key="index"
      :direction="horizontal" 
      custom-class="item"
      content-class="item_content"
      text-class="item_text">
        <div slot="text">{{ item }}</div>
      </van-grid-item>
    </van-grid>
    <!-- 医生发布咨询 -->
    <van-cell size="large" center 
        :border="false" 
        custom-class="thing-item">
            <div solt="title" class="add">
                <span>
                    <van-icon name="plus" size="40px"/>
                    <br>
                    <text style="font-size: 12px; padding-right: 8px;">发布</text>
                </span>
            </div>
        </van-cell>
    <!-- 已发布的咨询列表 -->
    <van-cell-group>
      <van-cell 
      v-for="message in message"
      :key="message.id"
      use-label-slot="true"
      >
        <span slot="title">
          <text >
            {{ message.doctor_name }} 
            <text style="font-size: 12px; padding-left: 5px;">{{ message.doctor_job }}</text>
          </text>
        </span>
        <span slot="label">
          <span>擅长:{{ message.describ }}</span>
        </span>
      </van-cell>
    </van-cell-group>
    
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
      disease:[
        '高血压','冠心病','脑卒中','糖尿病','恶性肿瘤','慢性气管炎','肺气肿'
    ],
      message:[{
        doctor_id:'222',
        doctor_name:'张一',
        doctor_job:'主任医师',
        describ:"高血压,冠心病,脑卒中",
        online:'在线'
      },
      {
        doctor_id:'333',
        doctor_name:'李四',
        doctor_job:'副主任医师',
        describ:"高血压,冠心病,脑卒中",
        online:'在线'
      },
      {
        doctor_id:'4323',
        doctor_name:'王五',
        doctor_job:'副主任医师',
        describ:"高血压,冠心病,脑卒中",
        online:'在线'
      },
      {
        doctor_id:'4234',
        doctor_name:'徐二',
        doctor_job:'主任医师',
        describ:"高血压,冠心病,脑卒中",
        online:'在线'
      },]  
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
/deep/.thing-item{
    border: 1px solid #777; 
    height: 100px;
  }
  .add{
    display: flex;
    justify-content: center;
    align-items: center;
  }
.grid{
  border-bottom: 1px solid #d4d2d2;
}
/deep/.item{
  height: 30px;
  width: 70px;
  padding-bottom: 3px;
}
/deep/.item_content{
padding: 3px!important;
border-radius: 15px;
}
/deep/.item_text{
  padding-top: 0px;
}
</style>