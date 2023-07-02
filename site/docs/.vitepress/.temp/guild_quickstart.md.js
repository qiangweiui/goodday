import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"hello 快速开始","description":"","frontmatter":{},"headers":[],"relativePath":"guild/quickstart.md","filePath":"guild/quickstart.md"}');
const _sfc_main = { name: "guild/quickstart.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="hello-快速开始" tabindex="-1">hello 快速开始 <a class="header-anchor" href="#hello-快速开始" aria-label="Permalink to &quot;hello 快速开始&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guild/quickstart.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const quickstart = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  quickstart as default
};
