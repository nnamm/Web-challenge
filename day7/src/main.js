import BaseLayout from '~/layouts/BaseLayout.vue'

import '@/assets/css/tailwind.css'
import '@/assets/css/style.scss'
import 'prismjs/themes/prism-okaidia.css'

export default function (Vue, { router, head, isClient, appOptions }) {
  // デフォルトレイアウトのグローバル設定
  Vue.component('Layout', BaseLayout)

  // サイトのhead設定
  head.htmlAttrs = { lang: 'ja' }
  head.meta.push({
    name: 'description',
    content: '空気感フォトグラファーのポートフォリオサイトです。Gridsomeで作りました。写真、グラフィック、ブログなどの作品を掲載しています。'
  })
}
