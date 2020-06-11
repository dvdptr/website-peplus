<template>
  <div class="flex justify-between border-b border-gray-400 py-8 items-center">
    <div>
      <nuxt-link to="/">
        <Logo class="h-10" />
      </nuxt-link>
    </div>
    <section class="flex items-center">
      <nav>
        <nuxt-link class="pl-6" to="/about.vue">Videoberatung</nuxt-link>
      </nav>
      <nuxt-link class="pl-6" to="/kontakt.vue">Kontakt</nuxt-link>
      <button
        class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-6"
      >Kontakt</button>
    </section>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>

<style>
</style>