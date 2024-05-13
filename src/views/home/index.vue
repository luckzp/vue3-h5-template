<script setup lang="ts">
import HomeNavBar from './components/home-nav-bar.vue';
import HomeSearchBox from './components/home-search-box.vue';
import useHomeStore from '@/store/modules/home';

const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
</script>

<template>
  <div>
    <HomeNavBar />
    <div class="w-full">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <HomeSearchBox />
  </div>
</template>
