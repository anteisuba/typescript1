<script setup lang="ts">
// 可以在这里添加任何需要的组件逻辑
</script>

<template>
  <section id="first" class="main">
    <header>
      <div class="container">
        <h2>好きなマンガを選んでください</h2>
        <p>漫画は、簡略化と事象の抽象化が特徴とされる。現代漫画は、映画などの影響を受けて20世紀に世界的に発展した、ストーリーのある「コマ割り漫画」のcomics（コミック）と、「一コマ漫画」のcartoon（カートゥーン）に分類することができる[3]。</p>
      </div>
    </header>
    <div class="content dark style1 featured">
      <div class="container">
        <div class="row">
          <div class="col-4 col-12-narrow">
            <section>
              <span class="feature-icon"><span class="icon fa-clock"/>
                <span class="icon fa-clock"></span>
              </span>
              <header>
                <h3>この素晴らしい世界に祝福を！</h3>
              </header>
              <p>元々は小説投稿サイト「小説家になろう」にて、暁が「自宅警備兵」名義で2012年12月から連載していたオンライン小説である。2013年12月10日に本作が削除されることが同サイトの活動報告で告知され、同時に他の「自宅警備兵」名義の投稿作品すべてが削除された。物語の要素の多くは共通しているが、WEB版とその他のメディアでは展開や設定が大きく変更されている。</p>
            </section>
          </div>
          <div class="col-4 col-12-narrow">
            <section>
              <span class="feature-icon"><span class="icon solid fa-bolt" /></span>
              <header>
                <h3>新世紀エヴァンゲリオン</h3>
              </header>
              <p>本作品は1990年代に始まる第3次アニメブームのきっかけとなった作品である[5]。作品発表当時、物語の構造として、主人公の自意識や人間関係と、世界の命運という両極端なスケールの話が連動していることが斬新であったため、ポスト・エヴァンゲリオンともいうべき作品が数多く生み出され、後にそのような作品がセカイ系と呼称されるようになった[6]。さらに、製作委員会方式を採用した初期の作品であり、本編を収めたパッケージメディアの成功だけでなく、メディアミックスの一環として発売した漫画やフィギュアなどの関連商品も軒並みヒットし、本作品以降首都圏で深夜を中心にアニメ放送が急増し（深夜アニメの登場）、21世紀以降のアニメ文化の枠組みを築いた。</p>
            </section>
          </div>
          <div class="col-4 col-12-narrow">
            <section>
              <span class="feature-icon"><span class="icon solid fa-cloud" /></span>
              <header>
                <h3>無職転生</h3>
              </header>
              <p>現代日本に暮らす20年近く引きこもる34歳無職の主人公は、親が死去したのに伴い兄弟に見限られて家を追い出されてしまう。家を出た後、トラックに轢かれかけた高校生3人を助けようとして事故死してしまう。</p>
            </section>
          </div>
          <div class="col-12">
            <footer>
              <a href="#second" class="button scrolly">次のモジュールへ進むにはクリックしてください。</a>
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
    background: #f3c6c6;
    border-radius: 50%;
    
    .icon {
      font-size: 2em;
      color: white;
    }
  }

  .dark {
    background-color: #b6a0a0;
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