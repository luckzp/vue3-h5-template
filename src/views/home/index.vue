<script setup lang="ts">
import HomeNavBar from './components/home-nav-bar.vue';
import HomeSearchBox from './components/home-search-box.vue';
import HomeCategory from './components/home-category.vue'
import HomeContent from './components/home-content.vue'
import useHomeStore from '@/store/modules/home';

const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesData()
homeStore.fetchHouselistData()

</script>

<template>
  <div>
    <HomeNavBar />
    <div class="w-full">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <HomeSearchBox />
    <HomeCategory />
    <HomeContent />
  </div>
</template>
