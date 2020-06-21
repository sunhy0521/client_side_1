<template>
  <div>
    <div ref="chart" style="width: 100%;height:100%;"></div>
  </div>
</template>

<script>

export default {
    name: 'FFTChart',
    props: {
        lengthSerial:{
            default: 4
        },
        series_data: {
            default: [0, 0, 0, 0, 0, 0, 0, 0]
        }
    },
    data() {
      return {
            // x_data: [ ],
            // store_data:[120, 200, 150, 80, 70, 110, 130],
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
            this.myChart = this.$echarts.init(this.$refs.chart);
            // var texttitle=this.$props.titleText;
            var option = {
                xAxis: {
                    axisLabel: {
                    color: '#959596',
                    fontSize: 10
                    },
                    type: 'category',
                    // data: this.x_data
                },
                yAxis: {
                    type: 'value',
                     splitLine: {
                        lineStyle: {
                        type: 'dashed',
                        color: '#392f4a'
                        }
                    },
                },
                series: [{
                    data: this.series_data,
                    type: 'line',
                    lineStyle: {
                        color: '#55CF3E',
                        width: 1.5,
                        opacity: 1
                    },
                    showSymbol: false,
                    hoverAnimation: false,
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