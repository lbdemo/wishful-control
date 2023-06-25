<template>
  <div class="DoctorJiuzhen-container">
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
      
    }
  },
  computed: {},
  watch: {},
  methods: {
    pushText(){
      
    }
  }
}
</script>

<style scoped lang="scss">
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