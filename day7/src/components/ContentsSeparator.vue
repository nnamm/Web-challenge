<template>
  <!-- ななめ背景部 -->
  <div class="bg-blue-200 h-56 hoverflow-hidden">
    <div :class="tiltClass + '-parent'">
      <div :class="tiltClass + '-child'">
        <p class="text-gray-800 text-lg font-light text-center pt-20">- {{ contentsTitle }} -</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { 
    contentsTitle: String,
    tiltMode: String        // left:左下がり、right:右下がり、左記以外:
 },
 computed: {
    tiltClass: (e) => {
      if (e.tiltMode === 'left') {
        return 'tilt-mode1'
      } else if (e.tiltMode === 'right') {
        return 'tilt-mode2'
      } else {
        return 'tilt-mode1'
      }
    }
  }
}
</script>

<style>
.tilt-mode1-parent {
  @apply bg-white;
  @apply h-56;
  @apply transform;
  @apply origin-top-right;
  @apply -skew-y-3;
  @apply shadow-sm;
}

.tilt-mode1-child {
  @apply transform;
  @apply skew-y-3;
}

.tilt-mode2-parent {
  @apply bg-white;
  @apply h-56;
  @apply transform;
  @apply origin-top-left;
  @apply skew-y-3;
  @apply shadow-sm;
}

.tilt-mode2-child {
  @apply transform;
  @apply -skew-y-3;
}
</style>
