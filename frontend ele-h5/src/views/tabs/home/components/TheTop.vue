<script setup lang="ts">
    import type { ISearchRecomment } from '@/types'
    import OpSearch from '@/components/OpSearch.vue';
    // import { ref } from 'vue';
    interface IProps {
        recomments: ISearchRecomment[]
    }

    defineProps<IProps>()

    // const searchValue = ref('test');

    interface IEmits {
        (e:'searchClick'):void
    }

    const emits = defineEmits<IEmits>()
    
</script>

<template>
    <div class="page-container">
        <div class="home-top">
        <div class="top">
            <img class="location-icon" src="@/assets/img/Megumin.jpg" alt="">
            <div class="location">このすば</div>
            <img class="shopcart-icon" src="@/assets/img/Rei.jpg" alt="">
            <div class="location">新世紀エヴァン</div>
            <img class="comments-icon" src="@/assets/img/Roxy1.jpg" alt="">
            <div class="location">無職転生</div>
        </div>
        <!-- <VanSearch 
        shape="round" 
        background="linear-gradient(to right,rgb(53,200,250),rgb(31,175,243))"
        placeholder="大好きなキャラクター"
        >
            <template #right-icon>
                <div>検索</div>
            </template>
        </VanSearch> -->
        <!-- 子组件OpSearch -->
        <OpSearch
            shape="round" 
            background="linear-gradient(to right,rgb(53,200,250),rgb(31,175,243))"
            placeholder="大好きなキャラクター"
            @inputClick="emits('searchClick')"
        >
            <template #right-icon>
                <div @click="emits('searchClick')" class="search-text">検 索</div>
            </template>
        </OpSearch>
        <div class="search-recommend">
            <div v-for="v in recomments" :key="v.value" class="tag">{{ v.label }}</div>
        </div>
    </div>
    </div>
    
</template>

<style lang="scss" scoped>     
    .home-top {         
        background: linear-gradient(to right,rgb(53,200,250),rgb(31,175,243));         
        color: white;         
        .top {             
            display: flex;             
            align-items: center;             
            padding:10px;             
            line-height: 15px;             
            font-size: 10px;             
            font-weight: bold;             
            .location-icon {                 
                border-radius: 10%;                 
                width: 5%;              
            }             
            .location {                 
                font-size: 20px;                 
                height: 20px;                 
                flex: 1;             
            }             
            .shopcart-icon {                 
                border-radius: 10%;                 
                width: 5%;             
            }             
            .comments-icon {                 
                border-radius: 10%;                 
                width: 5%;                
                margin-left: 10px;             
            }          
        }         
        .search-recommend {             
            display: flex;             
            padding: 0 10px 8px;             
            .tag {                 
                font-size: 12px;                 
                border-radius: 10px;                 
                background:rgb(242, 242,242,0.3);                 
                padding:2px 8px;                 
                margin-right: 10px ;              
            }         
        }      
    }  
</style> 
<style lang="scss">     
    .home-top {         
        .van-field__right-icon {             
            margin-right: 0;         
        }     
    }
    .search-text {
  display: inline-block;  /* 或者 flex */
  white-space: nowrap;    /* 防止文字换行 */
  writing-mode: horizontal-tb;  /* 强制横向排列 */
} 
</style>
