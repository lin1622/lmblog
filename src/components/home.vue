<template>
    <div>
        <headerComponent></headerComponent>
        <contentComponent></contentComponent>
    </div>
</template>

<script>
    import headerComponent from '@/components/layout/headercomponent'
    import contentComponent from '@/components/layout/contentcomponent'

    export default {
        name: "home",
        components: {headerComponent,contentComponent},
        methods: {},
    }
</script>

<style scoped>
    .header{
        border: solid 1px #000000;
    }
</style>