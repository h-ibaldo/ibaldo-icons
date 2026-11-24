'use strict';

const { defineComponent, h } = require('vue');

const BinocularsCompact = defineComponent({
  name: 'BinocularsCompact',
  props: {
    size: { type: [Number, String], default: 24 },
    color: { type: String, default: 'currentColor' },
    strokeWidth: { type: [Number, String], default: 1.5 }
  },
  setup(props) {
    return () =>
      h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: props.size,
          height: props.size,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: props.color,
          'stroke-width': props.strokeWidth,
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          class: 'icon-design'
        },
        [
          h('circle', {"cx":"5.999988017749274","cy":"14.936828613188482","r":"4"}),
          h('circle', {"cx":"17.999988017749274","cy":"14.936828613188482","r":"4"}),
          h('path', {"d":"M21.999988017749274,14.936828613188482v-.350891113279431c0-.429931640621362-.069274902340112-.857055664060681-.20526123046875-1.264892578121362l-2.132446289069776-6.397399902349207c-.3955078125-1.1865234375-1.505859375-1.98681640625-2.756591796871362-1.98681640625-1.604736328128638,0-2.905700683590112,1.300903320310681-2.905700683590112,2.905700683599207v.094299316400793h-4v-.094299316400793c0-1.604797363288526-1.300903320308862-2.905700683599207-2.905700683590112-2.905700683599207-1.25067138671875,0-2.361083984378638.80029296875-2.75653076171875,1.98681640625l-2.132507324229664,6.397399902349207c-.135925292961474.407836914060681-.205261230461474.8349609375-.205261230461474,1.264892578121362v.350891113279431"}),
          h('line', {"x1":"9.858569560710748","y1":"15.936828613188482","x2":"14.141406474780524","y2":"15.936828613188482"})
        ]
      );
  }
});

module.exports = BinocularsCompact;
module.exports.BinocularsCompact = BinocularsCompact;
module.exports.default = BinocularsCompact;
