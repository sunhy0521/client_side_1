<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/gestureboard" :name="$t('sidebar.gestureboard')" icon="tim-icons icon-chart-pie-36"/>
        <sidebar-link to="/packageboard" :name="$t('sidebar.packageboard')" icon="tim-icons icon-chart-pie-36"/>
        <sidebar-link to="/dashboard" :name="$t('sidebar.dashboard')" icon="tim-icons icon-chart-pie-36"/>
        <sidebar-link to="/sensorboard" :name="$t('sidebar.sensorboard')" icon="tim-icons icon-chart-pie-36"/>
        
        <!-- <sidebar-link to="/groupintro" :name="$t('sidebar.userProfile')" icon="tim-icons icon-single-02"/>
        <sidebar-link to="/contact" :name="$t('sidebar.contactList')" icon="tim-icons icon-world"/>  -->
        <!-- <sidebar-link to="/typography" :name="$t('sidebar.typography')" icon="tim-icons icon-align-center"/> --> 
        <!-- <sidebar-link to="/dashboard?enableRTL=true" :name="$t('sidebar.rtlSupport')" icon="tim-icons icon-world"/> -->
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
