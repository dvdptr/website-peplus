<template>
  <div
    class="w-11/12 md:max-w-screen-xl md:w-10/12 mx-auto text-lg border-b border-gray-400 md:py-16"
  >
    <section class="mx-auto justify-center w-5/6">
      <div>
        <Headline :title="title" :subtitle="subtitle" />
      </div>
    </section>
    <div class="md:flex justify-center">
      <div class="mx-auto w-full md:w-1/2 md:px-8 block">
        <section class="py-4">
          <p class="font-bold pb-1">Home-Office</p>
          Finanzberatung Plus<br />Peter Ebner<br />Im Bungert 5 <br />54317
          Herl
          <br />
        </section>
        <section class="py-4">
          <p class="font-bold pb-1">Kontakt</p>
          Mobil: 0151 12 669 832 <br />e-Mail: peterebner@gmx.de
        </section>
      </div>
      <div class="w-full md:w-1/2 md:px-8 md:py-0 py-10">
        <!-- Kontakt Form -->
        <form
          name="contactform"
          method="post"
          netlify
          netlify-honeypot="bot-field"
        >
          <!-- Hidden input to check for bots -->
          <input type="hidden" name="form-name" value="contactform" />
          <div>
            <label for="name" class="block">Name:</label>
            <input
              type="text"
              name="name"
              required
              class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none w-full"
              placeholder="Ihr Name"
            />
          </div>
          <div>
            <label for="email" class="block">Email:</label>
            <input
              type="email"
              name="email"
              required
              class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none w-full"
              placeholder="Ihre e-Mail"
            />
          </div>
          <div>
            <label for="message" class="block">Nachricht:</label>
            <textarea
              name="message"
              required
              class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none w-full"
              placeholder="Ihre Nachricht"
            ></textarea>
          </div>
          <button
            type="submit"
            value="Send message"
            class="btn border bg-red-700 hover:bg-red-600 text-white font-bold p-1 px-4 font-semibold cursor-pointer rounded"
          >
            Absenden
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Headline from "@/components/elements/Headline.vue";

export default {
  components: {
    Headline
  },
  data() {
    return {
      title: "Ich freue mich von Ihnen zu hören",
      subtitle:
        "Senden Sie eine Nachricht über das beigefügte Kontaktfeld oder wählen Sie eine der gelisteten Kontaktmöglichkeiten."
    };
  }
};
</script>

<style></style>
