<template>
  <div class="spacing border-x border-gray-400 pb-8">
    <!-- <p class="text-sm text-right pb-4">Sie haben Fragen?</p> -->
    <div class="mx-auto items-center">
      <div class="mx-auto items-center pt-16">
        <nuxt-link to="/" class>
          <Logo class="mx-auto h-12" />
        </nuxt-link>
      </div>
      <div class="items-center">
        <section class="mx-auto w-full pt-12 text-center md:w-2/5">
          <p>
            Liebe/r Besucher/in, diese Webseite befindet sich derzeit im Umbau.
            Sie erreichen mich wie gewohnt unter den folgenden Angaben:
          </p>
          <p class="pt-5 text-center">Mobil: 0151 12 669 832</p>
          <p class="text-center">
            e-Mail:
            <a href="mailto:peterebner@gmx.de">peterebner@gmx.de</a>
          </p>
          <div class="pt-12">
            <img
              src="@/assets/img/peterEbner.jpg"
              alt
              class="mx-auto h-64 rounded-md"
            />
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
    Logo,
  },
  head() {
    return {
      title: "Peter Ebner Finanzberatung Plus",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Peter Ebner Finanzberatung Plus",
        },
      ],
    };
  },
};
</script>

<style></style>
