<template>
  <div class="w-screen lg:w-auto flex justify-between items-center bg-white shadow rounded-br-full">
    <div class="m-2 px-4 py-2 lg:py-4">
      <g-link class="text-xl font-bold text-gray-800" to="/">{{ $static.metadata.siteName }}</g-link>
    </div>
    <div class="m-2 px-4 py-2 lg:py-4">
      <!-- not mobile -->
      <nav class="ml-10 hidden lg:block">
        <g-link v-for="item in g_link_items" :key="item.title"
          class="text-sm font-light text-gray-800 hover:text-pink-500 mr-10" :to="item.to">{{ item.title }}</g-link>
      </nav>
      <!-- mobile -->
      <nav class="block lg:hidden">
        <!-- サルワカさんから拝借 -->
        <div id="nav-drawer">
          <input id="nav-input" type="checkbox" class="nav-unshown">
          <label id="nav-open" for="nav-input"><span></span></label>
          <label class="nav-unshown" id="nav-close" for="nav-input"></label>
          <div id="nav-content">
            <g-link v-for="item in g_link_items" :key="item.title"
              class="block m-2 pl-2 pr-8 py-2 text-sm font-light text-gray-800" :to="item.to">{{ item.title }}</g-link>
          </div>
        </div>
        <!-- TODO: Vue的動作でハンバーガーメニューを動かす -->
        <!-- <button>
          <svg id="nav-open" for="nav-input" class="h-4 w-4 inline-block" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 6h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button> -->
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      // ナビメニュー項目
      g_link_items: [
        { title: 'About', to: '/about/' },
        // { title: 'Photography', to: '/photography/' },
        // { title: 'Graphic', to: '/graphic/' },
        // { title: 'Material', to: '/material/' },
        // { title: 'Blog', to: '/blog/' },
      ]
    }
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style scoped>
/* サルワカさんから拝借 */
#nav-drawer {
  position: relative;
}

/*チェックボックス等は非表示に*/
.nav-unshown {
  display:none;
}

/*アイコンのスペース*/
#nav-open {
    display: inline-block;
    width: 32px;
    height: 16px;
    vertical-align: middle;
}

/*ハンバーガーアイコンをCSSだけで表現*/
#nav-open span, #nav-open span:before, #nav-open span:after {
    position: absolute;
    height: 2px;/*線の太さ*/
    width: 20px;/*長さ*/
    border-radius: 3px;
    background: #555;
    display: block;
    content: '';
    cursor: pointer;
}
#nav-open span:before {
    bottom: -6px;
}
#nav-open span:after {
    bottom: -12px;
}

/*閉じる用の薄黒カバー*/
#nav-close {
    display: none;/*はじめは隠しておく*/
    position: fixed;
    z-index: 99;
    top: 0;/*全体に広がるように*/
    right: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0;
    transition: .3s ease-in-out;
}

/*中身*/
#nav-content {
    overflow: auto;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9999;/*最前面に*/
    width: 40%;
    max-width: 330px;/*最大幅*/
    height: 100%;
    background: #fff;/*背景色*/
    transition: .3s ease-in-out;/*滑らかに表示*/
    transform: translateX(105%);/*右に隠しておく*/
}

/*チェックが入ったらもろもろ表示*/
#nav-input:checked ~ #nav-close {
    display: block;/*カバーを表示*/
    opacity: .5;
}

#nav-input:checked ~ #nav-content {
    transform: translateX(0%);/*中身を表示*/
    box-shadow: 6px 0 25px rgba(0,0,0,.15);
}
</style>
