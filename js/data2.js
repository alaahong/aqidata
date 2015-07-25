// 基于准备好的dom，初始化echarts图表
var myChart = echarts.init(document.getElementById('pie1'));

var labelTop = {
    normal: {
        label: {
            show: true,
            position: 'center',
            formatter: '{b}',
            textStyle: {
                baseline: 'bottom'
            }
        },
        labelLine: {
            show: false
        }
    }
};
var labelFromatter = {
    normal: {
        label: {
            formatter: function (params) {
                return 100 - params.value + '%'
            },
            textStyle: {
                baseline: 'top'
            }
        }
    },
}
var labelBottom = {
    normal: {
        color: '#ccc',
        label: {
            show: true,
            position: 'center'
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};
var radius = [40, 55];
option = {
    legend: {
        orient: 'vertical',
        x: 'left',
        data: [
            '优', '良', '污染'
        ]
    },
    title: {
        text: '质量等级',
        subtext: 'from global web index',
        x: 'center'
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {
                show: true,
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        width: '20%',
                        height: '30%',
                        itemStyle: {
                            normal: {
                                label: {
                                    formatter: function (params) {
                                        return 'other\n' + params.value + '%\n'
                                    },
                                    textStyle: {
                                        baseline: 'middle'
                                    }
                                }
                            },
                        }
                    }
                }
            },
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    series: [
        {
            type: 'pie',
            center: ['20%', '30%'],
            radius: radius,
            x: '0%', // for funnel
            itemStyle: labelFromatter,
            data: [
                {name: 'other', value: 91.32, itemStyle: labelBottom},
                {name: '优', value: 9.68, itemStyle: labelTop}
            ]
        },
        {
            type: 'pie',
            center: ['50%', '30%'],
            radius: radius,
            x: '33%', // for funnel
            itemStyle: labelFromatter,
            data: [
                {name: 'other', value: 29.03, itemStyle: labelBottom},
                {name: '良', value: 70.97, itemStyle: labelTop}
            ]
        },
        {
            type: 'pie',
            center: ['80%', '30%'],
            radius: radius,
            x: '66%', // for funnel
            itemStyle: labelFromatter,
            data: [
                {name: 'other', value: 80.65, itemStyle: labelBottom},
                {name: '污染', value: 19.35, itemStyle: labelTop}
            ]
        }
    ]
};
// 为echarts对象加载数据
myChart.setOption(option);
