<template>
    <div class="search-container">
      <!--  搜索栏 -->
      <!-- 在 van-search 外层增加 form 标签，且 action 不为空，
        即可在 iOS 输入法中显示搜索按钮。 -->
      <form action="/" class="search-form">
        <van-search
          v-model="searchText"
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch"
          @cancel="onCancel"
          background="#3296fa"
          @focus="isResultShow = false"
        />
      </form>
      <!-- 结果记录 -->
      <SearchResult 
      v-if="isResultShow"
      :searchText="searchText"></SearchResult>
      <!-- 联想建议 -->
      <SearchSuggestion 
      v-else-if="searchText"
      :searchText="searchText"
      @search = "onSearch"
      ></SearchSuggestion >
      <!-- 搜索历史记录 -->
      

      
    </div>
  </template>
  
  <script>
  import SearchSuggestion from './components/search-suggestion.vue'
  import SearchResult from './components/search-result.vue'
  // import { setItem,getItem } from '@/utils/storage'

  export default {
    name: 'SearchIndex',
    components: {
      SearchSuggestion,
      SearchResult,
    },
    props: {},
    data () {
      return {
        searchText: '',
        isResultShow: false,
        searchHistorys: []
      }
    },
    computed: {},
    watch: {
    },
    created () {},
    mounted () {},
    methods: {
      onSearch(val){
        this.searchText = val
        
        // 存储搜索历史记录
        const index = this.searchHistorys.indexOf(val)
        if(index !== -1){
          this.searchHistorys.splice(index,1)
        }
        this.searchHistorys.unshift(val)


        this.isResultShow = true
      },
    onCancel(){
      wx.navigateBack({
        delta: 1,  // 返回上一级页面。
        success: function() {
            console.log('成功！')
        }

      })
    },
  }
}
  </script>
  
  <style scoped lang="scss">
.search-container{
  padding-top: 54px;
.van-search__action{
  color: #fff;
}
.search-form{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
}
}
</style>