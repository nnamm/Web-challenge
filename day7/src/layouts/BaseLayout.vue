<template>
  <!-- フッター最下部設置用の設定 -->
  <div class="min-h-screen relative box-border pb-40 lg:pb-20 base-text">

    <!-- ヘッダー -->
    <header>
      <slot name="header" />
    </header>

    <!-- サイトトップ用のプロフコンポーネント配置位置 -->
    <div>
      <slot name="about_top" />
    </div>

    <!-- コンテンツ -->
    <main>
      <slot name="main-contents" />
    </main>

    <!-- 各ポスト用のプロフコンポーネント配置位置 -->
    <div>
      <slot name="about_in_post" />
    </div>

    <!-- フッター最下部設置用の設定 -->
    <footer class="w-screen absolute bottom-0">
      <Footer />
    </footer>
  </div>
</template>

<script>
import Footer from '~/components/TheFooter.vue'

export default {
  components: {
    Footer
  }
}
</script>

<style scoped>
.base-text {
  @apply text-gray-800;
  @apply leading-relaxed;
  @apply subpixel-antialiased;
  @apply break-words;
}
</style>
