import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0$1, a as __nuxt_component_2$1, b as __nuxt_component_3$1 } from './Footer-1148c5d9.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-01469011.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { H as Headline } from './Headline-9a68cf60.mjs';
import { _ as _imports_0$2, a as _imports_1$2 } from './mockup_smartphone_IV-1-231ec191.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0$1 = "" + buildAssetsURL("familie-hero.a4e8c7b4.webp");
const _imports_1$1 = "" + buildAssetsURL("familie-hero.902ffdf4.jpg");
const _sfc_main$7 = {
  data() {
    return {
      title: "Leistungen im \xDCberblick",
      subtitle: "Als unabh\xE4ngiger Finanzberater biete ich Ihnen ein breites Angebot m\xF6glicher Finanzierungsmethoden.",
      leistungenOverview: [
        {
          iconUrl: require("@/assets/svg/ok.svg"),
          headline: "Baufinanzierung & Anschlussfinanzierung"
        },
        {
          iconUrl: require("@/assets/svg/ok.svg"),
          headline: "Finanzieren ohne Eigenkapital"
        },
        {
          iconUrl: require("@/assets/svg/ok.svg"),
          headline: "Privatkredite & Zinsoptimierung"
        }
      ]
    };
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-b pb-16 pt-6 md:pt-16" }, _attrs))}><div class="mx-auto w-full border-gray-400 md:flex md:w-10/12 md:max-w-screen-xl md:items-center md:justify-between"><div class="mx-auto flex w-11/12 text-center md:w-1/2 md:py-6 md:text-left"><section><p class="pb-4 text-4xl font-bold leading-tight md:text-5xl"> Finanzierung <br>leicht gemacht. </p><p class="pb-4 text-lg text-gray-800 md:leading-snug"> Sie ben\xF6tigen individuelle Beratung f\xFCr Ihre geplante Finanzierung? Als unabh\xE4ngiger Finanzierungsspezialist bin ich Ihr Partner rund um die Themen Finanzierung, Finanzieren ohne Eigenkapital und Privatkredite im Gro\xDFraum Trier, Saarbr\xFCcken und bundesweit. </p><p class="pb-6 text-lg text-gray-800">Ich bin gerne f\xFCr Sie da.</p><button class="rounded shadow bg-red-700 py-2 px-4 font-bold text-white hover:bg-red-600">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/kontakt" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Kontaktformular`);
      } else {
        return [
          createTextVNode("Kontaktformular")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</button><button class="border rounded shadow ml-3 border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 hover:bg-red-100"><a href="mailto:peterebner@gmx.de" target="_blank">e-Mail schreiben</a></button></section></div><div class="mx-auto w-11/12 pl-0 pt-12 md:w-1/2 md:pl-10 md:pt-0"><section><div class=""><picture><source type="image/webp"${ssrRenderAttr("srcset", _imports_0$1)}><source type="image/jpeg"${ssrRenderAttr("srcset", _imports_1$1)}><img class="rounded-lg" alt="Portrait of a laughing family"${ssrRenderAttr("src", _imports_1$1)}></picture></div></section></div></div><div class="gr mx-auto grid w-11/12 gap-2 border-gray-400 pt-16 sm:w-10/12 sm:grid-cols-3 sm:gap-8"><!--[-->`);
  ssrRenderList($data.leistungenOverview, (leistung, index2) => {
    _push(`<div class="rounded-xl bg-red-100 p-2"><div class><div class="mx-auto pb-2 text-center text-base font-bold"><img${ssrRenderAttr("src", leistung.iconUrl)} alt class="mx-auto"> ${ssrInterpolate(leistung.headline)}</div></div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _imports_0 = "" + buildAssetsURL("peterEbner.2f2060d3.webp");
const _imports_1 = "" + buildAssetsURL("peterEbner.6ce6f3aa.jpg");
const _sfc_main$6 = {
  components: {
    Headline
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-b pylg mx-auto w-full border-gray-400 md:w-10/12 md:max-w-screen-xl" }, _attrs))}><section class="mx-auto w-11/12"><h1>Gemeinsam ans Ziel</h1><p class="mx-auto py-4 text-center text-lg text-gray-800 sm:w-3/4 md:leading-snug"> Seit mehr als 30 Jahren \xFCbe ich den Beruf des Finanzberaters mit Freude aus. Zu einer erfolgreichen Beratung geh\xF6rt eine Begegnung auf Augenh\xF6he. Hierzu berate ich zu umfassenden M\xF6glichkeiten einer Finanzierung und \xFCbersetze komplexe Vorg\xE4nge in nachvollziehbare Einzelschritte. Ihr Finanzierungsvorhaben begleite ich im Gro\xDFraum Trier, Saarbr\xFCcken sowie bundesweit von der Planung bis zur Umsetzung und stehe bei Fragen sowohl pers\xF6nlich, telefonisch wie auch \xFCberregional per Videoberatung zur Verf\xFCgung. </p><div class><picture><source type="image/webp"${ssrRenderAttr("srcset", _imports_0)}><source type="image/jpeg"${ssrRenderAttr("srcset", _imports_1)}><img${ssrRenderAttr("src", _imports_1)} alt="Portrait of Peter Ebner" class="mx-auto my-10 w-56 rounded-md"></picture></div><section class="m-auto text-center"><p>Peter Ebner</p><p>Bankkaufmann &amp; Finanzierungsspezialist</p></section></section></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pylg border-b mx-auto w-full border-gray-400 py-6 md:w-10/12 md:max-w-screen-xl md:py-10" }, _attrs))}><div class="mx-auto items-center justify-between md:flex"><div class="w-full md:w-1/2"><section class="mx-auto w-10/12 text-center text-gray-800 md:text-left"><p class="mx-auto pb-4 pb-2 text-lg font-black text-black"> Unabh\xE4ngige Beratung </p><p class="text-base"> Als unabh\xE4ngiger Finanzberater ist es mir m\xF6glich aus einer Vielzahl von Finanzierungs-Anbietern zu w\xE4hlen. Somit erhalten Sie stets das bestm\xF6gliche Angebot. Damit sparen Sie sich viel Zeit und erhalten individuelle Angebote unkompliziert aus einer Hand. </p></section></div><section class="w-full pt-12 md:w-1/2 md:pt-0"><p class="mx-auto w-11/12 text-center text-xl font-black leading-tight text-red-700 md:text-2xl"> \xBB Sie k\xF6nnen sich von 20 Banken beraten lassen, oder einfach gleich zu mir kommen. \xAB </p></section></div><div class="mx-auto items-center pt-12 md:w-3/4 md:pt-16"><div id="pewl"></div><script type="text/javascript" src="https://www.provenexpert.com/widget/landing_finanzberatung-plus.js?feedback=1&amp;avatar=1&amp;competence=1&amp;style=white" async><\/script><link rel="stylesheet" type="text/css" href="https://www.provenexpert.com/css/widget_landing.css" media="screen,print"></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Claim.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {
  components: {
    Headline
  },
  data() {
    return {
      title: "Kundenbewertungen",
      subtitle: "Die Zufriedenheit meiner Kunden steht an oberster Stelle. Ich nehme mir Zeit, ihre individuellen Bed\xFCrfnisse und Ziele zu verstehen, um ihnen die bestm\xF6gliche Beratung zu bieten. Lesen Sie hier eine Auswahl meiner Bewertungen.",
      leistungenLeft: [
        {
          text: "Zun\xE4chst einmal herzlichen Dank an Herrn Ebner und seinen Mitarbeiter Herrn Schuster! Wir kannten Herrn Ebner bereits aus fr\xFCheren Zeiten als angestellten Berater. Als wir erfuhren, dass er nun mit Finanzberatung PLUS selbstst\xE4ndig ist, war f\xFCr uns klar, dass wir wieder zu ihm m\xF6chten! Und auch dieses Mal f\xFChlten und f\xFChlen uns immernoch in den besten H\xE4nden. Herr Ebner nimmt sich Zeit f\xFCr die Beratung und steht bei allen Anliegen und Fragen mit Rat und Tat zur Seite. Man wird allumfassend beraten und unterst\xFCtzt. Die Kommunikation mit Banken, die Beantragung etc. \xFCbernimmt Herr Ebner und wenn es notwendig ist, auch mit dem n\xF6tigen Nachdruck. :-) Selbst nach Auszahlung des Kredites steht Herr Ebner jederzeit zur Verf\xFCgung, k\xFCmmert sich um weitere Auszahlungen etc. Hier steht der Kunde absolut im Mittelpunkt! Wir hoffen, dass Herr Ebner uns noch lange als Berater zur Seite steht und k\xF6nnen die Finanzberatung PLUS nur jedem ans Herz legen, der sich bei Finanz- und Kreditfragen gut aufgehoben und ernst genommen f\xFChlen m\xF6chte! Vielen lieben Dank",
          name: "Andre & Jasmin",
          rating: "\u2605\u2605\u2605\u2605\u2605"
        },
        {
          text: "Wir haben Herrn Ebner selbst von einem Freund empfohlen bekommen. TOP!! Ein sehr sympathischer Mensch! Wir sind mehr als zufrieden. Wir k\xF6nnen Ihn auch nur weiterempfehlen. Finanzierungsablauf schnell und problemos. Man kann Ihn jederzeit erreichen und auch mehrmals nachfragen wenn man etwas nicht verstanden hat. Vielen Dank f\xFCr Ihre Zeit, Geduld und M\xFChe",
          name: "Frau Und Herr Chalil",
          rating: "\u2605\u2605\u2605\u2605\u2605"
        },
        {
          text: "Beratung mit Herrn Ebner war 1A. Dies schon zum wiederholten Male. Finanzierungsabwicklung schnell und problemlos, jederzeit erreichbar. So w\xFCnscht man sich eine Finanzberatung. Abschluss absolut zu meiner Zufriedenheit. Kann ich nur empfehlen und w\xFCrde dies wieder in Anspruch nehmen. F\xFCr mich g\xE4b es keine Alternantive.",
          name: "Herr Glaubitz",
          rating: "\u2605\u2605\u2605\u2605\u2605"
        }
      ],
      leistungenRight: [
        {
          text: "Absolut empfehlenswert. Super schnell, unglaublich kompetent, sehr engagiert. Der Kunde steht immer im Fokus. Danke!",
          name: "Frau Bemsz-Jakubowska & Herr Jakubowski",
          rating: "\u2605\u2605\u2605\u2605\u2605"
        },
        {
          text: "Herr Ebner hat uns ein ganzes Jahr auf unserer Suche nach unserem Traumhaus und der anschlie\xDFenden Finanzierung begleitet. Wir konnten ihn jederzeit anrufen und er hat sich auch am Wochenende um alle anfallenden Fragen gek\xFCmmert. Gerade in der aktuell schwierigen Immobiliensituation, gepaart mit immer steigenderen Zinsen, hat Herr Ebner das absolut beste Finanzierungsangebot f\xFCr uns gefunden und einen unkomplizierten und immer zuverl\xE4ssigen Kontakt mit allen Beteiligten f\xFCr uns erm\xF6glicht. Wir haben ihn schon einigen Freunden empfohlen und w\xFCrden das auch immer wieder tun. An dieser Stelle auch nochmal ein ganz gro\xDFes Dankesch\xF6n f\xFCr die tolle Arbeit!",
          name: "Frau Schmitt",
          rating: "\u2605\u2605\u2605\u2605\u2605"
        },
        {
          text: "Ich habe in Herrn Ebner einen sehr freundlichen und vor allem einen \xFCberaus kompetenten Berater, den man so bei vielen Banken nicht findet, gefunden. Er kennt sich auch sehr gut in den KfW Programmen aus und findet f\xFCr den Kunden, dass f\xFCr ihn, passende Konzept. Da er nicht an eine bestimmte Bank gebunden ist hat man so die M\xF6glichkeit an die g\xFCnstigsten Konditionen und F\xF6rderprogamme zu kommen. Die Beratung bei Herrn Ebner ist kostenlos. Ich kann Ihnen Herrn Ebner sehr empfehlen.",
          name: "Frau Bauer",
          rating: "\u2605\u2605\u2605\u2605\u2605"
        }
      ]
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Headline = resolveComponent("Headline");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-b pylg mx-auto w-full border-gray-400 text-lg md:w-10/12 md:max-w-screen-xl" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Headline, {
    title: $data.title,
    subtitle: $data.subtitle
  }, null, _parent));
  _push(`<div class="flex flex-wrap justify-between"><section class="px-4 pt-4 md:w-1/2 md:px-0 md:pr-8"><!--[-->`);
  ssrRenderList($data.leistungenLeft, (leistung, index2) => {
    _push(`<div><div class="border-b-2 pb-6 pt-6"><section class="text-xl font-bold text-gray-800">\xBB</section><div class="text-sm leading-snug text-gray-800">${ssrInterpolate(leistung.text)}</div><section class="pb-2 text-xl font-bold text-gray-800">\xAB</section><div class="text-lg leading-snug text-yellow-500">${ssrInterpolate(leistung.rating)}</div><div class="pb-2 text-sm leading-snug text-gray-800">${ssrInterpolate(leistung.name)}</div></div></div>`);
  });
  _push(`<!--]--></section><section class="float-right px-4 pt-4 md:w-1/2 md:px-0 md:pl-8"><!--[-->`);
  ssrRenderList($data.leistungenRight, (leistung, index2) => {
    _push(`<div><div class="border-b-2 pb-6 pt-6"><section class="text-xl font-bold text-gray-800">\xBB</section><div class="text-sm leading-snug text-gray-800">${ssrInterpolate(leistung.text)}</div><section class="pb-2 text-xl font-bold text-gray-800">\xAB</section><div class="text-lg leading-snug text-yellow-500">${ssrInterpolate(leistung.rating)}</div><div class="pb-2 text-sm leading-snug text-gray-800">${ssrInterpolate(leistung.name)}</div></div></div>`);
  });
  _push(`<!--]--></section></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Testimonials.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pylg border-b mx-auto w-full border-gray-400 py-6 md:w-10/12 md:max-w-screen-xl md:py-10" }, _attrs))}><div class="mx-auto flex-wrap items-center justify-between md:flex"><div class="w-full sm:w-1/2"><section class="mx-auto w-10/12 text-center text-gray-800 md:text-left"><p class="pb-4 text-xl font-black leading-tight text-red-700 md:text-xl"><span class="rounded border-2 border-red-700 px-2 py-1"> JETZT NEU F\xDCR SIE</span></p><p class="mx-auto pb-4 pb-2 text-lg text-xl font-black text-black"> Ab sofort der neue Immobilien-Service: <br><span class="font-normal leading-snug">Wir suchen f\xFCr Sie <span class="rounded bg-red-200 px-1">kostenlos</span> nach Immobilien</span></p><p class="text-base"> Sie suchen noch nach einer Immobilie und sind mit der Vielzahl an Suchm\xF6glichkeiten \xFCberfordert? Kein Problem \u2013 mit unserem neuen Service k\xF6nnen Sie Ihre individuelle Suche geb\xFCndelt ausf\xFChren lassen. Wir suchen f\xFCr Sie auf s\xE4mtlichen Plattformen und informieren Sie \xFCber Angebote. </p><section class="py-8"><p class="font-bold">Kostenlos</p><p> Der neue Immobilienservice steht Ihnen v\xF6llig kostenlos zur Verf\xFCgung. Melden Sie sich ganz einfach \xFCber das Online-Formular an und erhalten Sie ma\xDFgeschneiderte Angebote Ihrer Suche entsprechend. </p><p class="pt-4 font-bold">Individualisiert</p><p> Sie k\xF6nnen Ihre Suche mit einer Vielzahl an Filtern ma\xDFgenau an Ihre Bed\xFCrfnisse anpassen. Jene Angebote, die Ihren Suchkriteren entsprechen, bekommen Sie kostenlos per eMail zugesendet. </p></section><button class="rounded shadow bg-red-700 py-2 px-4 font-bold text-white hover:bg-red-600">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/immobilienportal" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Zum Formular`);
      } else {
        return [
          createTextVNode("Zum Formular")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</button></section></div><div class="w-full sm:w-1/2"><section class="mx-auto w-1/2 pt-12 md:w-1/2 md:pt-0"><picture><source type="image/webp"${ssrRenderAttr("srcset", _imports_0$2)}><source type="image/jpeg"${ssrRenderAttr("srcset", _imports_1$2)}><img class="rounded-lg" alt="Portrait of a laughing family"${ssrRenderAttr("src", _imports_1$2)}></picture></section></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ClaimImmoService.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  components: {
    Headline
  },
  data() {
    return {
      title: "Leistungen im \xDCberblick",
      subtitle: "Als unabh\xE4ngiger Finanzberater biete ich Ihnen ein breites Angebot m\xF6glicher Finanzierungsmethoden.",
      leistungenOverview: [
        {
          //   iconUrl: require("@/assets/svg/chevron-r.svg"),
          headline: "Baufinanzierung",
          text: "Sie m\xF6chten eine Wohnung oder ein Haus kaufen und ben\xF6tigen hierzu eine Finanzierung? Oder haben Sie konkrete Fragen zu Konditionen oder H\xF6he der monatlichen Rate? Gerne berate ich Sie rund um das Thema Baufinanzierung."
        },
        {
          //   iconUrl: require("@/assets/svg/chevron-r.svg"),
          headline: "Finanzieren ohne Eigenkapital",
          text: "Baufinanzierungen ohne eigene Mittel (Eigenkapital) werden immer h\xE4ufiger nachgefragt. Dabei erm\xF6glicht eine Kombination aus Eigenkapital-Ersatzdarlehen und Baufinanzierung den Start in die eigenen vier W\xE4nde. Wir k\xF6nnen das erm\xF6glichen."
        },
        {
          //   iconUrl: require("@/assets/svg/chevron-r.svg"),
          headline: "Privatkredit",
          text: "Sie ben\xF6tigen einen Privatkredit zur freien Verwendung? Oder m\xF6chten Sie f\xFCr einen bestehenden Kredit die Zinsen verbessern? Erkundigen Sie sich nach Sondertilgungen und zinsg\xFCnstigen Darlehen verschiedener Banken. Gerne helfe ich Ihnen weiter."
        },
        {
          //   iconUrl: require("@/assets/svg/chevron-r.svg"),
          headline: "Anschlussfinanzierung",
          text: "Ihre Zinsbindung l\xE4uft bald aus und eine Restschuld ist noch vorhanden? Profitieren Sie von einer ma\xDFgeschneiderten L\xF6sung f\xFCr Ihre Weiterfinanzierung oder sichern Sie sich schon heute Ihren Zinssatz f\xFCr sp\xE4ter (Forward-Darlehen)."
        },
        {
          //   iconUrl: require("@/assets/svg/chevron-r.svg"),
          headline: "Versicherungen",
          text: "Egal ob Berufsunf\xE4higkeitsschutz, Sachversicherungen oder Rentenversicherung \u2013 Vorsorge ist wichtig! Erfahren Sie mehr rund um das Thema Absicherungen mit Hinblick auf Ihre pers\xF6nliche Situation."
        },
        {
          //   iconUrl: require("@/assets/svg/chevron-r.svg"),
          headline: "Individuelle Beratung",
          text: "Gerne unterst\xFCtze ich Sie auch in schwierigen F\xE4llen einer Finanzierung, die bspw. bei Ihrer Hausbank abgelehnt wurde. Nehmen Sie hierzu ganz einfach unverbindlich Kontakt auf und lassen Sie uns gemeinsam nach einer L\xF6sung suchen."
        }
      ]
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Headline = resolveComponent("Headline");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-b pylg mx-auto w-full border-gray-400 text-lg md:w-10/12 md:max-w-screen-xl" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Headline, {
    title: $data.title,
    subtitle: $data.subtitle
  }, null, _parent));
  _push(`<div class="flex flex-wrap justify-center pt-12"><!--[-->`);
  ssrRenderList($data.leistungenOverview, (leistung, index2) => {
    _push(`<div class="border mx-4 mb-3 w-full rounded-sm border-gray-500 p-4 md:w-5/12"><div class><div class="pb-2 font-bold"><img${ssrRenderAttr("src", leistung.iconUrl)} alt class> ${ssrInterpolate(leistung.headline)}</div><div class="pb-2 text-sm leading-snug text-gray-800">${ssrInterpolate(leistung.text)}</div><a href="mailto:peterebner@gmx.de" class="text-sm text-red-800 hover:font-bold">Termin vereinbaren \u2192</a></div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Leistungen.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: {
    Headline
  },
  data() {
    return {
      title: "Partner im Netzwerk",
      subtitle: "Die besten Konditionen unterschiedlicher Anbieter erhalten Sie bei mir aus einer Hand. Sie profitieren von einem weitgespannten Netzwerk.",
      netzwerkLogos: [
        { imageUrl: require("@/assets/svg/partner-logos/Allianz.svg") },
        { imageUrl: require("@/assets/svg/partner-logos/Banco_Santander.svg") },
        { imageUrl: require("@/assets/svg/partner-logos/Commerzbank.svg") },
        {
          imageUrl: require("@/assets/svg/partner-logos/BHW_Bausparkasse.svg")
        },
        { imageUrl: require("@/assets/svg/partner-logos/Postbank.svg") },
        { imageUrl: require("@/assets/svg/partner-logos/W\xFCstenrot.svg") },
        { imageUrl: require("@/assets/svg/partner-logos/DEVK.svg") },
        { imageUrl: require("@/assets/svg/partner-logos/DSL_Bank_logo.svg") },
        {
          imageUrl: require("@/assets/svg/partner-logos/Hanseatic_Bank_Logo.svg")
        },
        { imageUrl: require("@/assets/svg/partner-logos/HDI-Logo.svg") },
        { imageUrl: require("@/assets/svg/partner-logos/Targobank_logo.svg") },
        { imageUrl: require("@/assets/svg/partner-logos/Signal-iduna.svg") },
        { imageUrl: require("@/assets/svg/partner-logos/Alte_Leipziger.svg") },
        { imageUrl: require("@/assets/svg/partner-logos/Gothaer.svg") },
        { imageUrl: require("@/assets/svg/partner-logos/Zurich_Logo.svg") }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Headline = resolveComponent("Headline");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-b pylg mx-auto w-full border-gray-400 md:w-10/12 md:max-w-screen-xl" }, _attrs))}><section>`);
  _push(ssrRenderComponent(_component_Headline, {
    title: $data.title,
    subtitle: $data.subtitle
  }, null, _parent));
  _push(`</section><div class="mx-auto flex w-5/6 flex-wrap items-center"><!--[-->`);
  ssrRenderList($data.netzwerkLogos, (logo, index2) => {
    _push(`<div class="mx-auto"><img${ssrRenderAttr("src", logo.imageUrl)} alt class="m-4 w-24 lg:m-8 lg:w-24"></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Netzwerk.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    Header: __nuxt_component_0$1,
    Hero: __nuxt_component_1,
    ClaimImmoService: __nuxt_component_5,
    Claim: __nuxt_component_3,
    Testimonials: __nuxt_component_4,
    About: __nuxt_component_2,
    Netzwerk: __nuxt_component_7,
    Kontakt: __nuxt_component_2$1,
    Footer: __nuxt_component_3$1,
    Leistungen: __nuxt_component_6
  },
  head() {
    return {
      title: "Peter Ebner Finanzberatung Plus: Herzlich Willkommen",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Peter Ebner Finanzberatung Plus: Als unabh\xE4ngiger Finanzierungsspezialist bin ich Ihr Partner rund um die Themen Finanzierung, Finanzieren ohne Eigenkapital und Privatkredite in der Region Trier, Saarbr\xFCcken und \xFCberregional per Videoberatung."
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0$1;
  const _component_Hero = __nuxt_component_1;
  const _component_About = __nuxt_component_2;
  const _component_Claim = __nuxt_component_3;
  const _component_Testimonials = __nuxt_component_4;
  const _component_ClaimImmoService = __nuxt_component_5;
  const _component_Leistungen = __nuxt_component_6;
  const _component_Netzwerk = __nuxt_component_7;
  const _component_Kontakt = __nuxt_component_2$1;
  const _component_Footer = __nuxt_component_3$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-medium" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_Hero, null, null, _parent));
  _push(ssrRenderComponent(_component_About, null, null, _parent));
  _push(ssrRenderComponent(_component_Claim, null, null, _parent));
  _push(ssrRenderComponent(_component_Testimonials, null, null, _parent));
  _push(ssrRenderComponent(_component_ClaimImmoService, null, null, _parent));
  _push(ssrRenderComponent(_component_Leistungen, null, null, _parent));
  _push(ssrRenderComponent(_component_Netzwerk, null, null, _parent));
  _push(ssrRenderComponent(_component_Kontakt, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-6d2439c9.mjs.map
