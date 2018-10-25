<template>
    <div class="intro-wapper">
        <div class="intro-inner">
            <img src="../../assets/images/introduce/intro_bg1.jpg" alt="" class="intro_bg1">
            <HbHead :navIndex="1"></HbHead>
            <div class="txt-info">
                <h1>{{$t('message.busiTitle1')}}</h1>
                <p>{{$t('message.busiTitle1Desc')}}</p>
            </div>
        </div>
        <div class="intro-s2">
            <div class="intro-s2-inner">
                <h1>{{$t('message.busiTitle2')}}</h1>
                <p>{{$t('message.busiTitle2Desc')}}</p>
            </div>
        </div>
        <div class="intro-s3">
            <div class="intro-s3-inner">
                <img src="../../assets/images/introduce/intro_bg2.jpg" alt="" class="s3_bg">
            </div>
        </div>
        <div class="intro-s2">
            <div class="intro-s2-inner">
                <h1>{{$t('message.busiTitle3')}}</h1>
                <p>{{$t('message.busiTitle3Desc')}}</p>
            </div>
        </div>
        <div class="intro-s4">
            <div class="intro-s4-inner">
                <img src="../../assets/images/introduce/intro_bg3.jpg" alt="" class="s4_bg">
                <ul>
                    <li>
                        <img src="../../assets/images/introduce/icon3.png" alt="" class="intro-s4-out">
                        <img src="../../assets/images/introduce/icon3_hover.png" alt="" class="intro-s4-on">
                    </li>
                    <li>
                        <img src="../../assets/images/introduce/icon1.png" alt="" class="intro-s4-out">
                        <img src="../../assets/images/introduce/icon1_hover.png" alt="" class="intro-s4-on">
                    </li>
                    <li>
                        <img src="../../assets/images/introduce/icon2.png" alt="" class="intro-s4-out">
                        <img src="../../assets/images/introduce/icon2_hover.png" alt="" class="intro-s4-on">
                    </li>
                    <li>
                        <img src="../../assets/images/introduce/icon4.png" alt="" class="intro-s4-out">
                        <img src="../../assets/images/introduce/icon4_hover.png" alt="" class="intro-s4-on">
                    </li>
                    <li>
                        <img src="../../assets/images/introduce/icon6.png" alt="" class="intro-s4-out">
                        <img src="../../assets/images/introduce/icon6_hover.png" alt="" class="intro-s4-on">
                    </li>
                    <li>
                        <img src="../../assets/images/introduce/icon5.png" alt="" class="intro-s4-out">
                        <img src="../../assets/images/introduce/icon5_hover.png" alt="" class="intro-s4-on">
                    </li>
                    <li>
                        <img src="../../assets/images/introduce/icon7.png" alt="" class="intro-s4-out">
                        <img src="../../assets/images/introduce/icon7_hover.png" alt="" class="intro-s4-on">
                    </li>
                    <li>
                        <img src="../../assets/images/introduce/icon8.png" alt="" class="intro-s4-out">
                        <img src="../../assets/images/introduce/icon8_hover.png" alt="" class="intro-s4-on">
                    </li>
                </ul>
            </div>
        </div>
        <div class="intro-s5">
            <p>{{$t('message.openDesc')}}</p>
            <div class="intro-s5-inner">
                <img src="../../assets/images/introduce/map.png" alt="" class="s5_bg">
            </div>
        </div>
        <div style="width:100%;min-width:1200px;background:#000;">
            <introVersion></introVersion>
        </div>
    </div>
</template>
<script type="text/babel">
    import HbHead from '../../components/HbHead'
    import introVersion from '../../components/introVersion'

    export default {
        components: {
            HbHead,
            introVersion
        },
        data() {
            return {
                test: 'Hello World!'
            }
        },
        methods: {},
        mounted() {

        }
    }
</script>
<style lang="scss" type="text/scss" scoped>
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

    .intro-wapper {
        width: 100%;
        min-width: 1200px;
        overflow-x: hidden;

        .intro-inner {
            position: relative;
            width: 100%;
            min-width: 1200px;
            height: 948px;
            margin: 0px auto;

            .intro_bg1 {
                position: absolute;
                width: 1920px;
                height: 948px;
                top: 0px;
                left: 50%;
                margin-left: -960px;
            }

            .txt-info {
                position: relative;
                z-index: 2;

                h1 {
                    width: 1200px;
                    margin: 0px auto;
                    padding-top: 180px;
                    padding-bottom: 150px;
                    font-size: 77px;
                    line-height: 77px;
                    color: #fff;
                    font-weight: 500;
                    letter-spacing: 5px;
                }
                p {
                    padding: 0px 80px;
                    color: #fff;
                    font-weight: 200;
                    letter-spacing: 2px;
                    font-size: 36px;
                    line-height: 68px;
                }
            }

        }

        .intro-s2 {
            background: #fff;

            .intro-s2-inner {
                width: 100%;
                min-width: 1200px;
                margin: 0px auto;
                padding: 118px 0px 100px 0px;
                background: #fff;

                h1 {
                    font-size: 50px;
                    line-height: 50px;
                    text-align: center;
                    color: #0074c2;
                    font-weight: 400;
                }

                p {
                    margin-top: 45px;
                    font-size: 36px;
                    line-height: 62px;
                    text-align: center;
                    color: #525257;
                    font-family: sans-serif;
                    font-weight: 200;
                    padding: 0px 80px;
                }
            }
        }
        .intro-s3 {
            .intro-s3-inner {
                position: relative;
                width: 1200px;
                height: 486px;
                margin: 0px auto;

                .s3_bg {
                    width: 1920px;
                    height: 486px;
                    position: absolute;
                    left: 50%;
                    margin-left: -960px;
                    top: 0;
                }
            }
        }
        .intro-s4 {
            .intro-s4-inner {
                width: 1200px;
                height: 486px;
                margin: 0px auto;
                position: relative;

                .s4_bg {
                    width: 1920px;
                    height: 486px;
                    position: absolute;
                    left: 50%;
                    margin-left: -960px;
                    top: 0;
                }

                ul {
                    position: absolute;
                    width: 1000px;
                    height: 400px;
                    right: -150px;
                    top: 70px;
                    text-align: right;
                    li {
                        position: relative;
                        width: 138px;
                        height: 138px;
                        float: left;
                        margin-left: 70px;
                        margin-bottom: 70px;
                        .intro-s4-out, .intro-s4-on {
                            position: absolute;
                            left: 0px;
                            top: 0px;
                            width: 138px;
                            height: 138px;
                        }

                        .intro-s4-out {
                            display: block;
                        }

                        .intro-s4-on {
                            display: none;
                        }

                        &:hover {
                            .intro-s4-out {
                                display: none;
                            }

                            .intro-s4-on {
                                display: block;
                            }
                        }
                    }
                }
            }
        }

        .intro-s5 {
            background-color: #fff;
            p {
                width: 1200px;
                margin: 0px auto;
                padding-top: 115px;
                color: #525257;
                font-weight: 200;
                letter-spacing: 2px;
                font-size: 36px;
                line-height: 68px;
                text-align: center;
            }
            .intro-s5-inner {
                width: 1200px;
                height: 1307px;
                margin: -50px auto 0px auto;
                position: relative;

                .s5_bg {
                    width: 1307px;
                    height: 1307px;
                    position: absolute;
                    left: 50%;
                    margin-left: -653px;
                    top: 0;
                }
            }
        }
    }
</style>
