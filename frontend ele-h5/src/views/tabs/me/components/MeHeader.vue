<script setup lang="ts">
    import { ref } from 'vue'

    const title = ref('Welcome to Tessellate')
    const subtitle = ref('A free responsive site template')
</script>

<template>
    <section id="header" class="dark">
        <header>
            <h1>{{ title }}</h1>
            <p>{{ subtitle }}</p>
        </header>
        <footer>
            <a href="#first" class="button scrolly">Proceed to second phase</a>
        </footer>
    </section>
</template>

<style lang="scss" scoped>
    .dark {
        
    }
</style>