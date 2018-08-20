$(function () {
  
    var myCharts = echarts.init($('.k-charts')[0], {
        renderer: 'canvas',
        width: $(document).width(),
        height: 'auto'
    })
    // var option;


    var base = +new Date(1968, 9, 3);
    var oneDay = 24 * 3600 * 1000;
    var date = [];

    var data = [Math.random() * 300];

    for (var i = 1; i < 20000; i++) {
        var now = new Date(base += oneDay);
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
        data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
    }

    var option = {
    //     tooltip: {
    //         trigger: 'axis',
    //         position: function (pt) {
    //             return [pt[0], '10%'];
    //         }
    //     },
    //     title: {
    //         left: 'center',
    //         text: '大数据量面积图',
    //     },
    //     toolbox: {
    //         feature: {
    //             dataZoom: {
    //                 yAxisIndex: 'none'
    //             },
    //             restore: {},
    //             saveAsImage: {}
    //         }
    //     },
    //     xAxis: {
    //         type: 'category',
    //         boundaryGap: false,
    //         data: date
    //     },
    //     yAxis: {
    //         type: 'value',
    //         boundaryGap: [0, '100%']
    //     },
    //     dataZoom: [{
    //         type: 'inside',
    //         start: 0,
    //         end: 10
    //     }, {
    //         start: 0,
    //         end: 10,
    //         handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
    //         handleSize: '80%',
    //         handleStyle: {
    //             color: '#fff',
    //             shadowBlur: 3,
    //             shadowColor: 'rgba(0, 0, 0, 0.6)',
    //             shadowOffsetX: 2,
    //             shadowOffsetY: 2
    //         }
    //     }],
    //     series: [{
    //         name: '模拟数据',
    //         type: 'line',
    //         smooth: true,
    //         symbol: 'none',
    //         sampling: 'average',
    //         itemStyle: {
    //             normal: {
    //                 color: 'rgb(72, 192, 252)'
    //             }
    //         },
    //         areaStyle: {
    //             normal: {
    //                 color: 'rgb(180, 230, 255)'
    //             }
    //         },
    //         data: data
    //     }],
    //     grid: {
    //         // left:'0',
    //         // right:'0',
    //         // bottom:'0',
    //         containLabel: true
    //     },
    

    
    title: {
        show: !1
    },
    toolbox: {
        show: !1
    },
    legend: {
        show: !0
    },
    xAxis: [{
        type: "category",
        boundaryGap: !1,
        data: data,
        axisTick: {
            show: !1
        },
        splitLine: {
            show: !1
        }
    }],
    yAxis: [{
        position: "right",
        type: "value",
        axisLabel: {
            formatter: "{value}"
        },
        axisTick: {
            show: !1
        },
        axisLine: {
            show: !1
        },
        scale: !0,
        splitNumber: 2
    }],
    grid: {
        top: "10%",
        left: "1%",
        right: "1%",
        bottom: "0%",
        containLabel: !0
    },
    series: [{
        type: "line",
        data: data,
        smooth: !0,
        symbol: "none",
        sampling: "average",
        itemStyle: {
            normal: {
                color: "rgb(72, 192, 252)"
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "rgb(72, 192, 252)"
                }, {
                    offset: 1,
                    color: "rgb(255, 255, 255)"
                }])
            }
        }
    }]
    };
    myCharts.setOption(option);




 function setChart(t, e, n) {
    var a = this.$echarts.init(document.getElementById("chartCanvas")),
        i = {
            title: {
                show: !1
            },
            toolbox: {
                show: !1
            },
            legend: {
                show: !0
            },
            xAxis: [{
                type: "category",
                boundaryGap: !1,
                data: e,
                axisTick: {
                    show: !1
                },
                splitLine: {
                    show: !1
                }
            }],
            yAxis: [{
                position: "right",
                type: "value",
                axisLabel: {
                    formatter: "{value}"
                },
                axisTick: {
                    show: !1
                },
                axisLine: {
                    show: !1
                },
                scale: !0,
                splitNumber: 2
            }],
            grid: {
                top: "1%",
                left: "1%",
                right: "1%",
                bottom: "1%",
                containLabel: !0
            },
            series: [{
                type: "line",
                data: n,
                smooth: !0,
                symbol: "none",
                sampling: "average",
                itemStyle: {
                    normal: {
                        color: "rgb(255, 70, 131)"
                    }
                },
                areaStyle: {
                    normal: {
                        color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "rgb(255, 158, 68)"
                        }, {
                            offset: 1,
                            color: "rgb(255, 70, 131)"
                        }])
                    }
                }
            }]
        },
        s = {
            legend: {
                show: !0
            },
            xAxis: {
                type: "category",
                data: e
            },
            yAxis: {
                position: "right",
                scale: !0,
                axisLine: {
                    lineStyle: {
                        color: "#8392A5"
                    }
                },
                splitLine: {
                    show: !1
                }
            },
            grid: {
                top: "18%",
                left: "1%",
                right: "4%",
                bottom: "0%",
                containLabel: !0
            },
            series: [{
                type: "candlestick",
                data: n,
                smooth: !0,
                itemStyle: {
                    normal: {
                        color: "#FA322B",
                        color0: "#04BE01",
                        borderColor: "#FA322B",
                        borderColor0: "#04BE01"
                    }
                }
            }]
        };
    a.setOption("k" !== t ? i : s)
}



