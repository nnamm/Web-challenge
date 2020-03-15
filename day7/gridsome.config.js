// Tailwind CSS用
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g) || []
  }
}

module.exports = {
  siteName: 'nnamm works',
  siteUrl: 'http://gridsome-test.thanamura.work/',
  titleTemplate: '%s | nnamm works',

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: []
    }
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'src/pages/posts/**/**/*.md',
        typeName: 'Post',
        remark: {
          plugins: ['@gridsome/remark-prismjs']
        }
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        shouldPurge: false
      }
    },
    {
      use: 'gridsome-plugin-purgecss',
      options: {
        content: [
          './src/assets/**/*.css',
          './src/**/*.vue',
          './src/**/*.js',
          './src/**/*.md',
          'node_modules/prismjs/**/*.js'
        ],
        extractor: TailwindExtractor,
        extensions: ['vue', 'js', 'md']
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-XXXXXXXXX-X'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
        exclude: ['/exclude-me'],
        config: {
          '/blog/*': {
            changefreq: 'weekly',
            priority: 0.5
          },
          '/about': {
            changefreq: 'monthly',
            priority: 0.7
          },
          '/term': {
            changefreq: 'monthly',
            priority: 0.7
          }
        }
      }
    }
  ],

  templates: {
    Post: [
      {
        path: '/posts/:slug',
        component: './src/templates/Post.vue'
      }
    ]
  }
}
