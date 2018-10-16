<template>
    <div class="common-head">
        <div class="common-inner">
            <router-link :to="{ name: 'home' }"><a href="javascript:;" class="logo"><img
                    src="~@/assets/images/common/logo.png"/></a></router-link>
            <div class="nav">
                <span v-for="(item,index) in navList" :key="index">
                    <router-link :to="{ name:item.name}"
                                 class="navIndex == index?'current':''">{{$t(item.language)}}</router-link>
                </span>
            </div>
            <div class="languageDiv" id="languageDiv">
                <div @click="showLangSwapPanel()"><span>简体中文</span> <img src="~@/assets/images/index/down_cursor.png"/></div>
                <div class="tip" v-if="isShowLangSwapPanel == true">
                    <ul>
                        <li v-for="(item,index) in languageList" :key="index" @click="swapLanguage(item.locale)">{{item.name}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                languageList:[
                    {
                        name:'简体中文',
                        locale:'zhCHS'
                    },
                    {
                        name:'English',
                        locale:'en'
                    },
                    {
                        name:'Melayu',
                        locale:'Melayu'
                    }
                ],
                navList: [
                    {
                        name: 'about',
                        language: 'message.aboutUs'
                    },
                    {
                        name: 'introduce',
                        language: 'message.introduce'
                    },
                    {
                        name: 'cultrue',
                        language: 'message.company_cultrue'
                    },
                    {
                        name: 'recruit',
                        language: 'message.global_recruit'
                    },
                    {
                        name: 'supplier',
                        language: 'message.supplier'
                    },
                    {
                        name: 'contact',
                        language: 'message.contactUs'
                    }
                ],
                isShowLangSwapPanel:false
            }
        },
        props: [
            'navIndex'
        ],
        // 实例初始化最之前，无法获取到data里的数据
        beforeCreate () {


        },
        // 在挂载开始之前被调用
        beforeMount () {


        },
        // 已成功挂载，相当ready()
        mounted () {


        },
        // 相关操作事件
        methods: {
            showLangSwapPanel () {
                this.isShowLangSwapPanel =  true;
            },
            swapLanguage (language){
                // this.
            }
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>
    .common-head {
        width: 100%;
        min-width: 1200px;
        height: 50px;
        //background:#000;
        padding: 80px 0px 120px 0px;
        .common-inner {
            position: relative;
            width: 1200px;
            height: 70px;
            line-height: 70px;
            margin: 0px auto;
            text-align: right;
            .logo {
                display: inline-block;
                width: 197px;
                height: auto;
                float: left;
            }

            .nav {
                text-align: right;
                padding-right: 120px;
                margin: 0px;
                a {
                    color: #fff;
                    font-size: 18px;
                    line-height: 18px;
                    padding: 0px 20px;
                    letter-spacing: 1px;
                    font-weight: 400;
                    cursor: pointer;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    text-decoration: none;

                    &:hover {
                        color: #007490;
                    }
                }

                .current {
                    color: #0074c2;
                }
            }

            .languageDiv {
                width: 120px;
                height: 20px;
                position: absolute;
                right: 0px;
                top: 0px;
                cursor: pointer;

                div {
                    span {
                        color: #fff;
                        font-size: 18px;
                        line-height: 18px;
                        letter-spacing: 1px;
                        font-weight: 400;

                        &:hover {
                            color: #007490;
                        }
                    }
                }

                .tip {
                    position: absolute;
                    top: 50px;
                    right: 0px;
                    width: 140px;
                    height: auto;

                    ul {
                        list-style: none;
                        li {
                            text-align: right;
                            color: #fff;
                            font-size: 16px;
                            line-height: 30px;
                            padding-right: 15px;
                            cursor: pointer;

                            &:hover {
                                color: #007490;
                            }
                        }
                    }
                }
            }
        }
    }

    .clearfix:after {
        content: "020";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }

    .clearfix {
        /* 触发 hasLayout */
        zoom: 1;
    }

    .intro-s6 {
        width: 100%;
        background-color: #4c4c4c;

        .intro-s6-inner {
            width: 1200px;
            margin: 0px auto;
            padding-top: 26px;
            clear: both;

            .align-left {
                width: 800px;
                float: left;
                li {
                    float: left;
                    width: 162px;
                    padding: 24px 0px;
                    a {
                        width: 138px;
                        margin: 0px auto;
                        display: block;
                        color: #fff;
                        font-size: 16px;
                        line-height: 38px;
                        font-weight: 100;

                        em {
                            font-size: 25px;
                            font-weight: 400;
                        }

                        &:hover {
                            color: #0074c2;
                        }
                    }
                }
            }

            .align-right {
                width: 400px;
                float: right;
                li {
                    float: right;
                    width: 162px;

                    img {
                        display: block;
                        width: 138px;
                        height: auto;
                        margin: 0px auto;
                    }

                    p {
                        width: 138px;
                        margin: 0px auto;
                        color: #fff;
                        font-size: 19px;
                        line-height: 38px;
                        text-align: center;
                        font-weight: 100;
                    }
                }
            }

            .version {
                clear: both;
                width: 98%;
                margin: 0px auto;
                font-size: 20px;
                line-height: 20px;
                text-align: center;
                font-family: sans-serif;
                font-weight: 200;
                color: #fff;
                padding: 20px 0px 53px 0px;
                border-top: 1px solid #fff;
            }
        }
    }

</style>
