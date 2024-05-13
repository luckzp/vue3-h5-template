<template>
    <div>
        <van-index-bar :sticky="false">
            <van-index-anchor index="热门" />
            <div class="flex flex-wrap justify-around p-[10px] pr-[25px]">
                <template v-for="(city, index) in groupData.hotCities">
                    <div class="w-[70px] h-[28px] leading-[28px] rounded-lg text-black text-[12px] text-center bg-[#fff4ec] my-[6px]"
                        @click="cityClick(city)">
                        {{ city.cityName }}
                    </div>
                </template>
            </div>
            <template v-for="(group, index) in groupData.cities" :key="index">
                <van-index-anchor :index="group.group" />
                <template v-for="(city, indey) in group.cities" :key="indey">
                    <van-cell :title="city.cityName" @click="cityClick(city)" />
                </template>
            </template>
        </van-index-bar>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import useCityStore from '@/store/modules/city'

// 定义props
const props = defineProps({
    groupData: {
        type: Object,
        default: () => ({})
    }
})
const router = useRouter()
const cityClick = (city: any) => {
    useCityStore().currentCity.cityName = city.cityName;
    router.back();
}
</script>

<style scoped></style>