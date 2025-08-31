<script setup>
  definePageMeta({
    // layout: 'default',
    // name: 'blog',
    // alias: 'blog',
    title: '联系方式',
    description: '你可以按需选择联系方式',
    navOrder: 2,
    type: 'primary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })
</script>
<template>
  <div
    class="py-12 bg-primary-100 dark:bg-primary-700 text-primary-900 dark:text-primary-100"
  >
    <div class="flex flex-col items-center">
      <div class="px-4 text-center w-full lg:w-7/12">
        <h3 class="capitalize">联系方式</h3>
        <h6 class="uppercase">你可以按需选择联系的方式如下：</h6>
        <center>
            <p>- 小红书群组「杭高院猫猫普查」：请搜索账号 <code>@Tenktau</code>；</p>
            <p>- 内容投稿/更新/修正：请联系 <code>tenktau@foxmail.com</code>（可能仅在节假日回复）。</p>
        </center>
      </div>
    </div>
  </div>
</template>
