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
          x_data: [],
          series_data: [],
          store_data:[],
          myChart: null,
          wsConnection: null
      }
    },
    methods:{
        restoreStoreData(){
        this.store_data=[];
        },
        pageResize(){
            //this.myChart = this.$echarts.init(this.$refs.chart);
            this.myChart.resize();
        },
        myEcharts(){
            //let myChart = this.$echarts.init(document.getElementById('echart'));
            this.myChart = this.$echarts.init(this.$refs.chart);
            var texttitle=this.$props.titleText;
            //console.log(this.$props.titleText);
            //console.log(this.$props.dataUrl);

            this.x_data=[...new Array(100).keys()];
            this.series_data = [...new Array(100)];
            // 指定图表的配置项和数据
            var option = {
                animation: false,
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
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                legend: {
                    data:['分贝(dB)'],
                    textStyle: {
                        fontSize: 12,
                        color: '#F1F1F3'
                    }
                },
                xAxis: {
                    data: this.x_data,
                    axisLabel: {
                        color: '#959596',
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
                    data: Array.from(this.series_data)
                }]
            };
            //
            
            this.myChart.setOption(option);
            this.myChart.resize();

            setInterval(() => {
                if(!this.startFlag)
                {
                    this.wsConnection.send("hello");
                    // this.$http
                    // .get(this.$props.dataUrl,{withCredentials:true})
                    //     .then(response => {
                    //         const data = response.data;
                    //         this.series_data.shift();
                    //         this.series_data.push(data.data);
                    //         this.store_data.push(data.data);

                    //         // const titleText1=this.$props.titleText;
                    //         // console.log(titleText1);
                    //         this.myChart.setOption({
                    //             xAxis: {
                    //                 data: x_data
                    //             },
                    //             // title:{
                    //             //     text: titleText1
                    //             // },
                    //             series: [{
                    //                     type: 'line',
                    //                     data: Array.from(this.series_data)
                    //                 }]
                    //             });
                    //     });
                }
            }, 20);
        },
        updateEchart(data)
        {
            this.series_data.shift();
            this.series_data.push(data.data);
            this.store_data.push(data.data);

            this.myChart.setOption({
                series: [{
                    type: 'line',
                    data: Array.from(this.series_data)
                }]
            });
        },
            updated() {
                this.myEcharts();
            },
            wsInitWebSocket()
            {
                console.log("Starting connection to WebSocket Server")
                //this.wsConnection = new WebSocket("ws://127.0.0.1:8000/wsapi/api/123/")
                this.wsConnection = new WebSocket(this.dataUrl)
                this.wsConnection.onmessage = this.wsRecvOnMessage;
                this.wsConnection.onopen = this.wsOnopen;
                this.wsConnection.onerror = this.wsOnError;
                this.wsConnection.onclose = this.wsClose;
            },
            wsOnopen(){ // 连接建立之后执行send方法发送数据
            },
            wsOnError(){ // 连接建立失败重连
                this.wsInitWebSocket();
            },
            wsRecvOnMessage(event){ // 数据接收
                const redata = JSON.parse(event.data);
                this.updateEchart(redata);
            },
            wsSend(Data){ // 数据发送
                this.wsConnection.send(Data);
            },
            wsClose(e){  // 关闭
                console.log('断开连接',e);
            },
    },
    mounted() {
        this.myEcharts();
        window.addEventListener('resize', ()=>{
            this.pageResize();
        });
    },
    created() {
        this.wsInitWebSocket();
    }
}
</script>

<style>

</style>