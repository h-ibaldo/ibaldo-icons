'use strict';

const { defineComponent, h } = require('vue');

const SaveHub = defineComponent({
  name: 'SaveHub',
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
          h('path', {"d":"M19.949462884242166,22.000000001200533l-16-.00000000144064c-1.104569499661011-.000000000098225-1.999999999919964-.89543050051725-1.999999999818101-2.000000000178261l.000000001091394-12.171572874911362c.000000000047294-.530432979616307.210713680779008-1.039140805340139.585786437626666-1.414213562191435l3.82842712474303-3.828427124746668c.375072756938607-.375072756942245.883780582811596-.58578643767396,1.414213562551595-.585786437626666l12.17157287559894.000000001095032c1.104569499661011.000000000098225,1.999999999919964.89543050051725,1.999999999825377,2.000000000178261l-.000000001437002,16c-.000000000101863,1.104569499661011-.895430500520888,1.999999999919964-2.000000000181899,1.999999999821739Z"}),
          h('polyline', {"points":"7.94946288558458 2.000000000298314 7.949462885319008 8.000000000298314 17.949462885319008 8.000000000749424 17.94946288558458 2.000000000749424"}),
          h('circle', {"cx":"11.949462885140747","cy":"15.000000000476575","r":"3"})
        ]
      );
  }
});

module.exports = SaveHub;
module.exports.SaveHub = SaveHub;
module.exports.default = SaveHub;
