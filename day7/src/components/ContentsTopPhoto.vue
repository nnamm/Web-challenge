<template>
  <!-- コンテンツ部 -->
  <div class="container mx-auto px-8 py-16 sm:px-12 sm:py-20 lg:px-32 lg:py-40">
    <div class="grid grid-cols-2 gap-6 md:gap-8 lg:grid-rows-4 lg:grid-cols-4 grid-flow-row">
      <div class="row-span-1 col-span-1 lg:row-span-2 lg:col-span-2">
        <div class="square hover-parent">
          <g-image :src="img" width="300" class="hover-child hover:opacity-50" />
        </div>
      </div>
      <div class="row-span-1 col-span-1 ">
        <div class="square hover-parent">
          <g-image :src="img" width="300" class="hover-child hover:opacity-50" />
        </div>
      </div>
      <div class="row-span-1 col-span-1">
        <div class="square hover-parent">
          <g-image :src="img" width="300" class="hover-child hover:opacity-50" />
        </div>
      </div>
      <div class="row-span-1 col-span-1">
        <div class="square hover-parent">
          <g-image :src="img" width="300" class="hover-child hover:opacity-50" />
        </div>
      </div>
      <div class="row-span-1 col-span-1">
        <div class="square hover-parent">
          <g-image :src="img" width="300" class="hover-child hover:opacity-50" />
        </div>
      </div>
      <div class="row-span-1 col-span-1">
        <div class="square hover-parent">
          <g-image :src="img" width="300" class="hover-child hover:opacity-50" />
        </div>
      </div>
      <div class="row-span-1 col-span-1">
        <div class="square hover-parent">
          <g-image :src="img" width="300" class="hover-child hover:opacity-50" />
        </div>
      </div>
      <div class="row-span-1 col-span-1 lg:row-span-2 lg:col-span-2">
        <div class="square hover-parent">
          <g-image :src="img" width="300" class="hover-child hover:opacity-50" />
        </div>
      </div>
      <div class="row-span-1 col-span-1">
        <div class="square hover-parent">
          <g-image :src="img" width="300" class="hover-child hover:opacity-50" />
        </div>
      </div>
      <div class="row-span-1 col-span-1">
        <div class="square bg-gray-200 relative">
          <div class="absolute bottom-0 right-0 pr-2 text-sm">and more...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      img: require('@/assets/images/not_published.png')
    }
  }
}
</script>

<static-query>
</static-query>

<style scoped>
.square {
  height: 0;
  padding-bottom: 100%;
}

.hover-parent {
  @apply transition;
  @apply duration-300;
  @apply ease-in-out;
  @apply bg-gray-900;
}

.hover-child {
  @apply transition;
  @apply duration-300;
  @apply ease-in-out;
}
</style>
