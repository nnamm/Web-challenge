<template>
  <b-jumbotron bg-variant="light">
    <template v-slot:header>
      100 Web challenge
    </template>
    <template v-slot:lead>
      Learn front/back-end tech and output 100 results.
    </template>
    <hr class="my-5">
    <div class="header">
      <p>
        <img
          class="mr-2 round"
          src="@/assets/profile.jpg">
        空気感フォトグラファー（
        <a
          href="https://twitter.com/nnammg"
          target="_blank">@nnammg</a>）が学んだ「Web系技術をアウトプットする場」です。
      </p>
      <p>15年間IT企業に勤めていたところ、どうしても信州に住んでみたくて移住。以来、好き＆得意な写真撮影を生業としています。そして、長野県松本市での出会いから「やっぱりエンジニアも好き」と気づきます。しかし、ブランクは11年と長く（2019年時点）、モダンな技術の経験は浅い。「それじゃあ、スキルを磨こか！」と今とても興味のあるWeb系技術を学び、成果を発信するチャレンジサイトを作りました。</p>
      <p>なぜか？</p>
      <p>
        キッカケは「
        <a
          href="https://www.pedaling.work"
          target="_blank">
          180 Days Of Code by "I'm pedaling"</a>」のサイト。コツコツとチャレンジされている方を見て、僕も真似させていただきました。
      </p>
      <p>どんなものでも良いので手を動かし、作ることを優先します。</p>
    </div>
  </b-jumbotron>
</template>

<style scoprd>
.header {
  line-height: 2rem;
  width: 90%;
  margin: auto;
  padding: 0 2rem;

}
.round {
  width: 36px;
  border-radius: 20px;
  transform: rotate(14deg);
}
</style>
