<template>
    <div>
        <van-search v-model="searchValue" placeholder="城市/区域/位置" shape="round" show-action @cancel="cancelClick" />
        <van-tabs v-model:active="tabActive" color="#ff9854" line-height="3">
            <template v-for="(value, key, index) in allCities" :key="key">
                <van-tab :title="value.title" :name="key"></van-tab>
            </template>
        </van-tabs>
        <div class="h-[calc(100vh-98px)] overflow-y-auto">
            <template v-for="(value, key, index) in allCities">
                <CityGroup v-show="tabActive === key" :group-data="value" />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import useCityStore from '@/store/modules/city'
import { storeToRefs } from 'pinia';
import CityGroup from './components/city-group.vue';

const router = useRouter()
const searchValue = ref("")
const cancelClick = () => {
    router.back()
}
// tab的切换
const tabActive = ref()
// 从Store中获取数据
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)
</script>

<style scoped></style>