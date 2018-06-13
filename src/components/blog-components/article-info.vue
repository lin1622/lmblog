<template>
    <div class="art-info">
        <h1>这是一个文章标题 <a href="###">点我点我！！！</a> </h1>
        <div class="art-intro">
            <p>PHP 是 Web 开发最常用的语言，每个大版本的更新都带来不少新特性和性能提升。特别是 PHP 7.0 的发布，带来 PHP 性能飞跃。</p>
        </div>
        <div class="art-meta">
            标签：<a href="###">PHP应用</a>,<a href="###">随笔</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "article-info"
    }
</script>

<style type="text/scss" lang="scss" scoped>
    .art-info {
        font-size: 12px;

        padding-bottom: 20px;
        border-bottom: 1px solid #ccc;
        h1 {
            font-size: 16px;
            vertical-align: baseline;
        }
    }
</style>