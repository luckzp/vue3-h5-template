<template>
    <div class="w-[50%] ">
        <div class="relative m-[5px] rounded-md bg-white">
            <div>
                <img :src="itemData.image.url" class="w-[100%]" alt="">
            </div>
            <div class="absolute bottom-0 text-white py-[8px] px-[10px]">
                <div class="text-[12px]">{{ itemData.summaryText }}</div>
                <div class="my-[5px] line-clamp-2">{{ itemData.houseName }}</div>
                <div class="flex justify-between mt-[10px]">
                    <van-rate :model-value="itemScore" color="#fff" :size="15" readonly allow-half />
                    <div class="new">¥ {{ itemData.finalPrice }}</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({
    itemData: {
        type: Object,
        default: () => ({})
    }
})
const itemScore = computed(() => {
    return Number(props.itemData.commentScore)
})
</script>

<style scoped></style>