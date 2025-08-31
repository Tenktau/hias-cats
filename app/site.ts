// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
  title: '杭高院猫猫普查',
  description: '记录杭高院出没的猫咪们！',
  logo: 'i-noto:cat-face',
  author: 'Someone',
  url: 'https://happy-paws-with-nuxt-tailwindcss.netlify.app',
  github: 'https://github.com/pinegrow/happy-paws-with-nuxt-tailwindcss',
  ogImageUrl: 'og-image.jpg', // absolute url (or) from public folder
  generator: 'https://vuedesigner.com',
  defaultLocale: 'zh-cn', // default
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@vuedesigner',
  trailingSlash: false, // default
  titleSeparator: '|', // default

  navs: {
    primary: [
      {
        title: '主页',
        icon: 'i-mdi-home',
        to: '/',
      },
      {
        title: '博客',
        icon: 'i-mdi-home',
        to: '/blog',
      }
    ],
    secondary: [
      {
        title: '联系方式',
        icon: 'i-mdi-home',
        to: '/contact'
      },
      {
        title: '猫口普查名单',
        icon: 'i-mdi-home',
        to: '/list'
      }
    ],
  },
}
