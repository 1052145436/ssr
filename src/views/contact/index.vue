<template>
    <div class="home">
        <div style="width:100%;min-width:1200px;background:#000;">
            <HbHead></HbHead>
        </div>
        <div class="contact-wapper">
            <div class="contact-s2">
                <div class="contact-s2-inner">
                    <h1>{{$t('about.contactUs')}}</h1>
                    <div class="ul-box">
                        <ul>
                            <li>
                                <h3><img src="~@/assets/img/contact/icon_man.png">{{$t('about.personnelRecruitment')}}</h3>
                                <p>{{$t('about.cqHr')}}</p>
                                <p>{{$t('about.contactMan')}}：{{$t('about.cqContactMan')}}</p>
                                <p>{{$t('about.contactPhone')}}：{{$t('about.cqContactPhone')}};</p>
                                <p>{{$t('about.contactEmail')}}：{{$t('about.cqContactEmail')}};</p>
                                <p>{{$t('about.concatAddress')}}：{{$t('about.cqContactAddress')}};</p>
                            </li>
                            <li>
                                <h3><img src="~@/assets/img/contact/icon_hand.png">{{$t('about.businessCooperation')}}</h3>
                                <p>{{$t('about.gzHr')}}</p>
                                <p>{{$t('about.contactMan')}}：{{$t('about.gzContactMan')}}</p>
                                <p>{{$t('about.contactPhone')}}：{{$t('about.gzContactPhone')}};</p>
                                <p>{{$t('about.contactEmail')}}：{{$t('about.gzContactEmail')}};</p>
                                <p>{{$t('about.concatAddress')}}：{{$t('about.gzContactAddress')}};</p>
                            </li>
                        </ul>
                    </div>
                    <div class="clearfix"></div>
                    <h1>{{$t('about.officeAddress')}}</h1>
                    <div class="ul-box">
                        <ul style="margin-left:230px;width:700px;">
                            <li>
                                <h3><img src="~@/assets/img/contact/icon_point.png">{{$t('about.addressPoint1')}}</h3>
                            </li>
                            <li>
                                <h3><img src="~@/assets/img/contact/icon_point.png">{{$t('about.addressPoint2')}}</h3>
                            </li>
                            <li>
                                <h3><img src="~@/assets/img/contact/icon_point.png">{{$t('about.addressPoint3')}}</h3>
                            </li>
                            <li>
                                <h3><img src="~@/assets/img/contact/icon_point.png">{{$t('about.addressPoint4')}}</h3>
                            </li>
                        </ul>
                    </div>
                    <div class="clearfix"></div>
                    <!--<img src="~@/assets/img/contact/map.jpg" class="map-img lazyload">-->
                    <div class="contact_m_Right" style="margin-top:30px;">
                        <div class="contact_m_Right" style="margin-top:30px;">
                            <div id="allmap"></div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
                <div class="clearfix"></div>
                <!--<link rel="import" href="../module/introVersion.html?__inline">-->
            </div>
        </div>
        <div style="clear:both;width:100%;min-width:1200px;background:#000;">
            <introVersion></introVersion>
        </div>
    </div>
</template>
<script type="text/babel">
    import HbHead from '@/components/HbHead'
    import introVersion from '@/components/introVersion'

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
        methods: {
            jump () {
                this.$router.push({
                    name: 'test'
                })
            },
            initUI () {
                var map = new BMap.Map('allmap')
                var point = new BMap.Point(116.404, 39.915)
                map.centerAndZoom(point, 15)
                var json_data = [ [ 113.261987, 23.148914, '中国·广州' ], [ 106.549274, 29.576683, '中国·重庆' ], [ 100.45057, 13.63131, '泰国·曼谷' ], [ 101.770576, 3.180772, '马来西亚·吉隆坡' ] ]
                var pointArray = new Array()
                var opts = {
                    width: 250, // 信息窗口宽度
                    height: 80, // 信息窗口高度
                    title: '', // 信息窗口标题
                    enableMessage: true // 设置允许信息窗发送短息
                }
                for (var i = 0; i < json_data.length; i++) {
                    var marker = new BMap.Marker(new BMap.Point(json_data[ i ][ 0 ], json_data[ i ][ 1 ])) // 创建点
                    map.addOverlay(marker)    //增加点
                    pointArray[ i ] = new BMap.Point(json_data[ i ][ 0 ], json_data[ i ][ 1 ])
                    var content = json_data[ i ][ 2 ]
                    addClickHandler(content, marker)
                    marker.setAnimation(BMAP_ANIMATION_BOUNCE) //跳动的动画
                }
                // 让所有点在视野范围内
                map.setViewport(pointArray)

                function addClickHandler(content, marker) {
                    marker.addEventListener('click', function (e) {
                        openInfo(content, e)
                    })
                }

                function openInfo(content, e) {
                    var p = e.target
                    var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat)
                    var infoWindow = new BMap.InfoWindow(content, opts)  // 创建信息窗口对象
                    map.openInfoWindow(infoWindow, point) //开启信息窗口
                }       	//移动到某一坐标点
                function to(x, y) {
                    map.panTo(new BMap.Point(x, y))
                }

                map.enableScrollWheelZoom(true)     // 开启鼠标滚轮缩放

                var top_left_control = new BMap.ScaleControl({ anchor: BMAP_ANCHOR_TOP_LEFT })// 左上角，添加比例尺
                var top_left_navigation = new BMap.NavigationControl()  //左上角，添加默认缩放平移控件

                // 添加控件和比例尺
                function add_control() {
                    map.addControl(top_left_control)
                    map.addControl(top_left_navigation)

                }
                add_control()
            }
        },
        mounted () {
            this.initUI()
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

    .contact-wapper {
        width: 100%;
        min-width: 1200px;
        .head-div {
            width: 100%;
            height: 160px;
            overflow: hidden;
            background-color: #4c4c4c;
        }

        .contact-s2 {
            background-color: #fff;

            .contact-s2-inner {
                box-shadow: 0 0 20px #888;
                width: 1200px;
                margin: 100px auto;
                position: relative;

                h1 {
                    text-align: center;
                    font-size: 36px;
                    line-height: 36px;
                    color: #0074c2;
                    clear: both;
                    padding-top: 100px;
                    padding-bottom: 86px;
                    letter-spacing: 2px;
                    font-weight: 400;
                }

                .ul-box {
                    width: 1200px;
                    margin: 0px auto;
                    ul {
                        clear: both;
                        width: 1000px;
                        padding:0px 50px;
                        margin:0px auto;
                        list-style: none;
                        li {
                            width: 50%;
                            height: auto;
                            float:left;
                            overflow:hidden;
                            h3 {
                                font-size: 28px;
                                line-height: 45px;
                                color: #4c4c4c;
                                font-weight: 400;

                                img {
                                    width: auto;
                                    height: auto;
                                    margin-right: 10px;
                                }
                            }

                            p {
                                padding-left: 34px;
                                font-weight: 100;
                                color: #4c4c4c;
                                font-size: 22px;
                                line-height: 36px;
                            }
                        }
                    }
                }

                .map-img {
                    clear: both;
                    display: block;
                    width: 1200px;
                    height: auto;
                    padding-top: 30px;
                    margin: 0px auto;
                }
            }
        }
    }

    .contact_m_Right {
        width: 1200px;
        height: 600px;
        margin: 0px auto;
        #allmap {
            width: 1200px;
            height: 600px;
        }
    }
</style>
