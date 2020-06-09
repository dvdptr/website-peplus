<template>
  <div>
    <section class="text-2xl border-b border-gray-400">
      <Headline :title="title" :subtitle="subtitle" />
    </section>
  </div>
</template>

<script>
import Headline from "@/components/elements/Headline.vue";

export default {
  components: {
    Headline
  },
  data() {
    return {
      title: "Partner im Netzwerk",
      subtitle: "Überblick der Partner"
    };
  }
};
</script>

<style>
</style>