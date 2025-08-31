<script setup>
  definePageMeta({
    // layout: 'default',
    // name: 'blog',
    // alias: 'blog',
    title: '名单',
    description: '猫猫普查结果名单！',
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
        <h3 class="capitalize">猫猫普查名单</h3>
        <h6 class="uppercase">内容可能过时或有误，欢迎随时提交更新！</h6>
        <!-- <p class="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
          congue tortor.
        </p> -->
      </div>
    </div>
    <div class="-mt-4 mx-auto pt-8 px-4 relative">
      <div class="-mx-4 flex flex-wrap items-center justify-center mb-4">
        <PetList />
      </div>
    </div>
  </div>
</template>
