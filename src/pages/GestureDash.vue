<template>
  <div>
    <div class="row">
      <div class="col-5">
        <card type="chart">
          <template slot="header">
            <div class="row">
              <div class="col-sm-6" :class="isRTL ? 'text-right' : 'text-left'">
                <h5 class="card-category">在线动作分析</h5>
                <h2 class="card-title">{{$t('dashboard.performance')}}</h2>
              </div>
              <div class="col-sm-6">
                <div class="btn-group btn-group-toggle"
                     :class="isRTL ? 'float-left' : 'float-right'"
                     data-toggle="buttons">
                  <label v-for="(option, index) in bigLineChartCategories"
                         :key="option"
                         class="btn btn-sm btn-primary btn-simple"
                         :class="{active: bigLineChart1.activeIndex === index}"
                         :id="index">
                    <input type="radio"
                           @click="mainRSSIControl(option,index)"
                           name="options" autocomplete="off"
                           :checked="bigLineChart1.activeIndex === index">
                    {{option}}
                  </label>
                </div>
              </div>
            </div>
          </template>
            <div class="chart-area">
              <Echarts ref="mainRSSIChart1"
                style="height:100%"
                titleText="No gesture"
                dataUrl="ws://localhost:8000/wsapi/api/device1/"
                v-bind:startFlag="mainChartStartFlag"
              >
              </Echarts>
            </div>
        </card>
      </div>
      <div class="col-1">
        <card type="chart">
          <template slot="header">
            <div class="row">
              <div class="col-sm-6" :class="isRTL ? 'text-right' : 'text-left'">
                <h5 class="card-category">预测结果</h5>
                <h2 class="card-title">Go</h2>
              </div>
            </div>
          </template>
          <DynamicChart>
          </DynamicChart>
          <!-- <div class="chart-area">
            <DynamicChart>
            
            </DynamicChart>
          </div> -->
        </card>
      </div>
      <div class="col-6">
        <card type="chart">
          <template slot="header">
            <div class="row">
              <div class="col-sm-6" :class="isRTL ? 'text-right' : 'text-left'">
                <h5 class="card-category">离线动作分析</h5>
                <h2 class="card-title">{{$t('dashboard.performance')}}</h2>
              </div>
            </div>
          </template>
          <!-- <div class="chart-area"> -->
            <!-- <MulChart ref="mulchart1"
                style="height:100%">
            </MulChart> -->
          <!-- </div> -->
        </card>
      </div>
    </div>
    <div class="row">
      <div class="col-5">
        <card type="chart">
          <template slot="header">
            <div class="row">
              <div class="col-sm-6" :class="isRTL ? 'text-right' : 'text-left'">
                <h5 class="card-category">在线动作分析</h5>
                <h2 class="card-title">{{$t('dashboard.performance')}}</h2>
              </div>
              <div class="col-sm-6">
                <div class="btn-group btn-group-toggle"
                     :class="isRTL ? 'float-left' : 'float-right'"
                     data-toggle="buttons">
                  <label v-for="(option, index) in bigLineChartCategories"
                         :key="option"
                         class="btn btn-sm btn-primary btn-simple"
                         :class="{active: bigLineChart.activeIndex === index}"
                         :id="index">
                    <input type="radio"
                           @click="mainRSSIControl2(option,index)"
                           name="options" autocomplete="off"
                           :checked="bigLineChart.activeIndex === index">
                    {{option}}
                  </label>
                </div>
              </div>
            </div>
          </template>
            <div class="chart-area">
              <EchartCopy ref="mainRSSIChart2"
                style="height:100%"
                titleText="have gesture"
                dataUrl="ws://localhost:8000/wsapi/api/device2/"
                v-bind:startFlag="mainChartStartFlag2"
              >
              </EchartCopy>
            </div>
        </card>
      </div>
      <div class="col-1">
        <card type="chart">
          <template slot="header">
            <div class="row">
              <div class="col-sm-6" :class="isRTL ? 'text-right' : 'text-left'">
                <h5 class="card-category">预测结果</h5>
                <h2 class="card-title">Go</h2>
              </div>
              <!-- <div class="col-sm-6">
                <div class="btn-group btn-group-toggle"
                     :class="isRTL ? 'float-left' : 'float-right'"
                     data-toggle="buttons">
                  <label v-for="(option, index) in bigLineChartCategories"
                         :key="option"
                         class="btn btn-sm btn-primary btn-simple"
                         :class="{active: bigLineChart.activeIndex === index}"
                         :id="index">
                    <input type="radio"
                           @click="mainRSSIControl(option,index)"
                           name="options" autocomplete="off"
                           :checked="bigLineChart.activeIndex === index">
                    {{option}}
                  </label>
                </div>
              </div> -->
            </div>
          </template>
          <div class="chart-area">
          </div>
        </card>
      </div>
      <div class="col-6">
        <card type="chart">
          <template slot="header">
            <div class="row">
              <div class="col-sm-6" :class="isRTL ? 'text-right' : 'text-left'">
                <h5 class="card-category">离线动作分析</h5>
                <h2 class="card-title">升采样及细粒度时域特征结果</h2>
              </div>
            </div>
          </template>
          <div class="chart-area">
            <!-- <UpsamChart style="height:100%">
            </UpsamChart> -->
          </div>
        </card>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-2" :class="{'text-right': isRTL}">
        <card type="chart">
          <template slot="header">
            <div class="row">
              <div class="col-sm-6">
                <h2 class="card-category">Device 1</h2>
                <h3 class="card-title">统计学特征</h3>
              </div>
              <div class="col-sm-6">
                 <h2 class="card-category">Results</h2>
                  <div class="btn-group btn-group-toggle"
                     :class="isRTL ? 'float-left' : 'float-right'"
                     data-toggle="buttons">
                  <label v-for="(option, index) in commFeatureCategories"
                         :key="option"
                         class="btn btn-sm btn-primary btn-simple"
                         :class="{active: bigLineChart.activeIndex === index}"
                         :id="index">
                    <input type="radio"
                           @click="showData(option,index)"
                           name="options" autocomplete="off"
                           :checked="bigLineChart.activeIndex === index">
                    {{option}}
                  </label>
                </div>
              </div>
            </div>
          </template>
            <div class="chart-area">
              <StatChart  
                style="height:100%"
                ref="statChart1"
                v-bind:series_data="this.StatValue">
              </StatChart>
            </div>  
        </card>
      </div>
      <div class="col-lg-2" :class="{'text-right': isRTL}">
        <card type="chart">
          <template slot="header">
            <div class="row">
              <div class="col-sm-6">
                <h2 class="card-category">Device 1</h2>
                <h3 class="card-title">细粒度特征</h3>
              </div>
              <div class="col-sm-6">
                 <h2 class="card-category">Results</h2>
                  <div class="btn-group btn-group-toggle"
                     :class="isRTL ? 'float-left' : 'float-right'"
                     data-toggle="buttons">
                  <label v-for="(option, index) in commFeatureCategories"
                         :key="option"
                         class="btn btn-sm btn-primary btn-simple"
                         :class="{active: bigLineChart.activeIndex === index}"
                         :id="index">
                    <input type="radio"
                           @click="showFineTimeData(option,index)"
                           name="options" autocomplete="off"
                           :checked="bigLineChart.activeIndex === index">
                    {{option}}
                  </label>
                </div>
              </div>
            </div>
          </template>
          <div class="chart-area">
            <FinegrainedChart
            style="height:100%"
            ref="fineChart1"
            v-bind:lengthSerial="this.fineValueLength"
            v-bind:series_data="this.FineValue">
            </FinegrainedChart>
          </div>
        </card>
      </div>
      <div class="col-lg-2" :class="{'text-right': isRTL}">
        <card type="chart">
          <template slot="header">
            <div class="row">
              <div class="col-sm-6">
                <h2 class="card-category">Device 1</h2>
                <h3 class="card-title">频域特征</h3>
              </div>
              <div class="col-sm-6">
                 <h2 class="card-category">Results</h2>
                  <div class="btn-group btn-group-toggle"
                     :class="isRTL ? 'float-left' : 'float-right'"
                     data-toggle="buttons">
                  <label v-for="(option, index) in commFeatureCategories"
                         :key="option"
                         class="btn btn-sm btn-primary btn-simple"
                         :class="{active: bigLineChart.activeIndex === index}"
                         :id="index">
                    <input type="radio"
                           @click="showFFT(option, index)"
                           name="options" autocomplete="off"
                           :checked="bigLineChart.activeIndex === index">
                    {{option}}
                  </label>
                </div>
              </div>
            </div>
          </template>
          <div class="chart-area">
            <!-- Device 1 FFT展示 -->
            <HeatmapFFT
              style = "height:100%"
              ref="HeatmapFFT1"
              v-bind:xData="this.time"
              v-bind:yData="this.freq"
              v-bind:data="this.mag"
            >
            </HeatmapFFT>
          </div>
        </card>
      </div>
      <div class="col-lg-6" :class="{'text-right': isRTL}">
        <card type="chart">
          <template slot="header">
            <div class="row">
              <div class="col-sm-6">
                <h2 class="card-category">离线行为分析</h2>
                <h3 class="card-title">频域特征分析</h3>
              </div>
            </div>
          </template>
          <div class="chart-area">
            <!-- 展示频域特诊图片 -->
            <div class="chart-area">
              <img src="./img/1.png" 
                  height=85%
                  width=14%>
              <img src="./img/2.png" 
                  height=85%
                  width=14%>
              <img src="./img/3.png" 
                  height=85%
                  width=14%>
              <img src="./img/4.png" 
                  height=85%
                  width=14%>
              <img src="./img/5.png" 
                  height=85%
                  width=14%>
              <img src="./img/6.png" 
                  height=85%
                  width=14%>
              <img src="./img/3.png" 
                  height=85%
                  width=14%>
            </div>
          </div>
        </card>
      </div>

    </div>
    <div class="row">
      <div class="col-lg-2" :class="{'text-right': isRTL}">
        <card type="chart">
          <template slot="header">
            <div class="row">
              <div class="col-sm-6">
                <h2 class="card-category">Device 2</h2>
                <h3 class="card-title">统计学特征</h3>
              </div>
              <div class="col-sm-6">
                 <h2 class="card-category">Results</h2>
                  <div class="btn-group btn-group-toggle"
                     :class="isRTL ? 'float-left' : 'float-right'"
                     data-toggle="buttons">
                  <label v-for="(option, index) in commFeatureCategories"
                         :key="option"
                         class="btn btn-sm btn-primary btn-simple"
                         :class="{active: bigLineChart.activeIndex === index}"
                         :id="index">
                    <input type="radio"
                           @click="showDataDevice(option,index)"
                           name="options" autocomplete="off"
                           :checked="bigLineChart.activeIndex === index">
                    {{option}}
                  </label>
                </div>
              </div>
            </div>
          </template>
            <div class="chart-area">
              <StatChart  
                style="height:100%"
                ref="statChart2"
                v-bind:series_data="this.StatValue2">
              </StatChart>
            </div>  
        </card>
      </div>
      <div class="col-lg-2" :class="{'text-right': isRTL}">
        <card type="chart">
          <template slot="header">
            <div class="row">
              <div class="col-sm-6">
                <h2 class="card-category">Device 2</h2>
                <h3 class="card-title">细粒度特征</h3>
              </div>
              <div class="col-sm-6">
                 <h2 class="card-category">Results</h2>
                  <div class="btn-group btn-group-toggle"
                     :class="isRTL ? 'float-left' : 'float-right'"
                     data-toggle="buttons">
                  <label v-for="(option, index) in commFeatureCategories"
                         :key="option"
                         class="btn btn-sm btn-primary btn-simple"
                         :class="{active: bigLineChart.activeIndex === index}"
                         :id="index">
                    <input type="radio"
                           @click="showFineTimeData1(option, index)"
                           name="options" autocomplete="off"
                           :checked="bigLineChart.activeIndex === index">
                    {{option}}
                  </label>
                </div>
              </div>
            </div>
          </template>
          <div class="chart-area">
            <FinegrainedChart
            style="height:100%"
            ref="fineChart1"
            v-bind:lengthSerial="this.fineValueLength2"
            v-bind:series_data="this.FineValue2">
            </FinegrainedChart>
            <!-- 设备2细粒度时序特征 -->
          </div>
        </card>
      </div>
      <div class="col-lg-2" :class="{'text-right': isRTL}">
        <card type="chart">
          <template slot="header">
            <div class="row">
              <div class="col-sm-6">
                <h2 class="card-category">Device 2</h2>
                <h3 class="card-title">频域特征</h3>
              </div>
              <div class="col-sm-6">
                 <h2 class="card-category">Results</h2>
                  <div class="btn-group btn-group-toggle"
                     :class="isRTL ? 'float-left' : 'float-right'"
                     data-toggle="buttons">
                  <label v-for="(option, index) in commFeatureCategories"
                         :key="option"
                         class="btn btn-sm btn-primary btn-simple"
                         :class="{active: bigLineChart.activeIndex === index}"
                         :id="index">
                    <input type="radio"
                           @click="showFFT2(option,index)"
                           name="options" autocomplete="off"
                           :checked="bigLineChart.activeIndex === index">
                    {{option}}
                  </label>
                </div>
              </div>
            </div>
          </template>
          <div class="chart-area">
            <FFTChart 
            style="height: 100%"
            ref="FFTChart2"
            v-bind:series_data="this.fftSeria2"
            >
            </FFTChart>
          </div>
        </card>
      </div>
      <div class="col-lg-6" :class="{'text-right': isRTL}">
        <card type="chart">
          <template slot="header">
            <div class="row">
              <div class="col-sm-6">
                <h2 class="card-category">离线数据分析</h2>
                <h3 class="card-title">预测结果展示</h3>
              </div>
            </div>
          </template>
          <div class="chart-area">
            <img src='./img/r4.png' 
            height=90%
            width=40%>
            <img src='./img/r5.png' 
            height=90%
            width=20%>
            <img src='./img/r8.png' 
            height=90%
            width=40%>

          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
  import LineChart from '@/components/Charts/LineChart';
  import BarChart from '@/components/Charts/BarChart';
  import Echarts from '@/components/Echarts';
  import EchartCopy from '@/components/EchartCopy';
  import StatChart from '@/components/StatChart.vue';
  import FinegrainedChart from '@/components/FinegrainedChart.vue';
  import FFTChart from '@/components/FFTChart.vue';
  import MulChart from '@/components/MulChart.vue';
  import UpsamChart from '@/components/UpsamChart.vue';
  import DynamicChart from '@/components/DynamicChart.vue';
  import HeatmapFFT from '@/components/HeatmapFFT.vue';
  // import ResPic from '@/components/ResPic.vue';
  import * as chartConfigs from '@/components/Charts/config';
  import TaskList from './Dashboard/TaskList';
  import UserTable from './Dashboard/UserTable';
  import config from '@/config';

  export default {
    name: 'Dashboard',
    components: {
      LineChart,
      BarChart,
      TaskList,
      UserTable,
      Echarts,
      StatChart,
      FinegrainedChart,
      FFTChart,
      MulChart,
      UpsamChart,
      EchartCopy,
      DynamicChart,
      HeatmapFFT
      // ResPic
    },
    props: {
    },
    data() {
      return {
        echart1Serial: [],
        StatValue:[0, 0, 0, 0],
        StatValue2:[0, 0, 0, 0],
        FineValue:[],
        FineValue2:[],
        fftSerial:[],
        fftSeria2:[],
        freq:[],
        time:[],
        mag:[],
        magmax:{
          default:0
        },
        magmin:{
          default:0
        },
        fineValueLength:{
          default:4
        },
        fineValueLength2:{
          default:4
        },
        mainChartStartFlag: {
          type: Boolean,
          default: false
        },
        mainChartStartFlag2:{
          type: Boolean,
          default: false
        },
        bigLineChart: {
          activeIndex: 0,
          chartData: null,
          extraOptions: chartConfigs.purpleChartOptions,
          gradientColors: config.colors.primaryGradient,
          gradientStops: [1, 0.4, 0],
          categories: []
        },
        bigLineChart1: {
          activeIndex: 0,
          chartData: null,
          extraOptions: chartConfigs.purpleChartOptions,
          gradientColors: config.colors.primaryGradient,
          gradientStops: [1, 0.4, 0],
          categories: []
        },
      }
    },
    computed: {
      enableRTL() {
        return this.$route.query.enableRTL;
      },
      isRTL() {
        return this.$rtl.isRTL;
      },
      bigLineChartCategories() {
        return this.$t('dashboard.chartCategories');
      },
      commFeatureCategories(){
        return this.$t('dashboard.commFeatureCategories')
      }
    },
    methods: {
      mainRSSIControl(option,index){
        if(index==0)
        {
          this. mainChartStartFlag =false;
        }
        else
        {
          this. mainChartStartFlag =true;
        }
        this.bigLineChart.activeIndex = index;
      },
      mainRSSIControl2(option,index){
        if(index==0)
        {
          this.mainChartStartFlag2 =false;
        }
        else
        {
          this.mainChartStartFlag2 =true;
        }
        this.bigLineChart.activeIndex = index;
      },

      //与服务器交互
      doPost(url,data){
        let datares=[];
        var dataRet=[];
        let dataform = new FormData();
        dataform.append('code',data);
        dataform.append('name','fft1');
        this.$http.
          post(url,dataform)
            .then(response=>{
              datares=response.data;
              for(let i=0; i<datares.data.length; i++){
                let data = parseFloat(datares.data[i]);
                dataRet.push(data);
              }
            })
            .catch(function(error){
          })
          console.log('dataRet Value');
          console.log(dataRet);
          return dataRet;
      },

      //与服务器交互获取多为数组
      doPostArray(url,data){
        let datares=[];
        var datatest=[];
        var dataRetfreq=[];
        var dataRettime=[];
        var vector=[];
        var dataRetmag=[];
        let dataform = new FormData();
        dataform.append('code',data);
        dataform.append('name','fft1');
      //   this.$http.
      //     post(url,dataform)
      //       .then(response=>{
      //         datares=response.data;
      //         datatest=datares.mag;
      //         for(let i=0; i<datares.freq.length; i++){
      //           let freq = parseFloat(datares.freq[i]);
      //           dataRetfreq.push(freq); 
      //         }
      //         for(let i=0; i<datares.time.length;i++){
      //           let time = parseFloat(datares.time[i]);
      //           dataRettime.push(time);
      //         }
      //         for(let i=0; i<datares.mag.length;i++){
      //           let mag = parseFloat(datares.mag[i]);
      //           dataRetmag.push(mag);
      //         }
      //       })
      //       .catch(function(error){
      //     })
      //     console.log('http');
      //     console.log(dataRetmag);
      //     return {
      //       freq:dataRetfreq,
      //       time:dataRettime,
      //       mag: dataRetmag
      //     }
      // },
        this.$http.
          post(url,dataform)
            .then(response=>{
              datares=response.data;
              //console.log(datares);
              //console.log(datares.freq);
              //console.log(datares.time);
              //let resp_mag=datares.mag;
              this.freq=datares.freq;
              this.time= datares.time;
              this.magmax = datares.magmax;
              this.magmin = datares.magmin;
              console.log('dataRetMag:');
              
              for (var i = 0; i < datares.mag.length; i++) {
                  for (var j = 0; j < datares.mag[i].length; j++) {
                      this.mag.push([i, j, datares.mag[i][j]]);
                  }
                  // xData.push(i);
              }
              console.log(this.mag);
              this.$refs.HeatmapFFT1.updateEchart(this.freq,this.time,this.mag, this.magmax, this.magmin);
            })
            .catch(function(error){
          })
          //console.log("test1");
      },
//展示设备1的统计学特征
      showData(option,index){
        var url="http://127.0.0.1:8000/users/parameters";
        var data=this.$refs.mainRSSIChart1.store_data;
        console.log(data);
        this.StatValue = this.doPost(url,data);
        console.log(this.StatValue)
        this.$refs.statChart1.myEcharts();
      },
//展示设备2的统计学特征
      showDataDevice(option,index){
        var url="http://127.0.0.1:8000/users/parameters";
        var data=this.$refs.mainRSSIChart2.store_data;
        console.log(data);
        this.StatValue2 = this.doPost(url,data);
        this.$refs.statChart2.myEcharts();
      },
//显示设备1的时序细粒度特征
      showFineTimeData(option,index){
        var url="http://127.0.0.1:8000/users/rtfinedata";
        var data=this.$refs.mainRSSIChart1.store_data;
        this.FineValue = this.doPost(url,data);
        this.fineValueLength=this.FineValue.length;
        this.$refs.fineChart1.myEcharts();
        // this.FineValue=this.fineGrainedPower(this.$refs.mainRSSIChart1.store_data);
        // this.fineValueLength=this.FineValue.length;
      },
//显示设备2的时序细粒度特征
      showFineTimeData1(option, index){
        var url="http://127.0.0.1:8000/users/rtfinedata";
        var data=this.$refs.mainRSSIChart2.store_data;
        this.FineValue2 = this.doPost(url,data);
        this.fineValueLength2=this.FineValue.length;
        this.$refs.fineChart2.myEcharts();
      },

//展示设备1的FFT
      showFFT(option, index){
        //STFT DATA 
      var url="http://127.0.0.1:8000/users/fftonline";
      var data=this.$refs.mainRSSIChart1.store_data;  
      //var obj = this.doPostArray(url,data);
      this.doPostArray(url,data);
      //this.freq=obj.freq;
      //this.time=obj.time;
      // for(let i=0;i<obj.freq.length;i++){
      //   for(let j=0;j<obj.time.length; j++){
      //     this.mag[i,j]=obj.mag[i*obj.time.length+j];
      //   }
      // }

      console.log('hello SHOWfft');
      console.log(this.freq);
      console.log(this.time);
      console.log(this.mag);
        //简单FFT
        // var url="http://127.0.0.1:8000/users/device1";
        // var data=this.$refs.mainRSSIChart1.store_data;
        // this.fftSerial = this.doPost(url,data);
        // console.log(this.fftSerial)
      },
//展示设备2的FFT
      // updateChartFFT(data)
      // {
      // },
//展示设备2的FFT
      showFFT2(option, index){
        var url="http://127.0.0.1:8000/users/device1";
        var data=this.$refs.mainRSSIChart2.store_data;
        this.fftSeria2 = this.doPost(url,data);
        console.log(this.fftSeria2)
      },
    },
    mounted() {
      this.i18n = this.$i18n;
      if (this.enableRTL) {
        this.i18n.locale = 'ar';
        this.$rtl.enableRTL();
      }
      //this.initBigChart(0);
    },
    beforeDestroy() {
      console.log("page destroyed")
      if (this.$rtl.isRTL) {
        this.i18n.locale = 'en';
        this.$rtl.disableRTL();
      }
    }
  };
</script>
<style>
</style>
