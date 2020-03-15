<template>
  <Layout>
    <template v-slot:header>
      <div class="relative bg-center bg-no-repeat bg-cover h-screen" :style="{ backgroundImage: 'url(' + headerImgFiles[headerImgIndex] + ')' }">
        <NavMenu class="absolute top-0 left-0" />
      </div>
    </template>

    <template v-slot:about_top>
      <Profile />
    </template>

    <template v-slot:main-contents>
      <ContentsSeparator contents-title="Photography" tilt-mode="left" />
      <ContentsTopPhoto />
      <ContentsSeparator contents-title="Graphics" tilt-mode="right" />
      <ContentsTopPhoto /> <!-- 仮のコンポーネント指定 -->
      <ContentsSeparator contents-title="Material" tilt-mode="left" />
      <ContentsTopMaterial />
      <ContentsSeparator contents-title="Blog" tilt-mode="right" />
      <ContentsTopBlog />
    </template>
  </Layout>
</template>

<script>
import NavMenu from '~/components/TheNavMenu.vue'
import Profile from '~/components/Profile.vue'
import ContentsSeparator from '~/components/ContentsSeparator.vue'
import ContentsTopPhoto from '~/components/ContentsTopPhoto.vue'
// import ContentsTopGraphic from '~/components/ContentsTopGraphic.vue'
import ContentsTopMaterial from '~/components/ContentsTopMaterial.vue'
import ContentsTopBlog from '~/components/ContentsTopBlog.vue'

export default {
  components: {
    NavMenu,
    Profile,
    ContentsSeparator,
    ContentsTopPhoto,
    // ContentsTopGraphic,
    ContentsTopMaterial,
    ContentsTopBlog
  },
  metaInfo: {
    title: 'Home'
  },
  data: () => {
    return {
      // ヘッダー画像
      headerImgFiles: [
        require('@/assets/images/top1.jpg'),
        require('@/assets/images/top2.jpg'),
        require('@/assets/images/top3.jpg'),
        require('@/assets/images/top4.jpg')
      ]
    }
  },
  computed: {
    // サイト読み込みのたびヘッダー画像をランダム選択
    headerImgIndex: () => {
      return Math.floor(Math.random() * 4)
    }
  }
}
</script>
