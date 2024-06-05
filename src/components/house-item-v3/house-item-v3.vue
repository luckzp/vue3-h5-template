<template>
    <div class="w-[50%] ">
        <div class="m-[5px] rounded-md bg-white">
            <div>
                <img :src="itemData.image.url" class="w-[100%]" alt="">
            </div>
            <div class=" text-gray py-[8px] px-[10px]">
                <div class="flex items-center">
                    <img src="@/assets/img/home/location.png" class="w-[12px] h-[12px]" alt="">
                    <span>{{ itemData.location }}</span>
                </div>
                <div class="my-[5px] line-clamp-2">{{ itemData.houseName }}</div>
                <div class="text-[12px]">{{ itemData.summaryText }}</div>
                <div class="flex items-start">
                    <div class="text-[14px] text-primaryColor"> ¥ {{ itemData.finalPrice }}</div>
                    <div class="text-[12px] mx-[3px] line-through"> ¥ {{ itemData.productPrice }}</div>
                    <div class="text-[12px] px-[6px] rounded-[8px] bg-gradient-to-t from-red-600 to-pink-200"
                        v-if="itemData.priceTipBadge">
                        {{ itemData.priceTipBadge.text }}
                    </div>
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