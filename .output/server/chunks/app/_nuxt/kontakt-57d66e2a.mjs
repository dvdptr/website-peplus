import { _ as __nuxt_component_0$1, a as __nuxt_component_2, b as __nuxt_component_3 } from './Footer-1148c5d9.mjs';
import { H as Headline } from './Headline-9a68cf60.mjs';
import { useSSRContext, mergeProps, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import './nuxt-link-01469011.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$1 = {
  components: {
    Headline
  },
  data() {
    return {
      title: "Ich freue mich von Ihnen zu h\xF6ren",
      subtitle: "Senden Sie eine Nachricht \xFCber das beigef\xFCgte Kontaktfeld oder w\xE4hlen Sie eine der gelisteten Kontaktm\xF6glichkeiten.",
      name: "",
      email: "",
      message: ""
    };
  },
  methods: {
    // This function puts all the form fields into a FormData constructor, which we later encode with the URLSearchParams constructor
    createFormDataObj(data) {
      const formData = new FormData();
      for (const key of Object.keys(data)) {
        formData.append(key, data[key]);
      }
      return formData;
    },
    // This is our custom onSubmit function; don't forget to add `@submit.prevent="handleSubmit"` inside your <form> tag
    handleSubmit() {
      const data = {
        "form-name": "contactform",
        name: this.name,
        email: this.email,
        message: this.message
      };
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(this.createFormDataObj(data)).toString()
      }).then(() => this.$router.push("bestaetigung")).catch((error) => alert(error));
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Headline = resolveComponent("Headline");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-b mx-auto w-11/12 border-gray-400 text-lg md:w-10/12 md:max-w-screen-xl md:py-16" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Headline, {
    title: $data.title,
    subtitle: $data.subtitle
  }, null, _parent));
  _push(`<div class="justify-center pt-12 md:flex"><div class="mx-auto block w-full md:w-1/2 md:px-8"><section class="py-4"><p class="pb-1 font-bold">Home-Office</p> Finanzberatung Plus<br>Peter Ebner<br>Im Bungert 5 <br>54317 Herl <br></section><section class="py-4"><p class="pb-1 font-bold">Kontakt</p> Mobil: 0151 12 669 832 <br>e-Mail: peterebner@gmx.de </section></div><div class="w-full py-10 md:w-1/2 md:px-8 md:py-0"><form name="contactform" method="post" netlify netlify-honeypot="bot-field"><input type="hidden" name="form-name" value="contactform"><div><label for="name" class="block">Name:</label><input type="text" name="name"${ssrRenderAttr("value", $data.name)} required class="title border outline-none mb-4 w-full border-gray-300 bg-gray-100 p-2" placeholder="Ihr Name"></div><div><label for="email" class="block">Email:</label><input type="email" name="email"${ssrRenderAttr("value", $data.email)} required class="title border outline-none mb-4 w-full border-gray-300 bg-gray-100 p-2" placeholder="Ihre e-Mail"></div><div><label for="message" class="block">Nachricht:</label><textarea name="message" required class="title border outline-none mb-4 w-full border-gray-300 bg-gray-100 p-2" placeholder="Ihre Nachricht">${ssrInterpolate($data.message)}</textarea></div><button type="submit" value="Send message" class="btn border rounded cursor-pointer bg-red-700 p-1 px-4 font-bold font-semibold text-white hover:bg-red-600"> Absenden </button></form></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/KontaktComp.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    Header: __nuxt_component_0$1,
    Kontakt: __nuxt_component_2,
    KontaktComp: __nuxt_component_1,
    Footer: __nuxt_component_3
  },
  head() {
    return {
      title: "Peter Ebner Finanzberatung Plus: Kontakt"
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0$1;
  const _component_KontaktComp = __nuxt_component_1;
  const _component_Kontakt = __nuxt_component_2;
  const _component_Footer = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-medium" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_KontaktComp, null, null, _parent));
  _push(ssrRenderComponent(_component_Kontakt, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/kontakt.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kontakt = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { kontakt as default };
//# sourceMappingURL=kontakt-57d66e2a.mjs.map
