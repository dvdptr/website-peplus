<template>
  <div
    class="pylg border-b mx-auto w-full border-gray-400 py-6 md:w-10/12 md:max-w-screen-xl md:py-10"
  >
    <div class="mx-auto flex-wrap items-center justify-between md:flex">
      <div class="w-full sm:w-1/2">
        <section class="mx-auto w-10/12 text-center text-gray-800 md:text-left">
          <p
            class="pb-4 text-xl font-black leading-tight text-red-700 md:text-xl"
          >
            <span class="rounded border-2 border-red-700 px-2 py-1">
              JETZT NEU FÜR SIE</span
            >
          </p>
          <p class="mx-auto pb-4 pb-2 text-lg text-xl font-black text-black">
            Ab sofort der neue Immobilien-Service: <br />
            <span class="font-normal leading-snug"
              >Wir suchen für Sie
              <span class="rounded bg-red-200 px-1">kostenlos</span> nach
              Immobilien</span
            >
          </p>
          <p class="text-base">
            Sie suchen noch nach einer Immobilie und sind mit der Vielzahl an
            Suchmöglichkeiten überfordert? Kein Problem – mit unserem neuen
            Service können Sie Ihre individuelle Suche gebündelt ausführen
            lassen. Wir suchen für Sie auf sämtlichen Plattformen und
            informieren Sie über Angebote.
          </p>
          <section class="py-8">
            <p class="font-bold">Kostenlos</p>
            <p>
              Der neue Immobilienservice steht Ihnen völlig kostenlos zur
              Verfügung. Melden Sie sich ganz einfach über das Online-Formular
              an und erhalten Sie maßgeschneiderte Angebote Ihrer Suche
              entsprechend.
            </p>
            <p class="pt-4 font-bold">Individualisiert</p>
            <p>
              Sie können Ihre Suche mit einer Vielzahl an Filtern maßgenau an
              Ihre Bedürfnisse anpassen. Jene Angebote, die Ihren Suchkriteren
              entsprechen, bekommen Sie kostenlos per eMail zugesendet.
            </p>
          </section>
          <button
            class="rounded shadow bg-red-700 py-2 px-4 font-bold text-white hover:bg-red-600"
          >
            <NuxtLink to="/immobilienportal">Zum Formular</NuxtLink>
          </button>
        </section>
      </div>
      <div class="w-full sm:w-1/2">
        <section class="mx-auto w-1/2 pt-12 md:w-1/2 md:pt-0">
          <picture>
            <source
              type="image/webp"
              srcset="~/assets/img/mockup_smartphone_IV-1.webp"
            />
            <source
              type="image/jpeg"
              srcset="~/assets/img/mockup_smartphone_IV-1.jpg"
            />
            <img
              class="rounded-lg"
              alt="Portrait of a laughing family"
              src="~/assets/img/mockup_smartphone_IV-1.jpg"
            />
          </picture>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
