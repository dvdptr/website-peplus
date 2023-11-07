import { _ as __nuxt_component_0$1, a as __nuxt_component_2, b as __nuxt_component_3 } from './Footer-1148c5d9.mjs';
import { H as Headline } from './Headline-9a68cf60.mjs';
import { useSSRContext, resolveComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1 } from './mockup_smartphone_IV-1-231ec191.mjs';
import { _ as _export_sfc } from '../server.mjs';
import './nuxt-link-01469011.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$1 = {
  components: {
    Headline
  },
  data() {
    return {
      title: "Leistungen im \xDCberblick",
      subtitle: "Als unabh\xE4ngiger Finanzberater biete ich Ihnen ein breites Angebot m\xF6glicher Finanzierungsmethoden.",
      leistungenOverview: [
        {
          iconUrl: require("@/assets/svg/ok.svg"),
          headline: "Kostenloser Service"
        },
        {
          iconUrl: require("@/assets/svg/ok.svg"),
          headline: "Personalisierte Suche"
        },
        {
          iconUrl: require("@/assets/svg/ok.svg"),
          headline: "Marktabdeckung in Deutschland"
        },
        {
          iconUrl: require("@/assets/svg/ok.svg"),
          headline: "Automatische Benachrichtigung"
        },
        {
          iconUrl: require("@/assets/svg/ok.svg"),
          headline: "Unverbindliche Angebote"
        },
        {
          iconUrl: require("@/assets/svg/ok.svg"),
          headline: "Ma\xDFgeschneiderte Filtersuche"
        }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-b pylg mx-auto w-full border-gray-400 text-lg md:w-10/12 md:max-w-screen-xl" }, _attrs))}><div class="border-b border-gray-400 sm:flex sm:pb-16"><div class="mx-auto w-11/12 px-12 sm:w-1/2 sm:px-40"><section><div class=""><picture><source type="image/webp"${ssrRenderAttr("srcset", _imports_0)}><source type="image/jpeg"${ssrRenderAttr("srcset", _imports_1)}><img class="rounded-lg" alt="Portrait of a laughing family"${ssrRenderAttr("src", _imports_1)}></picture></div></section></div><div class="mx-auto w-11/12 pt-8 pb-12 text-base sm:w-1/2 sm:pt-0 sm:pb-0"><p><span class="text-xl font-bold">Ab sofort der neue Immobilien-Service: <br> Wir suchen f\xFCr Sie kostenlos nach Immobilien!</span><br><br> Mit unserer Suche bieten wir Ihnen die gr\xF6\xDFte Marktabdeckung in Deutschland mit Immobilien von 48 Zeitungen, Kleinanzeigenb\xF6rsen und Immobilien-Portalen. <span class="rounded bg-red-200 underline"> Im Schnitt finden Sie mit unseren Suchauftr\xE4gen 4x schneller eine Immobilie als mit Vergleichsl\xF6sungen.</span> F\xFCr aktuell \xFCber 220.000 online inserierte Wohnungen und H\xE4user wird automatisch der Marktwert nach Bankenstandard von Sprengnetter berechnet. Dadurch erhalten Sie mehr Sicherheit bei Ihrer Kaufentscheidung und fairere Preise. <br><br>Dar\xFCber hinaus k\xF6nnen Sie den Standort analysieren und ausschlie\xDFlich Immobilien anzeigen lassen, die optimal an Schulen, Kitas, Superm\xE4rkte und \xD6PNV angebunden sind. Falls Sie Fragen zu unserem neuen Angebot haben, kommen Sie gerne auf mich zu. <br><br></p><span class="rounded font-bold underline"> Wie kann ich den kostenlosen Immobilienservice nutzen? </span><br><br> Sie m\xF6chten sich f\xFCr den neuen Immobilienservice mit unserem Partner ImmoThink kostenfrei anmelden? Geben Sie ganz einfach Ihre gew\xFCnschten Eckdaten zur Suche in das untenstehende Formular ein und lassen Sie sich \xFCber neue Inserate informieren. </div></div><div class="mx-auto w-11/12 py-12 sm:w-1/2"><section class="mx-auto text-center"><p class="pb-4 text-2xl font-bold leading-snug sm:pb-0"> Das Formular zur Immobiliensuche </p><p class="text-base leading-snug text-gray-700"> Tragen Sie nachfolgend Ihre gew\xFCnschten Daten zur Filtersuche ein und Sie erhalten ma\xDFgeschneiderte Inserate kostenlos per eMail. </p></section><iframe scrolling="no" frameborder="0" src="https://connect.thinkimmo.com/business/widgets/customer_onboarding/welcome?aTokenWidget=ce37b062-756b-11ed-971b-2772daa22ec7" style="${ssrRenderStyle({ "height": "860px", "width": "100%" })}"></iframe></div><div class="border-t mx-auto flex w-11/12 flex-wrap items-center justify-center border-gray-400 pt-16 sm:w-full"><!--[-->`);
  ssrRenderList($data.leistungenOverview, (leistung, index) => {
    _push(`<div class="mx-2 mb-3 w-full items-center rounded-xl bg-red-100 p-2 sm:w-1/4"><div class><div class="mx-auto pb-2 text-center text-base font-bold"><img${ssrRenderAttr("src", leistung.iconUrl)} alt class="mx-auto"> ${ssrInterpolate(leistung.headline)}</div></div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Immo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    Header: __nuxt_component_0$1,
    Kontakt: __nuxt_component_2,
    Immo: __nuxt_component_1,
    Headline,
    Footer: __nuxt_component_3
  },
  head() {
    return {
      title: "Peter Ebner Finanzberatung Plus: Videoberatung"
    };
  },
  data() {
    return {
      title: "Immobilienportal",
      subtitle: "Sie suchen noch nach einer passenden Immobilie? Dann haben wir etwas f\xFCr Sie. Ganz einfach f\xFCr Sie. Ganz entspannt.",
      vorteileVideoberatung: [
        {
          text: "Wohnort unabh\xE4ngig",
          iconUrl: require("@/assets/svg/chevron-r.svg")
        },
        {
          text: "Flexible Beratungstermine",
          iconUrl: require("@/assets/svg/chevron-r.svg")
        },
        {
          text: "Bequem von Zuhause aus",
          iconUrl: require("@/assets/svg/chevron-r.svg")
        },
        {
          text: "F\xFCr Sie kostenfrei",
          iconUrl: require("@/assets/svg/chevron-r.svg")
        },
        {
          text: "Ohne Installation ausf\xFChrbar",
          iconUrl: require("@/assets/svg/chevron-r.svg")
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0$1;
  const _component_Headline = resolveComponent("Headline");
  const _component_Immo = __nuxt_component_1;
  const _component_Kontakt = __nuxt_component_2;
  const _component_Footer = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-medium" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<div class="spacing border-b border-gray-400 py-12 text-xl">`);
  _push(ssrRenderComponent(_component_Headline, {
    title: $data.title,
    subtitle: $data.subtitle
  }, null, _parent));
  _push(ssrRenderComponent(_component_Immo, null, null, _parent));
  _push(ssrRenderComponent(_component_Kontakt, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/immobilienportal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const immobilienportal = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { immobilienportal as default };
//# sourceMappingURL=immobilienportal-0b258a50.mjs.map
