<template>
  <div>
    <div class="flex justify-center items-center bg-white">
      <g-link class="text-sm font-light p-6" to="/">
        {{ $static.metadata.siteName }}&nbsp;&copy;{{ startYear }}
        <span v-if="startYear!==year">&nbsp;-&nbsp;{{ year }}</span>
      </g-link>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      startYear: 2020  // サイトのスタート年
    }
  },
  computed: {
    year: () => {
      let dt = new Date()
      return dt.getFullYear()
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
