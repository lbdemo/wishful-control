<template>
  <div class="jiuzhen-container">
    <van-cell-group>
      <van-cell @click="enter" 
      v-for="list in meetList"
      :key="index" 
      use-label-slot>
        <span slot="title">{{list.actor_name}}医生</span>
        <span slot="label">{{ list.lastMeet }}</span>
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
      meetList:[{
        actor_id: 2342,
        actor_name:'张一',
        lastMeet:'请问有什么办法吗'
      },
      {
        actor_id: 2342,
        actor_name:'李四',
        lastMeet:'最近高血压频繁'
      },
      {
        actor_id: 2342,
        actor_name:'王五',
        lastMeet:'谢谢医生'
      },
      {
        actor_id: 2342,
        actor_name:'徐二',
        lastMeet:'记得按时吃药'
      }]
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    enter(){
      //在起始页面跳转到test.vue页面并传递参数
      uni.navigateTo({
          url: '/pages/components/chat/index?id=1&name=uniapp'
      });
    }
  }
}
</script>

<style scoped lang="scss">
</style>