<script setup lang="ts">
    import { RouterView, useRoute, useRouter} from 'vue-router';
    import {ref,watch} from 'vue'
    const route = useRoute()
    const router = useRouter()
    //记录当前选择的tab
    const active = ref(route.name as string)

    watch(active, (nv) => {
        router.push({
            name:nv
        })
    })
</script>

<template>
    <!-- <div class="center">{{ active }}</div> -->
    <RouterView />
    <VanTabbar v-model="active">
        <VanTabbarItem name="home" icon="home-o">ホームページ</VanTabbarItem>
        <VanTabbarItem name="order" icon="bars">総合</VanTabbarItem>
        <VanTabbarItem name="me" icon="contact">マイページ</VanTabbarItem>
    </VanTabbar>
</template>

<style>
    .center {
        text-align: center;
    }
</style>