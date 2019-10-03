<template>
  <div>
    <Header />
    <Contents />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Contents from "@/components/Contents.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Contents,
    Footer
  }
};
</script>
