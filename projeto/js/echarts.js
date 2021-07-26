 var echart = echarts.init(document.getElementById('echarts'));
        var option = {
            title: {
                text: 'Gráfico de vendas'
            },
            tooltip: {},
            legend: {
                data:['$']
            },
            xAxis: {
                data: ["camisa","casaco","blusa","calça","calçados","meias"]
            },
            yAxis: {},
            series: [{
                name: '$',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        echart.setOption(option);