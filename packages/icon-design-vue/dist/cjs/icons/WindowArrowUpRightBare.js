'use strict';

const { defineComponent, h } = require('vue');

const WindowArrowUpRightBare = defineComponent({
  name: 'WindowArrowUpRightBare',
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
          h('path', {"d":"M2.000000004900357,15.999999995256076V3.999999995616236c0-1.104569499661011.895430500329894-2,2-2h16c1.104569499659192,0,2,.895430500338989,2,2v16c0,1.104569499661011-.895430500340808,2-2,2h-12"}),
          h('polyline', {"points":"11.000000004900357 17.999999995256076 11.000000004900357 12.999999995256076 6.000000004900357 12.999999995256076"}),
          h('line', {"x1":"11.000000004900357","y1":"12.999999995256076","x2":"2.000000004900357","y2":"21.999999995256076"}),
          h('line', {"x1":"6.010000004900576","y1":"5.999999995616236","x2":"6.000000004900357","y2":"5.999999995616236"}),
          h('line', {"x1":"9.010000004900576","y1":"5.999999995616236","x2":"9.000000004900357","y2":"5.999999995616236"}),
          h('line', {"x1":"12.010000004900576","y1":"5.999999995616236","x2":"12.000000004900357","y2":"5.999999995616236"})
        ]
      );
  }
});

module.exports = WindowArrowUpRightBare;
module.exports.WindowArrowUpRightBare = WindowArrowUpRightBare;
module.exports.default = WindowArrowUpRightBare;
