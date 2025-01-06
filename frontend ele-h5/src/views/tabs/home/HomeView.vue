<script setup lang="ts">
    import TheTop from './components/TheTop.vue';
    import { useToggle } from '@/use/UseToggle';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    import SearchView from '@/views/search/SearchView.vue';
    const recomments = [
        {
            value:1,
            label:'蓝发',
        },
        {
            value:2,
            label:'红发',
        },
    ]
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isSearchViewShown,toggleSearchView] = useToggle(false)
</script>

<template>
    <div class="home-page">
        <!-- 实现动画效果 -->
        <Transition name="fade">
            <SearchView v-if="isSearchViewShown" @cancel="toggleSearchView"></SearchView>
        </Transition>
        <TheTop :recomments="recomments" @searchClick="toggleSearchView"/>
    </div>
</template>

<style lang="scss" scoped>
    // 动画执行和退出的效果如何
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s ease;
    }
    //动画进行的时候,组建的状态如何
    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

</style>