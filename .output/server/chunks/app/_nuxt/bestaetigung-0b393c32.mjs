import { _ as __nuxt_component_0$1, a as __nuxt_component_2, b as __nuxt_component_3 } from './Footer-1148c5d9.mjs';
import { H as Headline } from './Headline-9a68cf60.mjs';
import { useSSRContext, mergeProps, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
      title: "Vielen Dank",
      subtitle: ""
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Headline = resolveComponent("Headline");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-b mx-auto w-11/12 border-gray-400 text-lg md:w-10/12 md:max-w-screen-xl md:py-16" }, _attrs))}><section class="mx-auto w-5/6 justify-center"><div>`);
  _push(ssrRenderComponent(_component_Headline, {
    title: $data.title,
    subtitle: $data.subtitle
  }, null, _parent));
  _push(`</div></section><div class="mx-auto w-full text-center md:w-2/3"><p class="text-3xl"> Ihre Anfrage wurde erfolgreich versendet. <br>Ich werde mich in K\xFCrze bei Ihnen melden. </p><section class="pt-10 pb-12 underline hover:text-red-700 md:pb-0"><a href="https://finanzberatung-ebner.de">Zur\xFCck zur Startseite</a></section></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Bestaetigung.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    Header: __nuxt_component_0$1,
    Bestaetigung: __nuxt_component_1,
    Kontakt: __nuxt_component_2,
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
  const _component_Bestaetigung = __nuxt_component_1;
  const _component_Kontakt = __nuxt_component_2;
  const _component_Footer = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-medium" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_Bestaetigung, null, null, _parent));
  _push(ssrRenderComponent(_component_Kontakt, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/bestaetigung.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bestaetigung = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { bestaetigung as default };
//# sourceMappingURL=bestaetigung-0b393c32.mjs.map
