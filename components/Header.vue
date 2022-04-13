<template>
  <div id="header" class="py-2 border-t-4 border-red-700">
    <!-- Header NavBar total -->
    <div
      class="w-11/12 md:max-w-screen-xl md:w-10/12 mx-auto md:border-b border-gray-400 pb-2 pt-2"
    >
      <nav
        id="nav"
        class="w-full flex items-center justify-between flex-wrap py-6"
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
            class="flex items-center px-3 py-2 border rounded text-gray-800 border-gray-700 hover:text-gray-700 hover:border-gray-700"
          >
            <p class="text-xs pr-2">MENÜ</p>
            <svg
              class="fill-current h-3 w-3"
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
          class="w-full flex-grow lg:flex lg:items-center lg:w-auto text-gray-800 text-center md:text-right"
        >
          <div class="lg:flex-grow">
            <!-- RouterLink Deutsch -->
            <nuxt-link
              class="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-900 px-2 py-2 border-b border-gray-300 md:border-none pb-2 md:pb-0"
              to="/videoberatung"
              >Videoberatung</nuxt-link
            >

            <nuxt-link
              class="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-900 px-2 py-2 border-b border-gray-300 md:border-none pb-2 md:pb-0"
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
    Logo
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    handleClick() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style></style>
