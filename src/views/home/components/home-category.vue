<template>
    <div class="flex flex-row h-[80px] px-[10px] mt-[8px] overflow-x-auto no-scrollbar">
        <template v-for="(item, index) in categories" :key="item.id">
            <div class="w-[70px] flex  shrink-0 flex-col justify-center items-center">
                <img :src="item.pictureUrl" class="w-[32px] h-[32px]" alt="">
                <div class="text-[12px] mt-[8px]">{{ item.title }}</div>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import useHomeStore from '@/store/modules/home'
import { computed } from 'vue'

const homeStore = useHomeStore()
const categories = computed(() => homeStore.categories)
</script>

<style scoped></style>