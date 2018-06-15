<template>
    <div class="content clearfix">
        <div class="con-left">
            <articleinfo v-for="n in 8" :key="n"></articleinfo>
        </div>
        <div class="con-right">
            <articlesearch></articlesearch>
            <div class="art-tags">
                <h4>Tags</h4>
                <p class="art-tags-item">
                    <!--<articletag  :artTags="artTags" v-for="tag in artTags " :key="artTags.tag_id"></articletag>-->
                    <articletag :tag="tag" v-for="tag in tags " :key="tag.tag_id"></articletag>
                </p>
            </div>
            <div class="art-advs">
                <h4>置顶推荐</h4>
                <p class="art-advs-item">
                    <articleadvance :topArticle="topArticle" v-for="topArticle in topArticles" :key="topArticle.url"></articleadvance>
                </p>
            </div>

        </div>
    </div>
</template>

<script>
    import articleinfo from '@/components/blog-components/article-info'
    import articlesearch from '@/components/blog-components/article-search'
    import articletag from '@/components/blog-components/article-tag'
    import articleadvance from '@/components/blog-components/article-advance'

    export default {
        props: {
            artTags : [
                {name:"标签1",tag_id:1},
                {name:"linux",tag_id:2},
                {name:"hadoop",tag_id:3,},
                {name:"计算机网络知识",tag_id:4},
                {name:"数据结构",tag_id:5},
                {name:"算法",tag_id:5},
            ]
        },
        name: "contentcomponent",
        components:{articleinfo,articlesearch,articletag,articleadvance},
        data () {
            return {
                tags : [
                    {name:"标签1",tag_id:1},
                    {name:"linux",tag_id:2},
                    {name:"hadoop",tag_id:3,css:{fontSize:'24px'}},
                    {name:"计算机网络知识",tag_id:4},
                    {name:"数据结构",tag_id:5},
                    {name:"算法",tag_id:6},
                    {name:"nginx",tag_id:7},
                    {name:"test",tag_id:8},
                    {name:"redis",tag_id:9},
                    {name:"vagrant",tag_id:10,css:{fontSize:'20px'}},
                ],
                topArticles : [
                    {name:'PHP中的Hash算法',url:'/#/home'},
                    {name:'PHP5.4新特性-解引用实例化',url:'http://www.laruence.com/2011/11/11/2296.html'},
                    {name:'ini_set memory_limit在safe_mode下不可用',url:'http://www.laruence.com/2010/04/13/1408.html'},
                    {name:'PHP stream未能及时清理现场导致Core的bug',url:'http://www.laruence.com/2010/09/27/1754.html'},
                    {name:'PHP RFC: 让PHP的foreach支持list',url:'http://www.laruence.com/2011/07/13/2110.html'}
                ],
            }
        }
    }
</script>

<style type="text/scss" lang="scss" scoped>

    .content{
        width: 1200px;
        margin: auto;
        padding-top: 10px;
        .con-left{
            width: 630px;
            min-height: 500px;
            float: left;

        }
        .con-right{
            width: 360px;
            height: 500px;
            margin-left: 20px;
            float: left;
            h4{
                margin-bottom: 10px;
            }
            .art-tags,.art-advs{
                padding: 0px 5px;
                margin-top: 20px;
                width: 100%;
                height: 350px;
                border: solid 1px #000000;
            }
            .art-tags {

                .art-tags-title{
                    line-height: 50px;
                    font-size: 18px;
                    font-weight: bold;
                }
                p{
                    vertical-align: baseline;
                    margin-top: 0px;
                }
            }
        }
    }

</style>