<template>
    <div class="shop-container">
      <van-cell custom-class="top" url="/pages/search/index">
        <van-button 
        type="info" 
        slot="title"
        size="small"
        round
        custom-class="search-btn">搜索</van-button>
    </van-cell>
      <van-card
        v-for="List in shopList"
        :key="index"
        :thumb="List.imageURL"
        :price="List.shopPrice"
        :tag="List.tag"
        :origin-price="List.originalPrice"
        custom-class="shopCard"
      >
        <span slot="title">{{ List.shopName }}</span>
    </van-card>

    </div>
  </template>
  <script>
  export default {
        
    name: '',
    components: {
	},
    props: {},
    data() {
        return {
          shopList:[{
            tag:'合作产品', //商品标签
            imageURL:'/static/images/鱼跃测压仪.jpg',
            shopName:'鱼跃测压仪',
            shopPrice:154,
            originalPrice:199
          },
          {
            tag:'合作产品', //商品标签
            imageURL:'/static/images/海尔医疗手腕式测压仪.jpg',
            shopName:'海尔医疗手腕式测压仪',
            shopPrice:99,
          },
          {
            tag:'友情链接', //商品标签
            imageURL:'/static/images/爱全乐吸入用异丙托溴铵溶液.jpg',
            shopName:'爱全乐吸入用异丙托溴铵溶液',
            shopPrice:39
          },
          {
            tag:'自主研发', //商品标签
            imageURL:'/static/images/可穿戴全面检测手环.jpg',
            shopName:'可穿戴全面检测手环',
            shopPrice:68
          },
          {
            tag:'合作产品', //商品标签
            imageURL:'/static/images/硅基动感动态血糖测试仪.jpg',
            shopName:'硅基动感动态血糖测试仪',
            shopPrice:375,
            originalPrice:455
          },
          
        ]
          
        }},
    computed: {},
    watch: {},
    created () {},
    methods: {}
}
</script>
  
  <style scoped lang="scss">
  /deep/.top{
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
    /deep/.shopCard{
      border-bottom: 0.5px solid #e6e3e3;
    }
</style>