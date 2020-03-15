<template>
  <div class="my-0 sm:my-20">
    <!-- sm時に上下幅＝余白を調整 -->
    <div class="container mx-auto bg-white lg:my-32 px-8 py-20 sm:py-4 lg:flex lg:w-3/5 lg:p-10 lg:border lg:border-gray-300 lg:rounded-lg">
      <!-- プロフィール -->
      <img :src="profile.img" class="w-48 h-48 mx-auto my-4 rounded-full lg:my-auto lg:mr-10">
      <div class="my-4">
        <p class="text-pink-500 text-sm text-center pb-4">
          {{ profile.title }}
        </p>
        <p class="text-gray-800 text-2xl text-center font-medium py-3">
          {{ profile.nameJa }}<span class="text-base">{{ profile.nickname }}</span>
        </p>
        <p class="text-gray-800 text-xs text-center py-1">
          {{ profile.nameEn }}
        </p>
        <p class="text-gray-800 text-sm text-left px-4 lg:px-0 py-6 leading-loose">
          {{ profile.intro.first }}<br>{{ profile.intro.second }}{{ $static.metadata.siteName }}{{ profile.intro.third }}
        </p>
        <!-- Social -->
        <div class="flex flex-wrap justify-center text-center pt-2 px-4 lg:px-0">
          <a v-for="s in social" :key="s.text" :href="s.link" target="_blank"
            class="mr-2 mb-2 px-2 py-1 text-xs bg-gray-200 rounded-full">
            <img :src="s.icon" class="w-4 h-4 mr-1 inline-block" style="vertical-align: -0.2rem" /><span>{{ s.text }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      // プロフィール情報
      profile: {
        img: require('@/assets/images/profile.jpg'),
        title: 'Software Engineer & Photographer',
        nameJa: '花村貴史',
        nameEn: 'Takashi Q. Hanamura',
        nickname: '（なむ）',
        intro: {
          first: 'Web開発をしながら、撮られ慣れてない方の笑顔やステキな空気感をそっとすくい撮ってます。横浜育ち38年、脱サラ信州移住2年半を経て、2018年春から関西在住。翌年秋から夫婦生活スタート。関西に来てよかったことは京都が近くなったこと、大歓喜。',
          second: 'そんな僕のポートフォリオサイト「',
          third: '」をよろしくお願いします。'
        }
      },
      social: [
        {
          link: 'https://nnamm.com',
          icon: require('@/assets/svg/line/wordpress.svg'),
          text: 'Web'
        },
        {
          link: 'https://note.com/tnnamm',
          icon: require('@/assets/svg/line/safari.svg'),
          text: 'note'
        },
        {
          link: 'https://www.facebook.com/t.hanamura.photography/',
          icon: require('@/assets/svg/line/facebook.svg'),
          text: 'Facebook'
        },
        {
          link: 'https://twitter.com/nnammg',
          icon: require('@/assets/svg/line/twitter.svg'),
          text: 'Twitter'
        },
        {
          link: 'https://github.com/nnamm',
          icon: require('@/assets/svg/line/github.svg'),
          text: 'GitHub'
        },
        {
          link: 'https://www.behance.net/nnamm',
          icon: require('@/assets/svg/line/behance.svg'),
          text: 'Behance'
        },
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
