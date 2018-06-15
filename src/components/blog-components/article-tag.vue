<template>
    <a href="/#/home" class="art-tag" :style="[tag.css]">
        {{ tag.name }}
    </a>
</template>

<script>
    export default {
        name: "article-tag",
        props: ['tag'],
    }
</script>

<style type="text/scss" lang="scss" scoped>
    .art-tag{
        color: #0000cc;
    }
</style>