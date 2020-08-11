<template>
  <div class="spacing border-x border-gray-400 pb-8 pt-8">
    <!-- <p class="text-sm text-right pb-4">Sie haben Fragen?</p> -->
    <div class="mx-auto items-center">
      <div class="pt-16 mx-auto items-center">
        <nuxt-link to="/" class>
          <Logo class="h-12 mx-auto" />
        </nuxt-link>
      </div>
      <div class="items-center">
        <section class="text-center w-2/5 mx-auto pt-12">
          <p>Liebe/r Besucher/in, diese Webseite befindet sich derzeit im Umbau. Sie erreichen mich wie gewohnt unter den folgenden Angaben:</p>
          <p class="pt-5 text-center">Mobil: 0151 12 669 832</p>
          <p class="text-center">
            e-Mail:
            <a href="mailto:peterebner@gmx.de">peterebner@gmx.de</a>
          </p>
          <div class="pt-12">
            <img src="@/assets/img/peterEbner.jpg" alt class="rounded-md mx-auto h-64" />
          </div>
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

<style>
</style>