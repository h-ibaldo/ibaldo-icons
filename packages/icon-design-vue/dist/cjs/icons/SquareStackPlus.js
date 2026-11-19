'use strict';

const { defineComponent, h } = require('vue');

const SquareStackPlus = defineComponent({
  name: 'SquareStackPlus',
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
          h('path', {"d":"M11.999999994000973,18.998779299956368h-3c-1.104569499661011,0-2-.895430500338989-2-2v-8c0-1.104569499661011.895430500338989-2,2-2h8c1.104569499668287,0,2,.895430500338989,2,2v3"}),
          h('g', {}, [
            h('line', {"x1":"18.999999994000973","y1":"15.998779299956368","x2":"18.999999994000973","y2":"21.998779299956368"}),
            h('line', {"x1":"21.999999994000973","y1":"18.998779299865419","x2":"15.999999994000973","y2":"18.99877930004368"})
          ]),
          h('path', {"d":"M6.999999994000973,13.998779299956368h-3c-1.104569499661011,0-2-.895430500338989-2-2V3.998779299956368c0-1.104569499661011.895430500338989-2,2-2h8c1.104569499668287,0,2,.895430500338989,2,2v3"})
        ]
      );
  }
});

module.exports = SquareStackPlus;
module.exports.SquareStackPlus = SquareStackPlus;
module.exports.default = SquareStackPlus;
