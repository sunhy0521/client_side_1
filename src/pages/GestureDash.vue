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
                         :class="{active: bigLineChart.activeIndex === index}"
                         :id="index">
                    <input type="radio"
                           @click="mainRSSIControl(option,index)"
                           name="options" autocomplete="off"
                           :checked="bigLineChart.activeIndex === index">
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
                <h2 class="card-title">{{$t('dashboard.performance')}}</h2>
              </div>
            </div>
          </template>
          <div class="chart-area">
            <MulChart ref="mulchart1"
                style="height:100%">
            </MulChart>
          </div>
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
            <UpsamChart style="height:100%">
            </UpsamChart>
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
            <FFTChart 
            style="height: 100%"
            ref="FFTChart1"
            v-bind:series_data="this.fftSerial"
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
          // allData: [
          //   [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
          //   [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120],
          //   [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130]
          // ],
          activeIndex: 0,
          chartData: null,
          extraOptions: chartConfigs.purpleChartOptions,
          gradientColors: config.colors.primaryGradient,
          gradientStops: [1, 0.4, 0],
          categories: []
        },
        purpleLineChart: {
          extraOptions: chartConfigs.purpleChartOptions,
          chartData: {
            labels: ['平均值', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
            datasets: [{
              label: "Data",
              fill: true,
              borderColor: config.colors.primary,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.primary,
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: config.colors.primary,
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [this.maxValue, 100, 70, 80, 120, 80],
            }]
          },
          gradientColors: config.colors.primaryGradient,
          gradientStops: [1, 0.2, 0],
        },
        greenLineChart: {
          extraOptions: chartConfigs.greenChartOptions,
          chartData: {
            labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV'],
            datasets: [{
              label: "My First dataset",
              fill: true,
              borderColor: config.colors.danger,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.danger,
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: config.colors.danger,
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [this.maxValue, 27, 60, 12, 80],
            }]
          },
          gradientColors: ['rgba(66,134,121,0.15)', 'rgba(66,134,121,0.0)', 'rgba(66,134,121,0)'],
          gradientStops: [1, 0.4, 0],
        },
        blueBarChart: {
          extraOptions: chartConfigs.barChartOptions,
          chartData: {
            labels: ['USA', 'GER', 'AUS', 'UK', 'RO', 'BR'],
            datasets: [{
              label: "Countries",
              fill: true,
              borderColor: config.colors.info,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              data: [53, 20, 10, 80, 100, 45],
            }]
          },
          gradientColors: config.colors.primaryGradient,
          gradientStops: [1, 0.4, 0],
        }
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
//展示设备1的统计学特征
      showData(option,index){
        console.log(this.maxSerial(this.$refs.mainRSSIChart1.store_data));//1
        console.log(this.minSerial(this.$refs.mainRSSIChart1.store_data));//2
        console.log(this.averSerial(this.$refs.mainRSSIChart1.store_data));//3
        // console.log(this.sumSqeErro(this.$refs.mainRSSIChart1.store_data));//4
        // console.log(this.SumSquare(this.$refs.mainRSSIChart1.store_data));//5
        console.log(this.Geomean(this.$refs.mainRSSIChart1.store_data));//6
        // console.log(this.varianceInfo(this.$refs.mainRSSIChart1.store_data));//7

        this.StatValue[0]=this.maxSerial(this.$refs.mainRSSIChart1.store_data);//1
        this.StatValue[1]=this.minSerial(this.$refs.mainRSSIChart1.store_data);//2
        this.StatValue[2]=this.averSerial(this.$refs.mainRSSIChart1.store_data);//3
        this.StatValue[3]=this.Geomean(this.$refs.mainRSSIChart1.store_data);//6
        this.$refs.statChart1.myEcharts();

      },
//展示设备2的统计学特征
      showDataDevice(option,index){
        console.log(this.maxSerial(this.$refs.mainRSSIChart2.store_data));//1
        console.log(this.minSerial(this.$refs.mainRSSIChart2.store_data));//2
        console.log(this.averSerial(this.$refs.mainRSSIChart2.store_data));//3
        // console.log(this.sumSqeErro(this.$refs.mainRSSIChart2.store_data));//4
        // console.log(this.SumSquare(this.$refs.mainRSSIChart2.store_data));//5
        console.log(this.Geomean(this.$refs.mainRSSIChart2.store_data));//6
        // console.log(this.fineGrainedPower(this.$refs.mainRSSIChart2.store_data));
        // console.log(this.varianceInfo(this.$refs.mainRSSIChart2.store_data));//7

        this.StatValue2[0]=this.maxSerial(this.$refs.mainRSSIChart2.store_data);//1
        this.StatValue2[1]=this.minSerial(this.$refs.mainRSSIChart2.store_data);//2
        this.StatValue2[2]=this.averSerial(this.$refs.mainRSSIChart2.store_data);//3
        this.StatValue2[3]=this.Geomean(this.$refs.mainRSSIChart2.store_data);//6
        this.$refs.statChart2.myEcharts();
      },
//显示设备1的时序细粒度特征
      showFineTimeData(option,index){
        console.log(this.fineGrainedPower(this.$refs.mainRSSIChart1.store_data));
        // console.log(this.)
        this.FineValue=this.fineGrainedPower(this.$refs.mainRSSIChart1.store_data);
        this.fineValueLength=this.FineValue.length;
        // this.$refs.mainRSSIChart1.restoreStoreData();
        // this.$refs.mainRSSIChart2.restoreStoreData();
        // console.log(this.FineValue.length)
      },
//显示设备2的时序细粒度特征
      showFineTimeData1(option, index){
        console.log(this.fineGrainedPower(this.$refs.mainRSSIChart2.store_data));
        // console.log(this.)
        this.FineValue2=this.fineGrainedPower(this.$refs.mainRSSIChart2.store_data);
        this.fineValueLength2=this.FineValue.length;

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
              // console.log(datares.data);
              // console.log(datares.data[0]+'1');
              for(let i=0; i<datares.data.length; i++){
                //temdata[i]=parseFloat(datares.data[i]);
                let data = parseFloat(datares.data[i]);
                //console.log(data);
                dataRet.push(data);
                //console.log(this.fftSerial);
                //console.log(this.fftSerial);
              }
              // console.log('hello1');
              // console.log(this.fftSerial);
              // console.log(temdata);
            })
            .catch(function(error){
          })
          return dataRet;
      },
