<script setup lang="ts">
import OpSearch from '@/components/OpSearch.vue';
import { ref,computed, watch} from 'vue';
import { fetchSearchData } from '@/api/search';
import type { ISearchResult } from '@/types';
import { useToggle } from '@/use/UseToggle';
import { useDebounce } from '@/use/useDebounce';

    interface IEmits {
        (e:'cancel'):void
    }
    const emits = defineEmits<IEmits>()

    const HISTORY_TAGS = [
        'モンキー・D・ルフィ',
        'うずまきナルト',
         '五条悟',
         '竈門炭治郎',
        '宮崎駿',
         '石神千空',
         'キョン',
         '綾波レイ',
         '高木さん',
         '江戸川コナン',
    ]

    const [isHistoryTagShown,toggleHistoryTag] = useToggle(false)

    // const [] = useToggle(false)

    const historyTags = computed(() => isHistoryTagShown.value ? HISTORY_TAGS : HISTORY_TAGS.slice(0,5))

    // 添加点击箭头的处理函数
    const onToggleHistory = () => {
        toggleHistoryTag()
    }

    const searchValue = ref('')

    const searchResult = ref([] as ISearchResult[])

    const [INIT,DONE,DOING] = [-1,0,1]

    const searchState = ref(INIT)

    const onSearch = async (v?:string | number) => {
        console.log('====onsearch',v)
        //如果出错误也会执行下去
        try {
            searchState.value = DOING
            const { list } = await fetchSearchData(v as string)
            searchResult.value = list
            console.log(list)
        } finally {
            searchState.value = DONE
        }
    }

    const onTagClick = (v:string) => {
        searchValue.value = v
        onSearch(v)
    }
    //监视
    // const handleSearch = useDebounce<string>((value:string) => {
    //     if(!value) {
    //         searchResult.value = []
    //         return
    //     }
    //     onSearch(value)
    // },1000)
    // watch(searchValue,(nv) => handleSearch(nv),{immediate:false})

    // watch(
    //     searchValue,
    //     useDebounce((nv) => {
    //         if(!nv) {
    //             searchResult.value = []
    //             return
    //         }
    //         onSearch(nv as string)
    //     }, 1000)
        
    //     // (nv) => {
    //     //     const debouncedFn = useDebounce<string>((value) => {
    //     //         if(!value) {
    //     //             searchResult.value = []
    //     //             return
    //     //         }
    //     //         onSearch(value)
    //     //     },1000)
    //     //     debouncedFn(nv)
    //     // }
    // )
    const debounceValue = useDebounce(searchValue,1000)
    watch(debounceValue,(nv) => {
                if(!nv) {
                searchResult.value = []
                return
            }
            onSearch(nv as string)
    })

</script>

<template>
    <div class="search-view">
        <OpSearch 
            show-action 
            v-model="searchValue" 
            shape="round" 
            placeholder="キーワードを入力してください"
            @search="onSearch"
            @cancel="emits('cancel')"
            >

        </OpSearch>
        <!-- <div class="search-view__history">
            <div class="label">検索履歴</div>
            <TransitionGroup name="list">
                <div class="history-tags-container">
                    <div class="history-tag" v-for="v in historyTags" :key="v">{{ v }}</div>
                    <div class="history-tag arrow-tag">
                        <VanIcon v-if="isHistoryTagShown" name="arrow-up" />
                        <VanIcon v-else name="arrow-down" />
                    </div>
                </div>
            </TransitionGroup>
            
        </div> -->
        <div v-if="!searchValue" class="search-view__history">
        <div class="label">検索履歴</div>
        <div class="tags-wrapper">
            <TransitionGroup name="list" tag="div" class="tags-container">
                <div 
                    v-for="v in historyTags" 
                    :key="v" 
                    class="history-tag"
                    @click="onTagClick(v)"
                >{{ v }}</div>
            </TransitionGroup>
            <!-- 箭头按钮 -->
                <div class="toggle-btn" key="allow" @click="onToggleHistory">
                    <VanIcon 
                        :name="isHistoryTagShown ? 'arrow-up' : 'arrow-down'" 
                        :style="{ transform: isHistoryTagShown ? 'rotate(180deg)' : 'rotate(0deg)' }"
                    />
                </div>
            </div>
        </div>
        <div v-else class="search-view__result">
            <div class="searching" v-if="searchState === DOING">検索中</div>
            <template v-if="searchState === DONE">
                <div class="result-item" v-for="v in searchResult" :key="v.label">
                <VanIcon name="search"></VanIcon>
                <div class="name">{{ v.label }}</div>
                <div class="count">結果は{{ v.resultCount }}</div>
                </div>
                <div class="no-result" v-if="!searchResult.length">おすすめはありません</div>
            </template>
            
        </div>
    </div>
</template>

<style lang="scss">
    .search-view {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: white;
        z-index: 999;

        // 添加搜索历史样式
        &__history {
            padding: var(--van-padding-sm);
            .label {
                margin-bottom: var(--van-padding-xs);
                padding: 10px;
                color: #333;
                font-weight: 500;
            }
            .tags-wrapper {
                position: relative;
                padding-bottom: 40px; // 为箭头留出空间
            }

            .tags-container {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                padding-bottom: 40px;
            }

            .history-tag {
                display: inline-block; // 让标签横向排列
                margin: 0 8px 8px 0; // 标签之间的间距
                padding: 6px 12px; // 标签内部的间距
                background: #f7f8fa; // 标签背景色
                border-radius: 4px; // 圆角
                font-size: 13px;
                color: var(--van-gray-6); // 文字颜色
                font-weight: 500; // 文字加粗
            }

            .toggle-btn {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            .van-icon {
                font-size: 16px;
                transition: transform 0.3s ease;
                color: #333;
            }

            &:active {
                opacity: 0.7;
            }
        }
        }


        &__result {
            color: #333;  // 为整个结果区域设置更深的颜色
            font-weight: 500;  // 整体加粗
            
            .result-item {
                display: flex;
                align-items: center;
                font-size: 12px;
                padding: 10px;
                border-radius: 1px solid var(--van-gray-6);
                .name {
                    flex: 1;
                    padding-left: 6px;
                    color: #333;  // 修改为深色，而不是红色
                }
                .count {
                    font-size: 12px;
                    color: #333;  // 修改为深色，而不是红色
                }
            }
        }
    }

    // .list-enter-active,.list-leave-active {
    //     transition: all 1s ease;
    // }
    // .list-enter-from,.list-leave-to {
    //     opacity: 0;
    //     transform: translateY(30px);
    // }
    .list-enter-active,
    .list-leave-active {
        transition: all 0.3s ease-in-out;
    }

    .list-enter-from,
    .list-leave-to {
        opacity: 0;
        transform: translateY(20px);
    }

    .list-move {
        transition: transform 0.3s ease;
    }

    .no-result,
    .searching {
        font-size: 12px;
        padding: 100px 0;
        text-align: center;
        color: var(--van-gray-6);

    }
</style>