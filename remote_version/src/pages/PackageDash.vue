<template>
  <div>
    <div class="row">
      <div class="col-6">
        <card type="chart">
          <template slot="header">
            <div class="row">
              <div class="col-sm-6" :class="isRTL ? 'text-right' : 'text-left'">
                <h5 class="card-category">不同包类型监测</h5>
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
              <Echarts ref="mainRSSIChart"
                style="height:100%"
                titleText="DIS(85)"
                dataUrl="ws://localhost:8000/wsapi/api/device1/"
                v-bind:startFlag="mainChartStartFlag"
              >
              </Echarts>
            </div>
        </card>
      </div>
      <!-- <div class="col-lg-3" :class="{'text-right': isRTL}">
      </div> -->
      <div class="col-lg-6" :class="{'text-right': isRTL}">
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
    </div>
    <div class="row">
      <div class="col-6">
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
                           @click="mainRSSIControl1(option,index)"
                           name="options" autocomplete="off"
                           :checked="bigLineChart1.activeIndex === index">
                    {{option}}
                  </label>
                </div>
              </div>
            </div>
          </template>
            <div class="chart-area">
              <EchartCopy ref="mainRSSIChart1"
                style="height:100%"
                titleText="DIO(123)"
                dataUrl="ws://localhost:8000/wsapi/api/device2/"
                v-bind:startFlag="mainChartStartFlag1"
              >
              </EchartCopy>
            </div>
        </card>
      </div>
      <!-- <div class="col-lg-3" :class="{'text-right': isRTL}">
      </div> -->
      <div class="col-lg-6" :class="{'text-right': isRTL}">
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
                           @click="showFineTimeData1(option,index)"
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
            ref="fineChart2"
            v-bind:lengthSerial="this.fineValueLength2"
            v-bind:series_data="this.FineValue2">
            </FinegrainedChart>
          </div>
        </card>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
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
                         :class="{active: bigLineChart2.activeIndex === index}"
                         :id="index">
                    <input type="radio"
                           @click="mainRSSIControl2(option,index)"
                           name="options" autocomplete="off"
                           :checked="bigLineChart2.activeIndex === index">
                    {{option}}
                  </label>
                </div>
              </div>
            </div>
          </template>
            <div class="chart-area">
              <EchartCopy ref="mainRSSIChart2"
                style="height:100%"
                titleText="DAO(97)"
                dataUrl="ws://localhost:8000/wsapi/api/device3/"
                v-bind:startFlag="mainChartStartFlag2"
              >
              </EchartCopy>
            </div>
        </card>
      </div>
      <!-- <div class="col-lg-3" :class="{'text-right': isRTL}">
      </div> -->
      <div class="col-lg-6" :class="{'text-right': isRTL}">
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
                           @click="showFineTimeData2(option,index)"
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
            ref="fineChart3"
            v-bind:series_data="this.FineValue3">
            </FinegrainedChart>
          </div>
        </card>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
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
                         :class="{active: bigLineChart3.activeIndex === index}"
                         :id="index">
                    <input type="radio"
                           @click="mainRSSIControl3(option,index)"
                           name="options" autocomplete="off"
                           :checked="bigLineChart3.activeIndex === index">
                    {{option}}
                  </label>
                </div>
              </div>
            </div>
          </template>
            <div class="chart-area">
              <EchartCopy ref="mainRSSIChart3"
                style="height:100%"
                titleText="NS/NA(87)"
                dataUrl="ws://localhost:8000/wsapi/api/device4/"
                v-bind:startFlag="mainChartStartFlag3"
              >
              </EchartCopy>
            </div>
        </card>
      </div>
       <!-- <div class="col-lg-3" :class="{'text-right': isRTL}">
       </div> -->
      <div class="col-lg-6" :class="{'text-right': isRTL}">
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
                           @click="showFineTimeData3(option,index)"
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
            ref="fineChart4"
            v-bind:series_data="this.FineValue4">
            </FinegrainedChart>
          </div>
        </card>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
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
                         :class="{active: bigLineChart4.activeIndex === index}"
                         :id="index">
                    <input type="radio"
                           @click="mainRSSIControl4(option,index)"
                           name="options" autocomplete="off"
                           :checked="bigLineChart4.activeIndex === index">
                    {{option}}
                  </label>
                </div>
              </div>
            </div>
          </template>
            <div class="chart-area">
              <EchartCopy ref="mainRSSIChart4"
                style="height:100%"
                titleText="PING(101+x)"
                dataUrl="ws://localhost:8000/wsapi/api/device5/"
                v-bind:startFlag="mainChartStartFlag4"
              >
              </EchartCopy>
            </div>
        </card>
      </div>
      <!-- <div class="col-lg-3" :class="{'text-right': isRTL}">
      </div> -->
      <div class="col-lg-6" :class="{'text-right': isRTL}">
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
                           @click="showFineTimeData4(option,index)"
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
            ref="fineChart5"
            v-bind:series_data="this.FineValue5">
            </FinegrainedChart>
          </div>
        </card>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
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
                         :class="{active: bigLineChart5.activeIndex === index}"
                         :id="index">
                    <input type="radio"
                           @click="mainRSSIControl5(option,index)"
                           name="options" autocomplete="off"
                           :checked="bigLineChart5.activeIndex === index">
                    {{option}}
                  </label>
                </div>
              </div>
            </div>
          </template>
            <div class="chart-area">
              <EchartCopy ref="mainRSSIChart5"
                style="height:100%"
                titleText="UDP Unicast(107+x)"
                dataUrl="ws://localhost:8000/wsapi/api/device6/"
                v-bind:startFlag="mainChartStartFlag5"
              >
              </EchartCopy>
            </div>
        </card>
      </div>
      <!-- <div class="col-lg-3" :class="{'text-right': isRTL}">
      </div> -->
      <div class="col-lg-6" :class="{'text-right': isRTL}">
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
                           @click="showFineTimeData5(option,index)"
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
            ref="fineChart6"
            v-bind:series_data="this.FineValue6">
            </FinegrainedChart>
          </div>
        </card>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
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
                         :class="{active: bigLineChart6.activeIndex === index}"
                         :id="index">
                    <input type="radio"
                           @click="mainRSSIControl6(option,index)"
                           name="options" autocomplete="off"
                           :checked="bigLineChart6.activeIndex === index">
                    {{option}}
                  </label>
                </div>
              </div>
            </div>
          </template>
            <div class="chart-area">
              <EchartCopy ref="mainRSSIChart6"
                style="height:100%"
                titleText="UDP Multicast(85+x)"
                dataUrl="ws://localhost:8000/wsapi/api/device7/"
                v-bind:startFlag="mainChartStartFlag6"
              >
              </EchartCopy>
            </div>
        </card>
      </div>
      <!-- <div class="col-lg-3" :class="{'text-right': isRTL}">
      </div> -->
      <div class="col-lg-6" :class="{'text-right': isRTL}">
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
                           @click="showFineTimeData6(option,index)"
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
            ref="fineChart5"
            v-bind:series_data="this.FineValue7">
            </FinegrainedChart>
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
  import CardEchart from '@/components/CardEchart';
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
      HeatmapFFT,
      CardEchart,
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
        FineValue3:[],
        FineValue4:[],
        FineValue5:[],
        FineValue6:[],
        FineValue7:[],
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
        mainChartStartFlag1:{
          type: Boolean,
          default: false
        },
        mainChartStartFlag2:{
          type: Boolean,
          default: false
        },
        mainChartStartFlag3:{
          type: Boolean,
          default: false
        },
        mainChartStartFlag4:{
          type: Boolean,
          default: false
        },
        mainChartStartFlag5:{
          type: Boolean,
          default: false
        },
        mainChartStartFlag6:{
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
        bigLineChart2: {
          activeIndex: 0,
          chartData: null,
          extraOptions: chartConfigs.purpleChartOptions,
          gradientColors: config.colors.primaryGradient,
          gradientStops: [1, 0.4, 0],
          categories: []
        },
        bigLineChart3: {
          activeIndex: 0,
          chartData: null,
          extraOptions: chartConfigs.purpleChartOptions,
          gradientColors: config.colors.primaryGradient,
          gradientStops: [1, 0.4, 0],
          categories: []
        },
        bigLineChart4: {
          activeIndex: 0,
          chartData: null,
          extraOptions: chartConfigs.purpleChartOptions,
          gradientColors: config.colors.primaryGradient,
          gradientStops: [1, 0.4, 0],
          categories: []
        },
        bigLineChart5: {
          activeIndex: 0,
          chartData: null,
          extraOptions: chartConfigs.purpleChartOptions,
          gradientColors: config.colors.primaryGradient,
          gradientStops: [1, 0.4, 0],
          categories: []
        },
        bigLineChart6: {
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
      mainRSSIControl1(option,index){
        if(index==0)
        {
          this.mainChartStartFlag1 =false;
        }
        else
        {
          this.mainChartStartFlag1 =true;
        }
        this.bigLineChart1.activeIndex = index;
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
        this.bigLineChart2.activeIndex = index;
      },
      mainRSSIControl3(option,index){
        if(index==0)
        {
          this.mainChartStartFlag3 =false;
        }
        else
        {
          this.mainChartStartFlag3 =true;
        }
        this.bigLineChart3.activeIndex = index;
      },
      mainRSSIControl4(option,index){
        if(index==0)
        {
          this.mainChartStartFlag4 =false;
        }
        else
        {
          this.mainChartStartFlag4 =true;
        }
        this.bigLineChart4.activeIndex = index;
      },
      mainRSSIControl5(option,index){
        if(index==0)
        {
          this.mainChartStartFlag5 =false;
        }
        else
        {
          this.mainChartStartFlag5 =true;
        }
        this.bigLineChart5.activeIndex = index;
      },
      mainRSSIControl6(option,index){
        if(index==0)
        {
          this.mainChartStartFlag6 =false;
        }
        else
        {
          this.mainChartStartFlag6 =true;
        }
        this.bigLineChart6.activeIndex = index;
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
        var dataRetfreq=[];
        var dataRettime=[];
        var dataRetmag=[];
        let dataform = new FormData();
        dataform.append('code',data);
        dataform.append('name','fft1');
        this.$http.
          post(url,dataform)
            .then(response=>{
              datares=response.data;
              this.freq=datares.freq;
              this.time=datares.time;
              this.magmax = datares.max;
              this.magmin = datares.min;
              
              // console.log('dataRetMag:');
              for (var i = 0; i < datares.mag.length; i++) {
                  for (var j = 0; j < datares.mag[i].length; j++) {
                      this.mag.push([i, j, datares.mag[i][j]]);
                  }
              }
              this.$refs.HeatmapFFT1.updateEchart(this.freq,this.time,this.mag, this.magmax, this.magmin);
            })
            .catch(function(error){
          })
          //console.log("test1");
      },

      doPostArray1(url,data){
        let datares=[];
        var dataRetfreq=[];
        var dataRettime=[];
        var dataRetmag=[];
        let dataform = new FormData();
        dataform.append('code',data);
        dataform.append('name','fft1');
        this.$http.
          post(url,dataform)
            .then(response=>{
              datares=response.data;
              this.freq=datares.freq;
              this.time=datares.time;
              this.magmax = datares.max;
              this.magmin = datares.min;

              for (var i = 0; i < datares.mag.length; i++) {
                  for (var j = 0; j < datares.mag[i].length; j++) {
                      this.mag.push([i, j, datares.mag[i][j]]);
                  }
              }
              this.$refs.HeatmapFFT2.updateEchart(this.freq,this.time,this.mag, this.magmax, this.magmin);
            })
            .catch(function(error){
          })
          //console.log("test1");
      },

//显示各类报文的信息截取信息1
      showshortDIS(option,index){

      },
      showshortDIO(option,index){

      },
      showshortDAO(option,index){

      },
      showshortNSNA(option,index){

      },
      showshortPing(option,index){

      },
      showshortMultiCast(option,index){

      },
      showshortDISUnicast(option,index){

      },

//显示设备1的时序细粒度特征
      showFineTimeData(option,index){
        var url="http://127.0.0.1:8000/users/rtfinedata";
        var data=this.$refs.mainRSSIChart.store_data;
        this.FineValue = this.doPost(url,data);
        this.fineValueLength=this.FineValue.length;
        this.$refs.fineChart1.myEcharts();
        // this.FineValue=this.fineGrainedPower(this.$refs.mainRSSIChart1.store_data);
        // this.fineValueLength=this.FineValue.length;
      },
      showFineTimeData1(option, index){
        var url="http://127.0.0.1:8000/users/rtfinedata";
        var data=this.$refs.mainRSSIChart1.store_data;
        this.FineValue2 = this.doPost(url,data);
        this.fineValueLength2=this.FineValue.length;
        this.$refs.fineChart2.myEcharts();
      },
      showFineTimeData2(option, index){
        var url="http://127.0.0.1:8000/users/rtfinedata";
        var data=this.$refs.mainRSSIChart2.store_data;
        this.FineValue3 = this.doPost(url,data);
        this.$refs.fineChart3.myEcharts();
      },
      showFineTimeData3(option, index){
        var url="http://127.0.0.1:8000/users/rtfinedata";
        var data=this.$refs.mainRSSIChart3.store_data;
        this.FineValue4 = this.doPost(url,data);
        this.$refs.fineChart4.myEcharts();
      },
      showFineTimeData4(option, index){
        var url="http://127.0.0.1:8000/users/rtfinedata";
        var data=this.$refs.mainRSSIChart4.store_data;
        this.FineValue5 = this.doPost(url,data);
        this.$refs.fineChart5.myEcharts();
      },
      showFineTimeData5(option, index){
        var url="http://127.0.0.1:8000/users/rtfinedata";
        var data=this.$refs.mainRSSIChart5.store_data;
        this.FineValue6 = this.doPost(url,data);
        this.$refs.fineChart6.myEcharts();
      },
      showFineTimeData6(option, index){
        var url="http://127.0.0.1:8000/users/rtfinedata";
        var data=this.$refs.mainRSSIChart6.store_data;
        this.FineValue7 = this.doPost(url,data);
        this.$refs.fineChart7.myEcharts();
      },


//展示设备1的FFT
      showFFT(option, index){
        var url="http://127.0.0.1:8000/users/fftonline";
        var data=this.$refs.mainRSSIChart1.store_data;  
        this.doPostArray(url,data);
        
      },

//展示设备2的FFT
      showFFT2(option, index){
        var url="http://127.0.0.1:8000/users/fftonline";
        var data=this.$refs.mainRSSIChart2.store_data;  
        this.doPostArray1(url,data);
        // this.fftSeria2 = this.doPost(url,data);
        // console.log(this.fftSeria2)
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
