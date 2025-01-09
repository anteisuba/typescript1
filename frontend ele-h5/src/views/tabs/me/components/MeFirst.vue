<script setup lang="ts">
// 可以在这里添加任何需要的组件逻辑
</script>

<template>
  <section id="first" class="main">
    <header>
      <div class="container">
        <h2>Tessellate is a free responsive site template</h2>
        <p>Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet consequat<br />
        feugiat. Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet.</p>
      </div>
    </header>
    <div class="content dark style1 featured">
      <div class="container">
        <div class="row">
          <div class="col-4 col-12-narrow">
            <section>
              <span class="feature-icon"><span class="icon fa-clock" /></span>
              <header>
                <h3>Gravida</h3>
              </header>
              <p>Gravida dis placerat lectus ante vel nunc euismod est turpis sodales.
              Diam tempor dui lacinia accumsan vivamus.</p>
            </section>
          </div>
          <div class="col-4 col-12-narrow">
            <section>
              <span class="feature-icon"><span class="icon solid fa-bolt" /></span>
              <header>
                <h3>Vivamus</h3>
              </header>
              <p>Gravida dis placerat lectus ante vel nunc euismod est turpis sodales.
              Diam tempor dui lacinia accumsan vivamus.</p>
            </section>
          </div>
          <div class="col-4 col-12-narrow">
            <section>
              <span class="feature-icon"><span class="icon solid fa-cloud" /></span>
              <header>
                <h3>Accumsan</h3>
              </header>
              <p>Gravida dis placerat lectus ante vel nunc euismod est turpis sodales.
              Diam tempor dui lacinia accumsan vivamus.</p>
            </section>
          </div>
          <div class="col-12">
            <footer>
              <a href="#second" class="button scrolly">Gravida tempor lacinia</a>
            </footer>
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
    grid-template-columns: repeat(12, 1fr);
    gap: 2rem;
  }

  .col-4 {
    grid-column: span 4;
  }

  .col-12 {
    grid-column: span 12;
  }

  @media (max-width: 768px) {
    .col-12-narrow {
      grid-column: 1 / -1;
    }
  }

  .feature-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    margin: 0 auto 2em;
    background: #484848;
    border-radius: 50%;
    
    .icon {
      font-size: 2em;
      color: white;
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
    transition: all 0.3s ease;

    &:hover {
      background-color: #666;
    }
  }

  footer {
    text-align: center;
    margin-top: 3em;
  }
}
</style>