//展示设备1的FFT
      showFFT(option, index){
        var url="http://127.0.0.1:8000/users/device1";
        var data=this.$refs.mainRSSIChart1.store_data;
        this.fftSerial = this.doPost(url,data);
        console.log(this.fftSerial)
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
      //计算序列的一些特征
      //1. 最大值
      maxSerial(erialData){
          return this.$jstat.max(erialData);
      },
      //2. 最小值
      minSerial(erialData){
          return this.$jstat.min(erialData);
      },
      //3. 平均值
      averSerial(erialData){
        return this.$jstat.mean(erialData);
      },
      //4.平方误差
      sumSqeErro(erialData){
        return this.$jstat.sumsqerr(erialData); 
      },
      //5.平方和
      SumSquare(erialData){
          return this.$jstat.sumsqrd(erialData);
      },
      //6.  几何平均值
      Geomean(erialData){
        return this.$jstat.geomean(erialData)
      },
      //7. 方差
      varianceInfo(erialData){
        return this.$jstat.variance(erialData)
      },

      fineGrainedPower(erialData){
        for(var i=0;i<erialData.length;i++){
          erialData[i] =10**(erialData[i]/10);
        }
        return erialData;
        // return erialData.length;
        // 10**(erialData/10);
      },

      // RSS_power = 10.^((training_data(:,2:y)/10));
    
      initBigChart(index, option) {
        let chartData = {
          datasets: [{
            fill: true,
            borderColor: config.colors.primary,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: config.colors.primary,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: config.colors.primary,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.bigLineChart.allData[index]
          }],
          labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        }

        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      }
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
