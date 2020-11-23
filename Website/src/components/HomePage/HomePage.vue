<template>
  <div>
    <SearchOnTopPage ref="SearchOnTopPage" />
    <NavBar ref="NavBar" />
    <Banners ref="Banners" />
    <MenWomanSmart ref="MenWomanSmart" />
    <WomenWatches ref="WomenWatches" />
    <DealOfTheWeek ref="DealOfTheWeek" />
    <MenWatches ref="MenWatches" />
    <!-- <TopSaleTabs ref="TopSaleTabs" /> -->
    <!-- <Contact ref="Contact" /> -->
    <Footer ref="Footer" />
  </div>
</template>

<script>
import SearchOnTopPage from "./SearchOnTopPage.vue";
import NavBar from "./NavBar.vue";
import MenWomanSmart from "./MenWomanSmart.vue";
import WomenWatches from "./WomenWatches.vue";
import DealOfTheWeek from "./DealOfTheWeek.vue";
import MenWatches from "./MenWatches.vue";
import Banners from "./Banners.vue";
// import TopSaleTabs from './TopSaleTabs.vue'
// import Contact from './Contact.vue'
import Footer from "./Footer.vue";

export default {
  name: "HomePage",
  components: {
    SearchOnTopPage,
    NavBar,
    MenWomanSmart,
    WomenWatches,
    DealOfTheWeek,
    MenWatches,
    Banners,
    // TopSaleTabs,
    // Contact,
    Footer,
  },
};
</script>