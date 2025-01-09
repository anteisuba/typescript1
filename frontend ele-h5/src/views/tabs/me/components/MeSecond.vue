<script setup lang="ts">
// 组件逻辑可以在这里添加
</script>

<template>
  <section id="second" class="main">
    <header>
      <div class="container">
        <h2>Euismod sed feugiat lorem tempus magna</h2>
        <p>Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet consequat<br />
        feugiat. Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet.</p>
      </div>
    </header>
    <div class="content dark style2">
      <div class="container">
        <div class="row">
          <div class="col-4 col-12-narrow">
            <section>
              <h3>Augue vivamus sed ipsum commodo lorem dolor</h3>
              <p>Gravida dis placerat lectus ante vel nunc euismod est turpis sodales. Diam
              tempor dui lacinia eget ornare varius gravida.</p>
              <footer>
                <a href="#third" class="button scrolly">Accumsan nisi tempor</a>
              </footer>
            </section>
          </div>
          <div class="col-8 col-12-narrow">
            <div class="row">
              <div class="col-6">
                <img src="https://via.placeholder.com/400x300" alt="placeholder" class="image fit" />
              </div>
              <div class="col-6">
                <img src="https://via.placeholder.com/400x300" alt="placeholder" class="image fit" />
              </div>
              <div class="col-6">
                <img src="https://via.placeholder.com/400x300" alt="placeholder" class="image fit" />
              </div>
              <div class="col-6">
                <img src="https://via.placeholder.com/400x300" alt="placeholder" class="image fit" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.main {
  padding: 6em 0;
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  header {
    text-align: center;
    margin-bottom: 3em;
  }

  .row {
    display: grid;
    gap: 2rem;
  }

  .col-4 {
    grid-column: span 4;
  }
  
  .col-8 {
    grid-column: span 8;
  }

  .col-6 {
    grid-column: span 6;
  }

  @media (max-width: 768px) {
    .col-12-narrow {
      grid-column: 1 / -1;
    }
  }

  .image.fit {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .button {
    display: inline-block;
    padding: 0.75em 1.5em;
    text-decoration: none;
    background-color: #484848;
    color: white;
    border-radius: 4px;
    transition: all 0.3s ease;

    &:hover {
      background-color: #666;
    }
  }

  .dark {
    background-color: #252525;
    color: white;
  }
}
</style>