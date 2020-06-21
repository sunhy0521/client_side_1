<template>
  <div>
    <div ref="chart" style="width: 100%;height:100%;"></div>
  </div>
</template>

<script>
export default {
    name: 'MulChart',
    props: {
        lengthSerial:{
            default: 4
        },
        series_data: {
            default: []
        }
    },
    data() {
      return {
            x_data: [ ],
            // store_data:[120, 200, 150, 80, 70, 110, 130],
            series_1: [],
            series_2: [],
            myChart: null,
            wsConnection: null
      }
    },
    methods:{
        pageResize(){
            //this.myChart = this.$echarts.init(this.$refs.chart);
            this.myChart.resize();
        },
        readData(){

        },
        myEcharts(){
            //let myChart = this.$echarts.init(document.getElementById('echart'));
            this.myChart = this.$echarts.init(this.$refs.chart);
            var x_data=[...new Array(1300).keys()];
            // var texttitle=this.$props.titleText;
            var option = {
                title: {
                    text: '人体行为RSS序列',
                    textStyle:{
                    color:'#959596',        //颜色
                    fontStyle:'normal',     //风格
                    fontWeight:'normal',    //粗细
                    fontFamily:'Microsoft yahei',   //字体
                    fontSize:14,     //大小
                    align:'center'   //水平对齐
                    },
                },
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: x_data,
                    show: false
                },
                yAxis: {
                   type: 'value',
                   splitLine:{
                       show:false
                       },
                    min: -75,
                    max: -60

                },
            };
            //console.log('test'+this.series_data);
            
            this.myChart.setOption(option);
            this.myChart.resize(); 
            this.$http
                .get("http://localhost:8000/users/gesturemsgoffline",{withCredentials:true})
                    .then(response => {
                        var data = response.data;
                        this.series_1 = data.FallF;
                        console.log(data.FallF);
                        let option_http = {
                            legend: {
                                    data: ['向前摔倒', '向左摔倒', '向右摔倒','跳', '跑', '水平走', '垂直走'],
                                    textStyle:{
                                        color: "#f5f5f5"
                                    }     
                            },
                            series: [
                                {
                                    name: '向前摔倒',
                                    showSymbol: false,
                                    hoverAnimation: false,
                                    type: 'line',
                                    data: data.FallF,
                                    blendMode: 'lighter',
                                },
                                {
                                    showSymbol: false,
                                    hoverAnimation: false,
                                    name: '向左摔倒',
                                    type: 'line',
                                    data: data.FallL
                                },
                                
                                {
                                    showSymbol: false,
                                    hoverAnimation: false,
                                    name: '向右摔倒',
                                    type: 'line',
                                    data: data.FallR
                                },
                                {
                                    showSymbol: false,
                                    hoverAnimation: false,
                                    name: '跳',
                                    type: 'line',
                                    data: data.Jump
                                },
                                {
                                    showSymbol: false,
                                    hoverAnimation: false,
                                    name: '跑',
                                    type: 'line',
                                    data: data.Run
                                },
                                {
                                    showSymbol: false,
                                    hoverAnimation: false,
                                    name: '水平走',
                                    type: 'line',
                                    data: data.WalkH
                                },
                                {
                                    showSymbol: false,
                                    hoverAnimation: false,
                                    name: '垂直走',
                                    type: 'line',
                                    data: data.WalkV
                                },
                            ]
                        }
                        this.myChart.setOption(option_http);
                    });
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