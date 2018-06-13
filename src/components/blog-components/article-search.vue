<template>
    <div class="art-search">
        <form class="form-inline" role="form" action="http://localhost:8080/#/home" method="get">
            <input class="art-search-text" type="text" name="key">
            <input class="art-search-submit" type="submit" value="全站搜索">
        </form>
    </div>
</template>

<script>
    export default {
        name: "article-search"
    }
</script>

<style type="text/scss" lang="scss" scoped>
    .art-search{
        padding: 20px;
        background: #909399;
        .art-search-text{
            margin-right: 0;
            padding: 0 5px;
            height: 27px;
            line-height: 35px;
            border: 1px solid #ccc;
        }
        .art-search-submit{
            margin-left: 0;
            width: 22%;
            height: 27px;
            background: #00AEEF;
            color: #fff;
            border: none;
        }

    }
</style>