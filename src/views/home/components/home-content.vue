<template>
    <div class="py-[10px] px-[8px]">
        <h2 class="p-[10px]">热门精选</h2>
        <div class="flex flex-wrap">

            <template v-for="(item, index) in houseList" :key="index">
                <HouseItemV3 v-if="item.discoveryContentType === 3" :item-data="item.data" />
                <HouseItemV9 v-if="item.discoveryContentType === 9" :item-data="item.data" />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import HouseItemV3 from '@/components/house-item-v3/house-item-v3.vue';
import HouseItemV9 from '@/components/house-item-v9/house-item-v9.vue';
import useHomeStore from '@/store/modules/home';
import { computed } from 'vue';
const homeStore = useHomeStore();
const houseList = computed(() => homeStore.houselist);
</script>

<style scoped></style>