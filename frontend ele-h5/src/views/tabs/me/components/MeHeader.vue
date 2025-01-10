<script setup lang="ts">
    import { ref } from 'vue'

    const title = ref('私のホームページへようこそ！')
    const subtitle = ref('お気に入りのキャラクターをご覧ください。')

</script>

<template>
    <section id="header" class="dark">
        <header>
            <h1>{{ title }}</h1>
            <p>{{ subtitle }}</p>
        </header>
        <footer>
            <a href="#first" class="button scrolly">次のモジュールへ進むにはクリックしてください。</a>
        </footer>
    </section>
</template>

<style lang="scss" scoped>
#header {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4em 2em;
  color: white;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('@/assets/images/Eirs1.jpg') center center;
    background-size: cover;
    opacity: 0.5;
    z-index: -1;
  }

  header {
    margin-bottom: 2em;

    h1 {
      font-size: 3em;
      margin-bottom: 0.5em;
      color: white;
    }

    p {
      font-size: 1.25em;
      opacity: 0.8;
      
      a {
        color: white;
        text-decoration: underline;
      }
    }
  }

  .button {
    display: inline-block;
    padding: 1em 2em;
    background: rgba(255, 255, 255, 0.15);
    color: white;
    border: 2px solid white;
    border-radius: 4px;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
}
</style>