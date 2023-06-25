<template>
	<view class="edit-container">
        <!-- 我的频道 -->
		<van-cell :border="false">
            <div slot="title" class="titile-text">我的频道</div>
            <van-button 
            round 
            size="mini" 
            custom-class="btn"
            @click="changeEdit">
                {{ isEdit ? '完成' : '编辑' }}
            </van-button>
        </van-cell>
        <van-grid custom-class="my-grid" :gutter="20" reverse="true">
            <van-grid-item 
            center
            :icon="isEdit? 'close' : ''"
            v-for="channel in MyChannels"
            :key="channel.id" 
            content-class="grid-item"
            icon-class="ico-close"
            round>
            <span solt="icon">
                <van-icon name="close" />
            </span>
                <span slot="text">{{ channel.name }}</span>
            </van-grid-item>
        </van-grid>


        <van-divider></van-divider>



        <!-- 推荐频道 -->
        <van-cell :border="false">
            <div slot="title" class="titile-text">推荐频道</div>
        </van-cell>
        <van-grid custom-class="my-grid" :gutter="20" reverse="true">
            <van-grid-item 
            :icon="isEdit? 'close' : ''"
            icon-class="ico-close"
            center
            v-for="channel in MyChannels"
            :key="channel.id" 
            content-class="grid-item"
            text-class="item-text"
            round>
                <span slot="text">{{ channel.name }}</span>
            </van-grid-item>
        </van-grid>
	</view>
</template>

<script>

	export default {
		props:{
            MyChannels:{
                type:Array,
                required:true
            }
        },
        data() {
			return {
				isEdit:false
			}
		},
		onLoad() {

		},
		methods: {
            changeEdit(){
                this.isEdit = !this.isEdit;

            }
		}
	}
</script>

<style lang="scss">
.edit-container{
    padding-top: 10px;
    .titile-text{
        font-size: 20px;
    }
    .btn{
        margin-right: 30px;
    }
    .my-grid{
        .grid-item{
            height: 30px;
            margin-top: 3px;
        }
        // .item-text{
        //     line-height: 25px;
        // }
        .ico-close{
            position: absolute;
            right: -5px;
            top: -7px;
            font-size: 15px;
            z-index: 2;
            color: #cacaca;
        }
    }
}
</style>
