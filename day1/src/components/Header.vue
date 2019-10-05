<template>
  <b-jumbotron bg-variant="light">
    <template v-slot:header>
      100 Web challenge
    </template>
    <template v-slot:lead>
      Learn front/back-end technology and output 100 results.
    </template>
    <hr class="my-5">
    <div class="px-5 header-text">
      <p>
        <img
          class="round"
          src="@/assets/profile.jpg"
          width="40px">&nbsp;空気感フォトグラファー&nbsp;
        <a
          href="https://twitter.com/nnammg"
          target="_blank">@nnammg</a>&nbsp;が学んだ「Web系技術をアウトプットする場」です。
      </p>
      <p>15年間IT企業に勤めていたところ、どうしても信州に住んでみたくて移住。以来、好き＆得意な写真撮影を生業としています。そして、長野県松本市での出会いから「やっぱりエンジニアも好き」と気づきます。しかし、ブランクは11年と長く（2019年時点）、モダンな技術の実績はない。「それじゃあ！」と今とても興味のあるWeb系技術を学び、成果を発信するチャレンジサイトを作りました。</p>
      <p>なぜ？</p>
      <p>
        キッカケは「
        <a
          href="https://www.pedaling.work"
          target="_blank">180 Days Of Code by "I'm pedaling"</a>」のサイト。コツコツとチャレンジされている方を見て、僕も真似させていただきました。
      </p>
      <p>どんなものでも良いので手を動かし、作ることを優先。目標は週2〜3回の更新で合計100個！</p>
    </div>
  </b-jumbotron>
</template>

<style scoprd>
.header-text {
  line-height: 1.8rem;
}
.round {
  border-radius: 20px;
  transform: rotate(14deg);
}
</style>
