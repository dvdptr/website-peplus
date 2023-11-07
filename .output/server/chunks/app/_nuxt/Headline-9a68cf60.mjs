import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {
  props: ["title", "subtitle"]
  //   props: {
  //     title: String,
  //     required: true
  //   }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><h1>${ssrInterpolate($props.title)}</h1><p class="mx-auto w-11/12 pt-2 text-center text-base leading-snug text-gray-700 sm:w-1/2">${ssrInterpolate($props.subtitle)}</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/Headline.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Headline = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Headline as H };
//# sourceMappingURL=Headline-9a68cf60.mjs.map
