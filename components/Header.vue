<template>
  <div id="header" class="">
    <div class="bg-red-700">
      <p class="mx-auto text-center text-xs font-bold text-white">
        JETZT NEU FÜR SIE: Der kostenlose Immobilienservice!
      </p>
    </div>
    <!-- Header NavBar total -->
    <div
      class="md:border-b mx-auto w-11/12 border-gray-400 pb-2 pt-2 md:w-10/12 md:max-w-screen-xl"
    >
      <nav
        id="nav"
        class="flex w-full flex-wrap items-center justify-between py-6"
      >
        <!-- NavBar Logo -->
        <div>
          <nuxt-link to="/">
            <Logo class="h-10 md:h-12" />
          </nuxt-link>
        </div>
        <!-- Header Hamburger Icon -->
        <div class="block lg:hidden">
          <button
            @click="handleClick"
            class="border rounded flex items-center border-gray-700 px-3 py-2 text-gray-800 hover:border-gray-700 hover:text-gray-700"
          >
            <p class="pr-2 text-xs">MENÜ</p>
            <svg
              class="h-3 w-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <!-- RouterLinks DE PL RO RU -->
        <div
          :class="isOpen ? 'block' : 'hidden'"
          class="flex-grow w-full text-center text-gray-800 md:text-right lg:flex lg:w-auto lg:items-center"
        >
          <div class="lg:flex-grow">
            <!-- RouterLink Deutsch -->
            <nuxt-link
              class="border-b mt-4 block border-gray-300 px-2 py-2 pb-2 hover:text-gray-900 md:border-none md:pb-0 lg:mt-0 lg:inline-block"
              to="/immobilienportal"
              >Immobilienportal
              <span class="rounded bg-red-600 p-1 text-xs text-white"
                >NEU!</span
              ></nuxt-link
            >
            <nuxt-link
              class="border-b mt-4 block border-gray-300 px-2 py-2 pb-2 hover:text-gray-900 md:border-none md:pb-0 lg:mt-0 lg:inline-block"
              to="/videoberatung"
              >Videoberatung</nuxt-link
            >

            <nuxt-link
              class="border-b mt-4 block border-gray-300 px-2 py-2 pb-2 hover:text-gray-900 md:border-none md:pb-0 lg:mt-0 lg:inline-block"
              to="/kontakt"
              >Kontakt</nuxt-link
            >
          </div>
          <!-- <div>
            <a
              href="https://ebner-finanzberatung.typeform.com/to/ZdjW8J"
              class="inline-block fontSans text-sm px-4 py-2 leading-none border rounded text-gray-700 border-gray-700 hover:border-transparent hover:text-gray-100 hover:bg-gray-700 mt-4 lg:mt-0 mr-4"
              >Kontakt</a
            >
          </div> -->
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    handleClick() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style></style>
