<template>
    <div class="content clearfix">
        <div class="con-left">
            <articleinfo v-for="n in 8" :key="n"></articleinfo>
        </div>
        <div class="con-right">
            <articlesearch></articlesearch>
            <articletag></articletag>
            <articleadvance></articleadvance>
        </div>
    </div>
</template>

<script>
    import articleinfo from '@/components/blog-components/article-info'
    import articlesearch from '@/components/blog-components/article-search'
    import articletag from '@/components/blog-components/article-tag'
    // import articleadvance from '@/components/blog-components/article-advance'
    const articleadvance = () => {import('@/components/blog-components/article-advance')}

    export default {
        name: "contentcomponent",
        components:{articleinfo,articlesearch,articletag,articleadvance},
        data : {
            articles : [
                { }
            ],
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
            .art-tag{
                margin-top: 20px;
            }
        }
    }

</style>