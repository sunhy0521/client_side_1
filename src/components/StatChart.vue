<template>
  <div>
    <div ref="chart" style="width: 100%;height:100%;"></div>
  </div>
</template>

<script>

export default {
    name: 'StatChart',
    props: {
        startFlag: {
               // type: Object,
        },
        dataUrl:{
            type:String,
            // default:'http://localhost:8000/users/',
        },
        titleText:{
            //  type:String,
            //  default:'Device2',
        },
        series_data: {
            default: [0, 0, 0, 0]
        }
    },
    data() {
      return {
            x_data: ['Max', 'Min', 'Mean', 'GeoMean'],
            store_data:[120, 200, 150, 80, 70, 110, 130],
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
            var texttitle=this.$props.titleText;
            var option = {
                animation: false,
                xAxis: {
                    axisLabel: {
                    color: '#959596',
                    fontSize: 10
                    },
                    type: 'category',
                    data: this.x_data
                },
                yAxis: {
                    type:'log',
                    logBase:10,
                    splitLine: {
                     lineStyle: {
                        type: 'dashed',
                        color: '#392f4a'
                    }
                },
                    type: 'value'
                },
                series: [{
                    data: this.series_data,
                    type: 'bar',
                    itemStyle:{
                        normal:{
                        color:'#b00997'
                        }
                    },
                    showBackground: false,
                    backgroundStyle: {
                        color: 'rgba(220, 220, 220, 0.8)'
                    }
                }]
            };
            console.log('test'+this.series_data);
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