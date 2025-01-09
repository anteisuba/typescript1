<script setup lang="ts">
// 这里可以添加组件逻辑
</script>

<template>
  <section id="third" class="main">
    <header>
      <div class="container">
        <h2>Ornare varius lorem ipsum ante lectus</h2>
        <p>Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet consequat<br />
        feugiat. Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet.</p>
      </div>
    </header>
    <!-- <div class="content dark style3">
      <div class="container">
        <span class="image featured"><img src="@/assets/images/pic07.jpg" alt="" /></span>
        <div class="row">
          <div class="col-4 col-12-narrow">
            <h3>Diam vivamus turpis lorem sodales lectus ornare</h3>
            <p>Gravida dis placerat lectus ante vel nunc euismod est turpis sodales. Diam
            tempor dui lacinia eget ornare varius gravida. Gravida dis placerat lectus ante
            vel nunc euismod est turpis sodales.</p>
          </div>
          <div class="col-4 col-12-narrow">
            <p>Gravida dis placerat lectus ante vel nunc euismod est turpis sodales. Diam
            tempor dui lacinia eget ornare varius gravida. Gravida dis placerat lectus ante
            vel nunc euismod est turpis sodales.</p>
          </div>
          <div class="col-4 col-12-narrow">
            <p>Placerat lectus ante vel nunc euismod est turpis sodales. Diam tempor dui
            lacinia eget ornare varius gravida.</p>
            <footer>
              <a href="#fourth" class="button scrolly">Ipsum ornare lorem dolor</a>
            </footer>
          </div>
        </div>
      </div>
    </div> -->
  </section>
</template>

<style lang="scss" scoped>
.main {
  padding: 6em 0;

  header {
    text-align: center;
    margin-bottom: 3em;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .image.featured {
    margin-bottom: 2em;
    
    img {
      width: 100%;
      height: auto;
    }
  }

  .dark {
    background-color: #252525;
    color: white;
  }

  .button {
    display: inline-block;
    padding: 0.75em 1.5em;
    text-decoration: none;
    background-color: #484848;
    color: white;
    border-radius: 4px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #666;
    }
  }
}
</style>