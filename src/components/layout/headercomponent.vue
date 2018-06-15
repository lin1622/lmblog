<template>
    <header class="header">
        <div class="container clearfix">
            <div class="logo">
                <a href="/#/home">
                    <img src="../../assets/img/logo.jpg" alt="">
                    <div><strong>phper-linm</strong></div>
                </a>
            </div>
            <div class="navbar-items clearfix">
                <ul class="navbar-item ">
                    <li><a href="/#/home" class="active">首页</a></li>
                    <li><a href="/#/home">PHP</a></li>
                    <li><a href="/#/home">HTML</a></li>
                    <li><a href="/#/home">DB</a></li>
                    <li><a href="/#/home">随笔</a></li>
                    <li><a href="/#/home">留言</a></li>
                    <li><a href="/#/home">ABOUT ME</a></li>
                </ul>
            </div>
        </div>

    </header>
</template>

<script>
    export default {
        name: "headercomponent"
    }
</script>

<style type="text/scss" lang="scss" scoped>
    @media (min-width: 1200px) {
        .header {
            background: #4592ec;
            .container {
                line-height: 40px;
                padding: 2px 5px;
                width: 1170px;
                margin: auto;
                .logo {
                    width: 180px;
                    border-right: 1px solid #000000;
                    float: left;
                    img {
                        height: 40px;
                        border-radius: 5px;
                        display: block;
                        float: left;
                    }
                    div {
                        float: left;
                        margin-left: 10px;
                        font-size: 18px;
                    }

                }
                .navbar-items {
                    .navbar-item {
                        border-radius: 4px;
                        li {
                            padding: 0px 25px;
                            background: #a0c5f1;
                        }
                        &:first-child{
                            padding: 0px 25px 0px 0px;
                        }
                    }
                }
            }
        }
    }


</style>