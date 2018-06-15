<template>
    <a href="{topArticle.url}"  class="art-adv">
        <img src="../../assets/img/article.gif" class="artile-adv-img">
        {{ topArticle.name }}
    </a>
</template>

<script>
    export default {
        name: "article-advance",
        prop: ['topArticle'],
    }
</script>

<style type="text/scss" lang="scss" scoped>
    .art-adv{
        display: block;
        padding:2px 0px;
        .artile-adv-img{
            height: 20px;
            display: block;
            float: left;
            margin-right: 5px;
            /*background:url("../../assets/img/article.png");*/
            /*-webkit-background-size: contain;*/
            /*background-size: contain;*/
        }
    }
</style>