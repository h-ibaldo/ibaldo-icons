'use strict';

const { defineComponent, h } = require('vue');

const LaptopPulse = defineComponent({
  name: 'LaptopPulse',
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
          h('line', {"x1":"1.999999990599463","y1":"21.000000005169568","x2":"21.999999990599463","y2":"21.000000005169568"}),
          h('path', {"d":"M19.999999990599463,13.000000005169568v2c0,1.104569499661011-.895430500329894,2-2,2H5.999999990599463c-1.104569499659192,0-2-.895430500338989-2-2v-2"}),
          h('path', {"d":"M3.999999990420292,7.000000004987669l.00000000017917-2c.000000000100044-1.104569499661011.895430500529983-1.999999999919964,2.00000000018008-1.999999999818101l12,.000000001076842c1.104569499661011.000000000098225,1.999999999919964.89543050051725,1.99999999981992,2.000000000178261l-.00000000017917,2"}),
          h('polyline', {"points":"19.999999990599463 10.00000000588625 15.999999990599463 10.00000000552609 13.999999990340257 13.000000005347829 9.999999990870492 7.000000004987669 7.999999990599463 10.000000004809408 3.999999990599463 10.000000004449248"})
        ]
      );
  }
});

module.exports = LaptopPulse;
module.exports.LaptopPulse = LaptopPulse;
module.exports.default = LaptopPulse;
