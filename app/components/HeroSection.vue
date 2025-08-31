<script setup lang="ts">
  import { heroImageUrl } from '@/utils/hero'

  const heroCaption = '参与杭高院猫猫普查'
  const heroTitle = '是每一只杭高院猫猫公民应当履行的义务'
</script>
<template>
  <section class="container mx-auto pb-12 px-6">
    <BackgroundImageWrapper :image-url="heroImageUrl" class="rounded-3xl">
      <div class>
        <div class="lg:px-12 md:py-36 pb-6 pt-72 px-6 relative rounded-3xl">
          <div
            class="-mx-4 flex flex-wrap items-center mt-24 space-y-6 lg:space-y-0"
          >
            <div class="px-4 w-full md:w-8/12 xl:w-6/12">
              <h4
                class="font-bold font-serif mb-1 text-primary-600 dark:text-primary-200 uppercase"
              >
                参与杭高院猫猫普查
              </h4>
              <h1 class="capitalize leading-tight mb-2 text-white">
                是每一只杭高院猫猫公民应当履行的义务
              </h1>
              <BaseButton
                size="xl"
                label="查看名单"
                target="_blank"
                to="/list"
              >
                <div class="inline-block ml-1 p-1.5 text-lg">查看名单</div>
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImageWrapper>
  </section>
</template>
<style scoped></style>
