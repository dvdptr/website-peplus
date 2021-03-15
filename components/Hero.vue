<template>
  <div
    class="w-full md:max-w-screen-xl md:w-10/12 mx-auto border-b border-gray-400 md:flex pb-16 pt-6 md:pt-16 md:justify-between md:items-center"
  >
    <div class="w-11/12 md:w-1/2 mx-auto md:py-6 flex text-center md:text-left">
      <section>
        <p class="text-4xl md:text-5xl font-bold leading-tight pb-4">
          Finanzierung
          <br />leicht gemacht.
        </p>
        <p class="text-gray-800 text-lg pb-4 md:leading-snug">
          Sie benötigen individuelle Beratung für Ihre geplante Finanzierung?
          Als unabhängiger Finanzierungsspezialist bin ich Ihr Partner rund um
          die Themen Finanzierung, Finanzieren ohne Eigenkapital und
          Privatkredite im Großraum Trier, Saarbrücken und bundesweit.
        </p>
        <p class="text-gray-800 text-lg pb-6">Ich bin gerne für Sie da.</p>
        <button
          class="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded shadow"
        >
          <NuxtLink to="/kontakt">Kontaktformular</NuxtLink>
        </button>
        <button
          class="bg-white hover:bg-red-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-3"
        >
          <a href="mailto:peterebner@gmx.de" target="_blank"
            >e-Mail schreiben</a
          >
        </button>
      </section>
    </div>

    <!-- <div class="w-11/12 md:w-1/2 mx-auto pt-12 md:pt-0 flex md:pl-12">
      <div id="gufb_widget_script"></div>
      <div id="gufb_widget_content"></div>
    </div> -->
    <div class="w-11/12 md:w-1/2 md:pl-10 pl-0 pt-12 md:pt-0 mx-auto">
      <section>
        <div class=" ">
          <picture>
            <source type="image/webp" srcset="~/assets/img/familie-hero.webp" />
            <source type="image/jpeg" srcset="~/assets/img/familie-hero.jpg" />
            <img
              class="rounded-lg"
              alt="Portrait of a laughing family"
              src="~/assets/img/familie-hero.jpg"
            />
          </picture>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
