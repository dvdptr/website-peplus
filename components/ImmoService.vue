<template>
  <div
    class="border-b pylg mx-auto w-full border-gray-400 md:w-10/12 md:max-w-screen-xl"
  >
    <div class="mx-auto flex items-center text-center">
      <div class="mx-auto w-11/12 items-center text-center md:w-5/12">
        <section class="pb-2 text-3xl font-bold md:text-4xl">
          Sie haben Fragen?
        </section>
        <section class="text-normal pb-6 text-gray-700">
          Gerne berate ich Sie in einem persönlichen Gespräch. Nehmen Sie ganz
          unverbindlich Kontakt zu mir auf, ich freue mich von Ihnen zu hören!
        </section>
        <section class="flex justify-center leading-tight">
          <button
            class="rounded shadow bg-red-700 py-2 px-4 font-bold text-white hover:bg-red-600"
          >
            <NuxtLink to="/kontakt">Kontaktformular</NuxtLink>
          </button>
          <button
            class="border rounded shadow ml-3 flex border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 hover:bg-red-100"
          >
            <a href="mailto:peterebner@gmx.de" target="_blank"
              >e-Mail schreiben</a
            >
          </button>
        </section>
      </div>
      <!-- <section class="w-5/12">
        <img src="~/assets/img/fam1.png" />
      </section> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