var rdata = [ {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534603740000,
    "high" : 44008.8019099595915,
    "open" : 44008.0425698526065,
    "low" : 44007.2832296768760,
    "close" : 44007.3522606081920,
    "vol" : 1.58350000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534603680000,
    "high" : 44034.0672282776640,
    "open" : 44007.1451678142440,
    "low" : 44007.1451678142440,
    "close" : 44008.7328790970210,
    "vol" : 22.33260000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534603620000,
    "high" : 44007.2141987455600,
    "open" : 43998.2401785681715,
    "low" : 43990.3706532230935,
    "close" : 44007.2141987455600,
    "vol" : 10.82790000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534603560000,
    "high" : 44002.3820340346585,
    "open" : 43972.6987365935805,
    "low" : 43967.5904482261605,
    "close" : 43984.7791483364615,
    "vol" : 15.05530000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534603500000,
    "high" : 43980.6372928699745,
    "open" : 43974.2174169450415,
    "low" : 43959.3067372931865,
    "close" : 43970.5587779290210,
    "vol" : 9.52360000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534603440000,
    "high" : 43987.1261997949690,
    "open" : 43984.0888390920470,
    "low" : 43949.8495006653315,
    "close" : 43974.1483860137255,
    "vol" : 9.60680000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534603380000,
    "high" : 44000.0349825761510,
    "open" : 43970.0755614785545,
    "low" : 43970.0755614785545,
    "close" : 43984.0198081607310,
    "vol" : 5.65040000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534603320000,
    "high" : 43981.6037258396530,
    "open" : 43954.2674798570825,
    "low" : 43954.2674798570825,
    "close" : 43970.0755614785545,
    "vol" : 6.95613322
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534603260000,
    "high" : 43958.6164280487720,
    "open" : 43906.9812967178075,
    "low" : 43905.7387400916105,
    "close" : 43958.0641806669895,
    "vol" : 12.89499876
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534603200000,
    "high" : 43911.8134614287090,
    "open" : 43908.0857915501180,
    "low" : 43905.7387400916105,
    "close" : 43907.6025750309060,
    "vol" : 6.33210000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534603140000,
    "high" : 43911.7444304973930,
    "open" : 43906.2909874733930,
    "low" : 43903.6678123583670,
    "close" : 43906.3600184047090,
    "vol" : 7.56980000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534603080000,
    "high" : 43936.3194395710510,
    "open" : 43925.6886771795695,
    "low" : 43906.2909874733930,
    "close" : 43906.2909874733930,
    "vol" : 7.85220000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534603020000,
    "high" : 43959.4447991558185,
    "open" : 43943.5676866030305,
    "low" : 43918.6475229415380,
    "close" : 43922.7893784080250,
    "vol" : 7.98540000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534602960000,
    "high" : 43956.6835621781605,
    "open" : 43956.6835621781605,
    "low" : 43943.5676866030305,
    "close" : 43943.6367175343465,
    "vol" : 8.02240000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534602900000,
    "high" : 43956.8906549721085,
    "open" : 43948.0546966573520,
    "low" : 43923.8248422402740,
    "close" : 43956.6835621781605,
    "vol" : 14.77000000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534602840000,
    "high" : 43968.4188193332070,
    "open" : 43968.3497884018910,
    "low" : 43940.1161403809580,
    "close" : 43948.0546966573520,
    "vol" : 17.84350000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534602780000,
    "high" : 44003.2794360730210,
    "open" : 44003.2794360730210,
    "low" : 43958.2712734609375,
    "close" : 43968.5568811270935,
    "vol" : 8.52983898
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534602720000,
    "high" : 44003.3484670043370,
    "open" : 43987.9545709020155,
    "low" : 43972.6987365935805,
    "close" : 44003.3484670043370,
    "vol" : 12.51517984
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534602660000,
    "high" : 43990.9229006048760,
    "open" : 43981.7417877022850,
    "low" : 43955.1648818266995,
    "close" : 43980.4302001447720,
    "vol" : 13.30377833
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534602600000,
    "high" : 43992.5796428189690,
    "open" : 43981.8108186336010,
    "low" : 43968.0046337453110,
    "close" : 43981.8798495649170,
    "vol" : 5.08129939
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534602540000,
    "high" : 44031.3059913000060,
    "open" : 44001.0014155458295,
    "low" : 43979.8089218316735,
    "close" : 43979.8089218316735,
    "vol" : 12.60601107
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534602480000,
    "high" : 44059.6777011148255,
    "open" : 44050.7727119374985,
    "low" : 44005.7645493254150,
    "close" : 44011.4941160059335,
    "vol" : 10.97340000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534602420000,
    "high" : 44059.8157629774575,
    "open" : 44041.6606298974780,
    "low" : 44028.9589398414985,
    "close" : 44041.7986917601100,
    "vol" : 4.22841660
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534602360000,
    "high" : 44062.4389380924835,
    "open" : 44061.6795979167530,
    "low" : 44041.3845062409595,
    "close" : 44041.7296608287940,
    "vol" : 11.81000000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534602300000,
    "high" : 44080.1108547219965,
    "open" : 44042.3509391418925,
    "low" : 44036.2762178047940,
    "close" : 44061.7486288480690,
    "vol" : 37.94550031
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534602240000,
    "high" : 44068.0304429791155,
    "open" : 44016.5333735107830,
    "low" : 44003.7626525234875,
    "close" : 44041.7296608287940,
    "vol" : 21.73218807
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534602180000,
    "high" : 44034.6194756594465,
    "open" : 43989.1971275282125,
    "low" : 43989.1971275282125,
    "close" : 44000.3801372327310,
    "vol" : 5.29273639
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534602120000,
    "high" : 43998.9304878125860,
    "open" : 43979.6708599690415,
    "low" : 43972.2155201431140,
    "close" : 43989.1971275282125,
    "vol" : 4.51330000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534602060000,
    "high" : 43979.1186125872590,
    "open" : 43954.8887581701810,
    "low" : 43954.1984489257665,
    "close" : 43976.1502828156530,
    "vol" : 8.56430000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534602000000,
    "high" : 43972.6987365935805,
    "open" : 43958.8925517740360,
    "low" : 43947.2953564816215,
    "close" : 43954.8887581701810,
    "vol" : 10.05610000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534601940000,
    "high" : 43958.8925517740360,
    "open" : 43939.2877692739115,
    "low" : 43931.3492129975175,
    "close" : 43958.6164280487720,
    "vol" : 18.19050000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534601880000,
    "high" : 43943.3605938090825,
    "open" : 43933.4891716620770,
    "low" : 43928.5189450885435,
    "close" : 43939.9090475870100,
    "vol" : 21.70890000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534601820000,
    "high" : 43958.8925517740360,
    "open" : 43932.7298314863465,
    "low" : 43902.9084721826365,
    "close" : 43949.2282223522330,
    "vol" : 12.21924686
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534601700000,
    "high" : 43938.8735837547610,
    "open" : 43934.7317282882740,
    "low" : 43934.7317282882740,
    "close" : 43934.8007592195900,
    "vol" : 2.89830000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534601640000,
    "high" : 43984.7791483364615,
    "open" : 43984.7791483364615,
    "low" : 43934.7317282882740,
    "close" : 43934.7317282882740,
    "vol" : 32.90777171
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534601580000,
    "high" : 44085.0120503642140,
    "open" : 44064.2337421692085,
    "low" : 43940.5993568314245,
    "close" : 43984.7791483364615,
    "vol" : 21.53026014
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534601520000,
    "high" : 44087.2900708226600,
    "open" : 44006.8690440889800,
    "low" : 44006.8690440889800,
    "close" : 44064.2337421692085,
    "vol" : 11.31361479
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534601460000,
    "high" : 44013.9101983957570,
    "open" : 43970.2826542725025,
    "low" : 43965.8646750807515,
    "close" : 44006.8690440889800,
    "vol" : 17.96160000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534601400000,
    "high" : 43998.1021167055395,
    "open" : 43992.0273953684410,
    "low" : 43947.2263255503055,
    "close" : 43965.9337060120675,
    "vol" : 11.02900000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534601340000,
    "high" : 44006.4548585698295,
    "open" : 43998.1021167055395,
    "low" : 43986.7810451383890,
    "close" : 43992.0273953684410,
    "vol" : 32.40560000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534601280000,
    "high" : 44000.3111063014150,
    "open" : 43993.4770447885860,
    "low" : 43988.9210038029485,
    "close" : 43998.1711476368555,
    "vol" : 41.04060000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534601220000,
    "high" : 44000.3111063014150,
    "open" : 43950.3327171845435,
    "low" : 43949.7804697340155,
    "close" : 43993.7531685138500,
    "vol" : 27.25150710
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534601160000,
    "high" : 43949.8495006653315,
    "open" : 43915.2650076507815,
    "low" : 43895.5221632880250,
    "close" : 43949.8495006653315,
    "vol" : 38.03030181
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534601100000,
    "high" : 43924.4461205533725,
    "open" : 43866.6672370227390,
    "low" : 43865.2866185339100,
    "close" : 43913.4702036428020,
    "vol" : 28.46548092
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534601040000,
    "high" : 43866.6672370227390,
    "open" : 43813.9966417907800,
    "low" : 43813.9276108594640,
    "close" : 43866.6672370227390,
    "vol" : 17.58820000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534600980000,
    "high" : 43834.4297953979510,
    "open" : 43810.1999409808730,
    "low" : 43810.1309100495570,
    "close" : 43813.9966417907800,
    "vol" : 11.74904833
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534600920000,
    "high" : 43875.9173808566460,
    "open" : 43871.9135872527910,
    "low" : 43800.1214260399195,
    "close" : 43810.4070337060755,
    "vol" : 25.98785167
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534600860000,
    "high" : 43889.8616275388225,
    "open" : 43871.9135872527910,
    "low" : 43871.9135872527910,
    "close" : 43871.9135872527910,
    "vol" : 25.62440000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534600800000,
    "high" : 43872.8109892224080,
    "open" : 43820.2094249905105,
    "low" : 43820.2094249905105,
    "close" : 43871.9135872527910,
    "vol" : 20.64970000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534600740000,
    "high" : 43841.0567641168320,
    "open" : 43738.0626251114215,
    "low" : 43737.9935942488510,
    "close" : 43841.0567641168320,
    "vol" : 22.11730000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534600680000,
    "high" : 43790.9403131373285,
    "open" : 43780.1714889519605,
    "low" : 43735.2323572711930,
    "close" : 43737.9935942488510,
    "vol" : 22.86240000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534600620000,
    "high" : 43807.2316112092670,
    "open" : 43807.0245184840645,
    "low" : 43779.4121487762300,
    "close" : 43780.1714889519605,
    "vol" : 9.98295758
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534600560000,
    "high" : 43819.5881466774120,
    "open" : 43800.9497971469660,
    "low" : 43768.2981699342820,
    "close" : 43799.7762713833395,
    "vol" : 19.46177566
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534600500000,
    "high" : 43875.9173808566460,
    "open" : 43843.4038155065940,
    "low" : 43808.1980441789455,
    "close" : 43808.1980441789455,
    "vol" : 14.74230000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534600440000,
    "high" : 43869.1523502751330,
    "open" : 43825.8009298771425,
    "low" : 43814.8940438291425,
    "close" : 43843.4038155065940,
    "vol" : 20.92930000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534600380000,
    "high" : 43834.6368881231535,
    "open" : 43785.5559010446445,
    "low" : 43782.5875712730385,
    "close" : 43821.4519816167075,
    "vol" : 12.64940000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534600320000,
    "high" : 43785.5559010446445,
    "open" : 43757.3222530237115,
    "low" : 43757.3222530237115,
    "close" : 43785.5559010446445,
    "vol" : 10.24282890
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534600260000,
    "high" : 43765.5369329566240,
    "open" : 43679.2482776797935,
    "low" : 43679.2482776797935,
    "close" : 43754.5610160460535,
    "vol" : 27.35589937
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534600200000,
    "high" : 43699.3362766303845,
    "open" : 43699.3362766303845,
    "low" : 43615.1875800181135,
    "close" : 43680.0766487868400,
    "vol" : 28.70143513
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534600140000,
    "high" : 43732.6782130874830,
    "open" : 43690.2932255904255,
    "low" : 43672.3451853043940,
    "close" : 43699.0601529738660,
    "vol" : 22.12217138
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534600080000,
    "high" : 43690.2932255904255,
    "open" : 43615.1185490867975,
    "low" : 43588.1964886233775,
    "close" : 43690.2932255904255,
    "vol" : 88.56093411
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534600020000,
    "high" : 43768.4362317969140,
    "open" : 43763.1208506355460,
    "low" : 43599.9317457784240,
    "close" : 43615.1185490867975,
    "vol" : 51.35519549
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534599960000,
    "high" : 43913.4702036428020,
    "open" : 43895.7982870132890,
    "low" : 43756.9770983671315,
    "close" : 43763.0518197042300,
    "vol" : 48.00121908
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534599900000,
    "high" : 43900.6304517241905,
    "open" : 43894.0034830053095,
    "low" : 43873.1561438789880,
    "close" : 43899.9401424797760,
    "vol" : 8.26130000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534599840000,
    "high" : 43897.2479364334340,
    "open" : 43897.2479364334340,
    "low" : 43872.6038964972055,
    "close" : 43877.4360611393615,
    "vol" : 11.74196192
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534599780000,
    "high" : 43905.7387400916105,
    "open" : 43884.8223700339730,
    "low" : 43884.7533391714025,
    "close" : 43897.2479364334340,
    "vol" : 19.59600000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534599720000,
    "high" : 43888.7571327752575,
    "open" : 43872.9490510850400,
    "low" : 43871.1542470770605,
    "close" : 43881.5779166058485,
    "vol" : 12.53030000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534599660000,
    "high" : 43902.9775031139525,
    "open" : 43885.5126792783875,
    "low" : 43841.9541660864490,
    "close" : 43863.9750309763970,
    "vol" : 24.49074646
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534599600000,
    "high" : 43942.1180371828855,
    "open" : 43928.3118523633410,
    "low" : 43887.3765142864285,
    "close" : 43887.3765142864285,
    "vol" : 16.46160000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534599540000,
    "high" : 43948.6069440391345,
    "open" : 43948.1927585199840,
    "low" : 43919.9591104990510,
    "close" : 43926.5860792179320,
    "vol" : 11.25667440
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534599480000,
    "high" : 43949.4353151461810,
    "open" : 43931.3492129975175,
    "low" : 43914.9888839255175,
    "close" : 43940.3922640374765,
    "vol" : 20.29598962
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534599420000,
    "high" : 43931.3492129975175,
    "open" : 43876.4005973071125,
    "low" : 43863.3537525945530,
    "close" : 43931.3492129975175,
    "vol" : 49.87968717
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534599360000,
    "high" : 43901.3897918999210,
    "open" : 43865.6317731217445,
    "low" : 43840.7806403915680,
    "close" : 43876.4005973071125,
    "vol" : 41.09940113
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534599300000,
    "high" : 43903.8749051523150,
    "open" : 43903.8749051523150,
    "low" : 43858.8667425402315,
    "close" : 43865.6317731217445,
    "vol" : 20.20560000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534599240000,
    "high" : 43903.8749051523150,
    "open" : 43903.7368432896830,
    "low" : 43886.3410503854340,
    "close" : 43903.7368432896830,
    "vol" : 8.84621832
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534599180000,
    "high" : 43962.2060361334765,
    "open" : 43962.2060361334765,
    "low" : 43886.4100813167500,
    "close" : 43887.2384524237965,
    "vol" : 17.80556865
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534599120000,
    "high" : 43996.9285910106585,
    "open" : 43986.5049214818705,
    "low" : 43955.4410055519635,
    "close" : 43962.1370052021605,
    "vol" : 24.40290000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534599060000,
    "high" : 44020.2610433893740,
    "open" : 43995.4099106591975,
    "low" : 43986.5049214818705,
    "close" : 43986.5049214818705,
    "vol" : 11.92983861
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534599000000,
    "high" : 44016.2572497855190,
    "open" : 43971.3871490360675,
    "low" : 43965.0363040424505,
    "close" : 43995.4099106591975,
    "vol" : 13.16862081
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534598940000,
    "high" : 43978.8424888619950,
    "open" : 43912.9869871235900,
    "low" : 43912.9869871235900,
    "close" : 43961.8608814768965,
    "vol" : 19.36294101
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534598880000,
    "high" : 43931.2801820662015,
    "open" : 43931.2801820662015,
    "low" : 43891.2422460276515,
    "close" : 43916.0243478265120,
    "vol" : 31.50670000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534598820000,
    "high" : 43940.7374186940565,
    "open" : 43873.1561438789880,
    "low" : 43873.1561438789880,
    "close" : 43931.2801820662015,
    "vol" : 13.90425712
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534598760000,
    "high" : 43918.9236466668020,
    "open" : 43895.2460396315065,
    "low" : 43858.4525570210810,
    "close" : 43872.8109892224080,
    "vol" : 11.03738875
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534598700000,
    "high" : 43916.6456261396105,
    "open" : 43810.4070337060755,
    "low" : 43800.4665806277540,
    "close" : 43895.2460396315065,
    "vol" : 64.42230661
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534598640000,
    "high" : 43882.6133805068430,
    "open" : 43865.9769277783245,
    "low" : 43793.2183335957745,
    "close" : 43825.3177133579305,
    "vol" : 36.40190000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534598580000,
    "high" : 43972.7677675248965,
    "open" : 43972.7677675248965,
    "low" : 43834.6368881231535,
    "close" : 43880.7495455675475,
    "vol" : 87.61153087
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534598520000,
    "high" : 43987.5403853141195,
    "open" : 43923.4796876524395,
    "low" : 43923.4796876524395,
    "close" : 43972.6987365935805,
    "vol" : 18.74125698
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534598460000,
    "high" : 43958.8925517740360,
    "open" : 43929.6234399208540,
    "low" : 43857.0719385322520,
    "close" : 43923.4796876524395,
    "vol" : 49.96249455
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534598400000,
    "high" : 44036.4142796674260,
    "open" : 44028.8899089101825,
    "low" : 43917.8881827658075,
    "close" : 43938.2523054416625,
    "vol" : 37.02011381
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534598340000,
    "high" : 44041.3154753096435,
    "open" : 43972.7677675248965,
    "low" : 43946.8811709624710,
    "close" : 44007.2832296768760,
    "vol" : 21.93960000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534598280000,
    "high" : 44043.0412483863070,
    "open" : 44039.3135785077160,
    "low" : 43946.8811709624710,
    "close" : 43972.6987365935805,
    "vol" : 29.54836623
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534598220000,
    "high" : 44047.8734130972085,
    "open" : 43974.0103241510935,
    "low" : 43961.9989433395285,
    "close" : 44035.6549394916955,
    "vol" : 56.02849418
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534598160000,
    "high" : 43996.9285910106585,
    "open" : 43903.6678123583670,
    "low" : 43903.6678123583670,
    "close" : 43973.3200149066790,
    "vol" : 35.98778567
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534598100000,
    "high" : 43973.6651695632590,
    "open" : 43834.8439809171015,
    "low" : 43801.9162300478990,
    "close" : 43903.6678123583670,
    "vol" : 46.33110000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534598040000,
    "high" : 43933.6272335247090,
    "open" : 43912.7108634670715,
    "low" : 43834.6368881231535,
    "close" : 43834.7059190544695,
    "vol" : 40.62054238
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534597980000,
    "high" : 43964.9672731111345,
    "open" : 43892.6228645164805,
    "low" : 43841.5399805672985,
    "close" : 43890.8280604397555,
    "vol" : 27.31922783
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534597920000,
    "high" : 44018.7423631066585,
    "open" : 43893.7963902113615,
    "low" : 43892.5538335851645,
    "close" : 43893.7273592800455,
    "vol" : 32.82607022
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534597860000,
    "high" : 44083.1482153561730,
    "open" : 44070.1013707123590,
    "low" : 43877.8502467272575,
    "close" : 43903.6678123583670,
    "vol" : 102.63310000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534597800000,
    "high" : 44139.2013258788885,
    "open" : 44084.8049575702660,
    "low" : 44060.0918867027215,
    "close" : 44083.1482153561730,
    "vol" : 53.44900000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534597740000,
    "high" : 44106.5496987349500,
    "open" : 44100.9581938483180,
    "low" : 44021.0203835651045,
    "close" : 44078.3160507140170,
    "vol" : 62.55820360
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534597680000,
    "high" : 44162.0505618071375,
    "open" : 44135.6117177941840,
    "low" : 44096.9544002444630,
    "close" : 44096.9544002444630,
    "vol" : 36.77015291
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534597620000,
    "high" : 44193.3906013935630,
    "open" : 44110.8296159953235,
    "low" : 44097.7827713515095,
    "close" : 44135.6117177941840,
    "vol" : 57.78571100
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534597560000,
    "high" : 44397.1698897397630,
    "open" : 44395.4441165943540,
    "low" : 44097.7827713515095,
    "close" : 44110.8296159953235,
    "vol" : 186.49640134
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534597500000,
    "high" : 44469.3762364717850,
    "open" : 44455.9152062400750,
    "low" : 44397.2389206710790,
    "close" : 44397.2389206710790,
    "vol" : 24.58261106
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534597440000,
    "high" : 44566.3646850026675,
    "open" : 44559.5306234898385,
    "low" : 44434.7227125259190,
    "close" : 44452.1185054301680,
    "vol" : 58.87760000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534597380000,
    "high" : 44614.6863319741915,
    "open" : 44592.3893434277250,
    "low" : 44544.8960675632475,
    "close" : 44559.4615926272680,
    "vol" : 19.90230000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534597320000,
    "high" : 44643.4031964455910,
    "open" : 44600.8801471546470,
    "low" : 44589.9732611066470,
    "close" : 44637.1904133146060,
    "vol" : 29.43440000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534597260000,
    "high" : 44664.0434427779645,
    "open" : 44664.0434427779645,
    "low" : 44600.9491780859630,
    "close" : 44606.1264973846990,
    "vol" : 29.38620000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534597200000,
    "high" : 44698.9040595177785,
    "open" : 44690.7584105161820,
    "low" : 44653.8268660431245,
    "close" : 44664.0434427779645,
    "vol" : 29.23230000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534597140000,
    "high" : 44718.0256255674365,
    "open" : 44696.6950699906485,
    "low" : 44679.2992770863995,
    "close" : 44688.9636064394570,
    "vol" : 4.15080000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534597080000,
    "high" : 44749.2966342225460,
    "open" : 44726.7235220195610,
    "low" : 44701.5272347015500,
    "close" : 44708.4993580082655,
    "vol" : 17.76930000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534597020000,
    "high" : 44756.1997266666910,
    "open" : 44697.5234410289495,
    "low" : 44696.4879771967005,
    "close" : 44726.3783673629810,
    "vol" : 20.51025444
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534596960000,
    "high" : 44712.6412134747525,
    "open" : 44659.4874017923270,
    "low" : 44659.4874017923270,
    "close" : 44695.3144515018195,
    "vol" : 13.98959920
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534596900000,
    "high" : 44672.1200609169905,
    "open" : 44672.1200609169905,
    "low" : 44646.6476498737155,
    "close" : 44658.2448451661300,
    "vol" : 9.99850000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534596840000,
    "high" : 44708.4303270769495,
    "open" : 44682.5437305145240,
    "low" : 44669.9110713898605,
    "close" : 44669.9110713898605,
    "vol" : 12.57491457
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534596780000,
    "high" : 44714.5050484140480,
    "open" : 44703.0459149842655,
    "low" : 44678.7470297046170,
    "close" : 44685.0288437669180,
    "vol" : 20.22400000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534596720000,
    "high" : 44716.5759761472915,
    "open" : 44662.8008861517675,
    "low" : 44655.4145772571560,
    "close" : 44704.2884716104625,
    "vol" : 20.87050000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534596660000,
    "high" : 44716.3688833533435,
    "open" : 44716.3688833533435,
    "low" : 44649.2017941261710,
    "close" : 44662.5247624952490,
    "vol" : 26.61070000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534596600000,
    "high" : 44771.9387773568470,
    "open" : 44724.3074396984830,
    "low" : 44723.7551922479550,
    "close" : 44723.7551922479550,
    "vol" : 24.84780000
  }, {
    "symbol" : "BTCUSDT",
    "dateTime" : 1534596540000,
    "high" : 44753.2313968950850,
    "open" : 44705.2549045801410,
    "low" : 44696.7641009219645,
    "close" : 44737.6304080675610,
    "vol" : 18.22020000
  } ]

})