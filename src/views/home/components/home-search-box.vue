<template>
    <div class="flex justify-between items-center h-[38px] px-[20px] bottom-gray-line">
        <div class=" text-[15px] text-[#333]" @click="cityClick">{{ currentCity.cityName }}</div>
        <div class="flex items-center">
            <span class=" text-[12px] text-[#666]">我的位置</span>
            <van-icon name="location-o" class="w-[20px] h-[20px] ml-[9px] text-primaryColor" />
        </div>
    </div>
    <div class="flex justify-between py-[10px] items-center bottom-gray-line" @click="showCalendar = true">
        <div class="ml-[20px]">
            <div class="text-[14px] text-[#999]">入住</div>
            <div>{{ startDate }}</div>
        </div>
        <div class="text-[14px] text-[#999]">共{{ stayCount }}晚</div>
        <div class="mr-[40px]">
            <div class="text-[14px] text-[#999]">离店</div>
            <div>{{ endDate }}</div>
        </div>
    </div>
    <van-calendar v-model:show="showCalendar" type="range" color="#ff9854" :round="false" :show-confirm="false"
        @confirm="onConfirm" />
    <!-- 价格/人数选择 -->
    <div class="flex justify-between py-[10px] bottom-gray-line">
        <div class="ml-[20px] text-[#999]">价格不限</div>
        <div class="mr-[40px] text-[#999]">人数不限</div>
    </div>
    <!-- 关键字 -->
    <div class="ml-[20px] py-[10px] text-[#999]">关键字/位置/民宿名</div>

    <!-- 热门建议 -->
    <div class="flex flex-wrap mx-[20px]">
        <template v-for="(item, index) in hotSuggests" :key="index">
            <div class="br-[14px] m-[4px] text-[12px] px-[2px] py-[4px] leading-[12px]"
                :style="{ color: item.tagText.color, background: item.tagText.background.color }">
                {{ item.tagText.text }}
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useCityStore from '@/store/modules/city'
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { formatMonthDay, getDiffDays } from '@/utils/format_date'
import useHomeStore from '@/store/modules/home';

const router = useRouter()
// 位置/城市
const cityClick = () => {
    router.push("/city")
}
const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)

const nowDate = new Date()
const newDate = new Date()
newDate.setDate(nowDate.getDate() + 1)
const startDate = ref(formatMonthDay(nowDate))
const endDate = ref(formatMonthDay(newDate))
const stayCount = ref(getDiffDays(nowDate, newDate))

const showCalendar = ref(false)

const onConfirm = (value) => {
    // 1.设置日期
    const selectStartDate = value[0]
    const selectEndDate = value[1]
    startDate.value = formatMonthDay(selectStartDate)
    endDate.value = formatMonthDay(selectEndDate)
    stayCount.value = getDiffDays(selectStartDate, selectEndDate)
    // 2.隐藏日历
    showCalendar.value = false
}

const homeStore = useHomeStore()
const { hotSuggests } = storeToRefs(homeStore)
</script>

<style scoped></style>