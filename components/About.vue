<template>
  <div
    class="border-b pylg mx-auto w-full border-gray-400 md:w-10/12 md:max-w-screen-xl"
  >
    <section class="mx-auto w-11/12">
      <h1>Gemeinsam ans Ziel</h1>
      <p
        class="mx-auto py-4 text-center text-lg text-gray-800 sm:w-3/4 md:leading-snug"
      >
        Seit mehr als 30 Jahren übe ich den Beruf des Finanzberaters mit Freude
        aus. Zu einer erfolgreichen Beratung gehört eine Begegnung auf
        Augenhöhe. Hierzu berate ich zu umfassenden Möglichkeiten einer
        Finanzierung und übersetze komplexe Vorgänge in nachvollziehbare
        Einzelschritte. Ihr Finanzierungsvorhaben begleite ich im Großraum
        Trier, Saarbrücken sowie bundesweit von der Planung bis zur Umsetzung
        und stehe bei Fragen sowohl persönlich, telefonisch wie auch
        überregional per Videoberatung zur Verfügung.
      </p>
      <div class>
        <picture>
          <source type="image/webp" srcset="~/assets/img/peterEbner.webp" />
          <source type="image/jpeg" srcset="~/assets/img/peterEbner.jpg" />
          <img
            src="~/assets/img/peterEbner.jpg"
            alt="Portrait of Peter Ebner"
            class="mx-auto my-10 w-56 rounded-md"
          />
        </picture>
      </div>
      <section class="m-auto text-center">
        <p>Peter Ebner</p>
        <p>Bankkaufmann & Finanzierungsspezialist</p>
      </section>
    </section>
  </div>
</template>

<script>
import Headline from "@/components/elements/Headline.vue";

export default {
  components: {
    Headline,
  },
};
</script>

<style></style>
