<script setup lang="ts">
// 如果需要表单处理逻辑可以在这里添加
const handleSubmit = (event: Event) => {
  event.preventDefault()
  // 处理表单提交
}

const handleReset = () => {
  // 处理表单重置
}
</script>

<template>
  <section id="fourth" class="main">
    <header>
      <div class="container">
        <h2>Sed feugiat ipsum consequat</h2>
        <p>Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet consequat<br />
        feugiat. Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet.</p>
      </div>
    </header>
    <div class="content style4 featured">
      <div class="container medium">
        <form method="post" @submit="handleSubmit" @reset="handleReset">
          <div class="row gtr-50">
            <div class="col-6 col-12-mobile">
              <input type="text" placeholder="Name" />
            </div>
            <div class="col-6 col-12-mobile">
              <input type="text" placeholder="Email" />
            </div>
            <div class="col-12">
              <textarea name="message" placeholder="Message"></textarea>
            </div>
            <div class="col-12">
              <ul class="actions special">
                <li><input type="submit" class="button" value="Send Message" /></li>
                <li><input type="reset" class="button alt" value="Clear Form" /></li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#fourth {
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .content {
    padding: 4em 0;
  }

  .row {
    display: grid;
    gap: 2rem;
  }

  input, textarea {
    width: 100%;
    padding: 0.75em;
    margin-bottom: 1em;
  }

  .actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    list-style: none;
    padding: 0;

    .button {
      padding: 0.75em 1.5em;
      cursor: pointer;

      &.alt {
        background: transparent;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .col-6 {
      grid-column: span 12;
    }
  }
}
</style>