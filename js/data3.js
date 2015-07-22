// 基于准备好的dom，初始化echarts图表
var myChart = echarts.init(document.getElementById('pie2'));

var option = {
    title: {
        text: '质量等级',
        subtext: '程度',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['优', '良', '污染']
    },
    toolbox: {
        show: true,
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {
                show: true,
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        x: '25%',
                        width: '50%',
                        funnelAlign: 'left',
                        max: 1548
                    }
                }
            },
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    calculable: true,
    series: [
        {
            name: '质量等级',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 3, name: '优'},
                {value: 22, name: '良'},
                {value: 6, name: '污染'}
            ]
        }
    ]
};

// 为echarts对象加载数据
myChart.setOption(option);
