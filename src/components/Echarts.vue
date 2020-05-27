<template>
  <div>
    <div ref="chart" style="width: 100%;height:100%;"></div>
    <!-- <button button v-on:click="myfunction">clickme!</button> -->
  </div>
</template>

<script>

export default {
    name: 'Echarts',
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
        }
    },
    data() {
      return {
          series_data: [],
          store_data:[]
      }
    },
    methods:{
        pageResize(){
            let myChart = this.$echarts.init(this.$refs.chart);
            myChart.resize();
        },
        myEcharts(){
            //let myChart = this.$echarts.init(document.getElementById('echart'));
            let myChart = this.$echarts.init(this.$refs.chart);
            var texttitle=this.$props.titleText;
            console.log(this.$props.titleText);
            console.log(this.$props.dataUrl);
            // 指定图表的配置项和数据
            var option = {
                backgroundColor: new this.$echarts.graphic.RadialGradient(0.5, 0.5, 0.4, [{
                    offset: 0,
                    color: '#272a3c'
                }, {
                    offset: 1,
                    color: '#272a3c'
                }]),
                title: {
                    text: texttitle,
                    textStyle:{
                    color:'#959596',        //颜色
                    fontStyle:'normal',     //风格
                    fontWeight:'normal',    //粗细
                    fontFamily:'Microsoft yahei',   //字体
                    fontSize:14,     //大小
                    align:'center'   //水平对齐
                },
                },
                tooltip: {},
                legend: {
                    data:['分贝(dB)'],
                    textStyle: {
                    fontSize: 12,
                    color: '#F1F1F3'
        }
                },
                xAxis: {
                    data: [ ],
                    axisLabel: {
                        color: '#55CF3E',
                        fontSize: 10
                    }
                },
                yAxis: {
                            splitLine: {
                                lineStyle: {
                                    type: 'dashed',
                                    color: '#392f4a'
                                }
                            },
                            axisLabel: {
                                color: '#959596',
                                fontSize: 10
                            }
                },
                series: [{
                    name: '分贝(dB)',
                    type: 'line',
                    smooth: true,
                    lineStyle: {
                        color: '#55CF3E',
                        width: 1.5,
                        opacity: 1
                    },
                    z: 100,
                    blendMode: 'lighter',
                    showSymbol: false,
                    hoverAnimation: false,
                    data: [0, 0, 0, 0, 0, 0, 0]
                }]
            };
            myChart.setOption(option);
            myChart.resize();
            //
            
            this.series_data = [...new Array(1000)];
            var x_data=[...new Array(1000).keys()];
            setInterval(() => {
                if(!this.startFlag)
                {
                    this.$http
                    .get(this.$props.dataUrl,{withCredentials:true})
                        .then(response => {
                            const data = response.data;
                            this.series_data.shift();
                            this.series_data.push(data.data);
                            this.store_data.push(data.data);
                            // const titleText1=this.$props.titleText;
                            // console.log(titleText1);
                            myChart.setOption({
                                xAxis: {
                                    data: x_data
                                },
                                // title:{
                                //     text: titleText1
                                // },
                                series: [{
                                        type: 'line',
                                        data: Array.from(this.series_data)
                                    }]
                                });
                        });
                }
            }, 500);
        }
    },
    mounted() {
        this.myEcharts();
        window.addEventListener('resize', ()=>{
            this.pageResize();
        });
    },
    created() {
        //this.myEcharts();
    },
    updated() {
        this.myEcharts();
    },
}
</script>

<style>

</style>