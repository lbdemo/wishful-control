<template>
    <div class="article-item">
        <van-cell is-link use-label-slot v-for="articleList in articleList" :key="index">
            <view slot="icon"><img style="height: 70px; width: 50px;" :src="articleList.imageUrl" alt=""></view>
            <view slot="label">
                <div>{{ articleList.public_title }}</div>
                <div>{{ articleList.public_title }}</div>
            </view>
        </van-cell>
    </div>
</template>
<script>
    export default {
        name:'ArticleItem',
        props :{
            article: {
                type: Object,
                required: true
            }
        },
        data(){
            return{
                articleList:[{
                    public_name:'人民医院',
                    public_title:'【慢病科普库】高血压科普...',
                    imageUrl:'/static/images/图片1.jpg'
                },
                {
                    public_name:'人民第二医院',
                    public_title:'四、高血压与心血管发病风..',
                    imageUrl:'/static/images/图片w.jpg'
                },
                {
                    public_name:'人民医院',
                    public_title:'七、生活中关于高血压的谣...',
                    imageUrl:'/static/images/图片3.jpg'
                },
                {
                    public_name:'人民医院',
                    public_title:'注意:老年人、糖尿病患者及...',
                    imageUrl:'/static/images/图片4.jpg'
                }
                
            ]
            }
        },
        methods :{

        }
    }
</script>
<style lang="scss">

</style>