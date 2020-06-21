<template>
    <div>
        <div class="card-header">
            <div class="col-sm-6 text-left">
                <h5 class="card-catagory">包状态抓取</h5>
                <h2 class="card-title">RSSI 监控器</h2>
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
        <div class="card-body">
        <EchartCopy/>
        </div>
    </div>
</template>


<script>
import EchartCopy from '@/components/EchartCopy';
export default {
    name: 'CardEchart',
        components: {
        EchartCopy,
    },
    props: {
    },
    data() {
      return {
            // x_data: [ ],
            // store_data:[120, 200, 150, 80, 70, 110, 130],
            myChart: null,
            wsConnection: null
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
    methods:{
        pageResize(){
            //this.myChart = this.$echarts.init(this.$refs.chart);
            this.myChart.resize();
        },
        CardEcharts(){ 
       },
    },
    mounted() {
        this.CardEcharts();
        window.addEventListener('resize', ()=>{
            this.pageResize();
        });
    },
    created() {
    },
    watch: {
    }
}
</script>

<style>

</style>