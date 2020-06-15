<template>
  <div>
    <div ref="fftheatmap" style="width: 100%;height:100%;"></div>
  </div>
</template>

<script>

export default {
    name: 'HeatmapFFT',
    props: {
        lengthSerial:{
            default: 4
        },
        data:{
            default: []
        },
        xData:{
            default:[]
        },
        yData:{
            default:[]
        }
    },
    data() {
      return {
            myChart: null,
            wsConnection: null
      }
    },
    methods:{
        pageResize(){
            //this.myChart = this.$echarts.init(this.$refs.chart);
            this.myChart.resize();
        },
        myEcharts(){
            //let myChart = this.$echarts.init(document.getElementById('echart'));
            this.myChart = this.$echarts.init(this.$refs.fftheatmap);
            // var texttitle=this.$props.titleText;
           var option = {
                tooltip: {},
                grid: {
                    right: 10,
                    left: 140
                },
                xAxis: {
                    type: 'category',
                    data: xData
                },
                yAxis: {
                    type: 'category',
                    data: yData
                },
                visualMap: {
                    type: 'piecewise',
                    min: 0,
                    max: 1,
                    calculable: true,
                    realtime: false,
                    splitNumber: 8,
                    inRange: {
                        color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                    }
                },
                series: [{
                    name: 'Gaussian',
                    type: 'heatmap',
                    data: data,
                    emphasis: {
                        itemStyle: {
                            borderColor: '#333',
                            borderWidth: 1
                        }
                    },
                    progressive: 1000,
                    animation: false
                }]
            };
            //console.log('test'+this.series_data);
            this.myChart.setOption(option);
            this.myChart.resize();    
       },
    },
    mounted() {
        this.myEcharts();
        window.addEventListener('resize', ()=>{
            this.pageResize();
        });
    },
    created() {
    },
    watch: {
        series_data(val) {
            var option = {
                series: [{
                    data: this.series_data,
                }]
            };
            console.log(option);
            this.myChart.setOption(option);
        }
    }
}
</script>

<style>

</style>