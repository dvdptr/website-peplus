<template>
  <div class="border-b border-gray-400">
    <section>
      <div>
        <Headline :title="title" :subtitle="subtitle" />
      </div>
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
      title: "Leistungen im Überblick",
      subtitle: "Überblick der Leistungen"
    };
  }
};
</script>

<style>
</style>