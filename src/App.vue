<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "./style/iconfont.css";
	@import "wxcomponents/@vant/weapp/common/index.wxss";
	page {
	background-color: #f4f0f0;
}
	
</style>
