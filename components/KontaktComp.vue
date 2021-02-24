<template>
  <div
    class="w-11/12 md:max-w-screen-xl md:w-10/12 mx-auto text-lg border-b border-gray-400 pylg"
  >
    <section class="mx-auto justify-center">
      <div>
        <Headline :title="title" :subtitle="subtitle" />
      </div>
    </section>
    <div class="mx-auto text-center">
      <section class="py-4">
        <p class="font-bold pb-1">Home-Office</p>
        Finanzberatung Plus<br />Peter Ebner<br />Im Bungert 5 <br />54317 Herl
        <br />
      </section>
      <section class="py-4">
        <p class="font-bold pb-1">Kontakt</p>
        Mobil: 0151 12 669 832 <br />e-Mail: peterebner@gmx.de
      </section>
    </div>
    <div>
      <form name="contactus" method="post" netlify netlify-honeypot="bot-field">
        <!-- Hidden input to check for bots -->
        <input type="hidden" name="form-name" value="contactus" />
        <div>
          <label for="name" class="block">Name:</label>
          <input
            type="text"
            name="name"
            required
            class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
            placeholder="Ihr Name"
          />
        </div>
        <div>
          <label for="email" class="block">Email:</label>
          <input
            type="email"
            name="email"
            required
            class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
            placeholder="Ihre e-Mail"
          />
        </div>
        <div>
          <label for="message" class="block">Message:</label>
          <textarea
            name="message"
            required
            class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
            placeholder="Ihre Nachricht"
          ></textarea>
        </div>
        <button
          type="submit"
          value="Send message"
          class="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
        >
          Absenden
        </button>
      </form>
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
      subtitle: ""
    };
  }
};
</script>

<style></style>
