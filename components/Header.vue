<template>
  <div class="spacing border-b border-gray-400 pb-8 pt-8 max-w-screen-xl">
    <!-- <p class="text-sm text-right pb-4">Sie haben Fragen?</p> -->
    <div class="flex justify-between items-center">
      <div>
        <nuxt-link to="/">
          <Logo class="h-10" />
        </nuxt-link>
      </div>
      <div class="items-center text-right">
        <section class="flex items-center">
          <nav>
            <nuxt-link class="pl-6" to="/videoberatung"
              >Videoberatung</nuxt-link
            >
          </nav>
          <nuxt-link class="pl-6" to="/kontakt">Kontakt</nuxt-link>
          <!-- <button
            class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-6"
          >Kontakt</button> -->
        </section>
      </div>
    </div>
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

<style></style>
