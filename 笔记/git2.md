首页开发
页面头部实现
    normalize.css:处理不同浏览器的默认样式
        npm install normalize.css
        App.vue->@import 'normalize.css';
    sass:CSS预处理器
        npm install sass -D
    使用图片

    封装TheTop组件

    使用VanSearch组件
        <VanSearch 
        shape="round" 
        background="linear-gradient(to right,rgb(53,200,250),rgb(31,175,243))"
        placeholder="大好きなキャラクター"
        >
    使用defineProps定义组建的Props
        import type { ISearchRecomment } from '@/types'
        interface IProps {
        recomments: ISearchRecomment[]
        }
    声明Props的类型文件
        defineProps<IProps>()

基础组件-Search搜索框组件开发
    如何设计一个组件

    使用defineEmits定义组件的事件

    如何定义组件的v-model

    如何使用CSS变量
 
    BEM命名规范
        blick(块)-element(元素)-modifier(修饰符)

    需求分析
        布局
            content
                left-icon
                body
                    input-control
                    right-icon
                action

        功能
            自定义背景颜色        background
            自定义placeholder       placeholder
            自定义形状              shape
            自定义是否展示action        shownAction
            设置搜索框的值          v-model     update:modelValue
            按回车搜索              search
            点击:"取消"按钮触发取消事件     cancel
            如果不存在right-icon,输入内容时会出现"x",点击"x"可以清空内容        clear
            设置right-icon      right-icon

自定义hocks展示搜索页的切换

SearchView组件开发
    使用<transition>和<transition-group>实现动画效果
    Search组件复用
    computed计算属性
    warch监听属性
    使用axios实例发送业务请求
    mock请求

需求分析
    展示切换的动画
    搜索框输入文字的时候,自动发送请求
    搜索结果展示
    搜索状态维护
    历史搜索展示,点击历史搜索发送请求
    历史搜索更多 的切换动画

6-5:性能优化 useDebounce避免多次请求
    短时间内多次发送请求,造成返回结果的不正确
    发送无用请求,占用资源

    解决抖动问题
        将事件延迟执行
            setTimeout
        如果在这段时间内事件在被触发,则取消执行之前的事件   
            使用变量标记触发状态    clearTimeout

6-7 自定义hooks-useAsync实现请求处理

    Promise then和catch处理
    TS声明复杂的类型结构
    使用jsonServer中间件延迟返回数据

    需求分析:
        新建fetchHomePageData的api
        实现useAsync,将api包裹一层,处理Promise的状态

    