
<script setup lang="ts">
    import MeHeader from './components/MeHeader.vue';
    import MeFirst from './components/MeFirst.vue';
    import MeSecond from './components/MeSecond.vue';
    import MeThird from './components/MeThird.vue';
    import MeFourth from './components/MeFourth.vue';
    import MeFooter from './components/MeFooter.vue';
</script>

<template>
    <div class="me-view">
        <MeHeader />
        <MeFirst />
        <MeSecond />
        <MeThird />
        <MeFourth />
        <MeFooter />
    </div>

</template>

<style lang="scss" scoped>
    .me-view {
        // 基础样式
        width: 100%;
        min-height: 100vh;
        overflow-x: hidden;

        // 通用容器样式
        :deep(.container) {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            box-sizing: border-box;
        }

        //响应式布局断点
        @media screen and (max-width:1200px) {
            :deep(.container) {
                max-width: 960px;
            }
        }
        @media screen and (max-width: 992px) {
            :deep(.container) {
            max-width: 720px;
            }
        }

        @media screen and (max-width: 768px) {
            :deep(.container) {
            max-width: 540px;
            padding: 0 15px;
            }

            // 移动端字体大小调整
            :deep(h1) {
            font-size: 2em !important;
            }

            :deep(h2) {
            font-size: 1.75em !important;
            }

            :deep(h3) {
            font-size: 1.5em !important;
            }

            :deep(p) {
            font-size: 1em !important;
            }
        }

        @media screen and (max-width: 576px) {
            :deep(.container) {
            width: 100%;
            padding: 0 10px;
            }
        }

        // 栅格系统响应式调整
        :deep(.row) {
            display: grid;
            gap: 2rem;
            grid-template-columns: repeat(12, 1fr);

            @media screen and (max-width: 768px) {
            grid-template-columns: 1fr;
            gap: 1rem;
            }
        }

        // 各种列宽的响应式处理
        :deep {
            .col-4 {
            grid-column: span 4;
            @media screen and (max-width: 768px) {
                grid-column: span 12;
            }
            }

            .col-6 {
            grid-column: span 6;
            @media screen and (max-width: 768px) {
                grid-column: span 12;
            }
            }

            .col-8 {
            grid-column: span 8;
            @media screen and (max-width: 768px) {
                grid-column: span 12;
            }
            }

            .col-12 {
            grid-column: span 12;
            }
        }

        // 通用间距调整
        :deep(section) {
            padding: 6em 0;
            
            @media screen and (max-width: 768px) {
            padding: 4em 0;
            }
            
            @media screen and (max-width: 576px) {
            padding: 3em 0;
            }
        }
    }

    

</style>