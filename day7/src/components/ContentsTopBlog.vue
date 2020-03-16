<template>
  <div class="w-screen mx-auto text">
    <div class="px-6 py-16 sm:px-8 sm:py-20 lg:px-15 lg:py-32 xl:px-20">
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
        <!-- 記事 -->
        <div v-for="{ node } in $static.allPost.edges" :key="node.id"
          class="px-4 py-6 bg-white hover-effect hover:shadow-lg" style="min-height: 320px;">
          <router-link :to="node.path">
            <!-- カテゴリ -->
            <div class="text-sm text-center text-gray-600">{{ node.category }}</div>
            <!-- タイトル -->
            <h2 class="pt-6 text-xl font-bold text-center">{{ node.title }}</h2>
            <!-- 投稿日 -->
            <div class="pt-5 text-xs text-center text-gray-600">
              <time :datetime="node.createdAt">{{ node.createdAt }}</time>
              <!-- 登校日と更新日が異なる場合は更新日も表示する -->
              <span v-if="node.createdAt !== node.updatedAt">
                <svg class="w-2 mx-2 inline-block" style="vertical-align: .025rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" fill="currentColor"><path d="M1639 1056q0 5-1 7-64 268-268 434.5t-478 166.5q-146 0-282.5-55t-243.5-157l-129 129q-19 19-45 19t-45-19-19-45v-448q0-26 19-45t45-19h448q26 0 45 19t19 45-19 45l-137 137q71 66 161 102t187 36q134 0 250-65t186-179q11-17 53-117 8-23 30-23h192q13 0 22.5 9.5t9.5 22.5zm25-800v448q0 26-19 45t-45 19h-448q-26 0-45-19t-19-45 19-45l138-138q-148-137-349-137-134 0-250 65t-186 179q-11 17-53 117-8 23-30 23h-199q-13 0-22.5-9.5t-9.5-22.5v-7q65-268 270-434.5t480-166.5q146 0 284 55.5t245 156.5l130-129q19-19 45-19t45 19 19 45z"></path></svg>
                <time :datetime="node.updatedAt">{{ node.updatedAt }}</time>
              </span>
            </div>
            <!-- アイキャッチ -->
            <div class="my-8 hover-effect bg-gray-200">
              <img :src="node.image" class="hover-effect hover:opacity-75">
            </div>
            <!-- 説明文 -->
            <div class="px-4 text-sm hidden md:block">{{ node.description }}</div>
            <!-- タグ -->
            <div class="pt-2 sm:pt-5 text-sm text-center text-gray-600">
              <span v-for="tag in node.tags.split(' ')" :key="tag" v-text="`#${tag}`" class="mr-2" />
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query ($page: Int) {
  allPost (page: $page) {
    edges {
      node {
        id
        path
        title
        createdAt (format: "YYYY.MM.DD")
        updatedAt (format: "YYYY.MM.DD")
        description
        image
        category
        tags
        type
      }
    }
  }
}
</static-query>

<style scoped>
.text {
  @apply text-gray-800;
  @apply leading-relaxed;
  @apply break-all;
}

.hover-effect {
  @apply transition;
  @apply duration-300;
  @apply ease-in-out;
}
</style>
