'use strict';

const { defineComponent, h } = require('vue');

const WindowSearchDots = defineComponent({
  name: 'WindowSearchDots',
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
          h('path', {"d":"M10.999999976269464,21.998779299956368H3.999999976220352c-1.104569499661011,0-2-.895430500338989-2-2V3.998779299956368c0-1.104569499661011.895430500338989-2,2-2h16c1.104569499659192,0,2,.895430500338989,2,2v7"}),
          h('circle', {"cx":"15.999999976220352","cy":"15.998779300000933","r":"4.000000000000455"}),
          h('line', {"x1":"18.82843015213075","y1":"18.827209475653945","x2":"21.999999976489562","y2":"21.998779299730813"}),
          h('line', {"x1":"1.999999976229446","y1":"7.998779299956368","x2":"21.999999976229446","y2":"7.998779299956368"}),
          h('line', {"x1":"5.009999976229665","y1":"4.998779299956368","x2":"4.999999976229446","y2":"4.998779299956368"}),
          h('line', {"x1":"8.009999976229665","y1":"4.998779299956368","x2":"7.999999976229446","y2":"4.998779299956368"}),
          h('line', {"x1":"11.009999976229665","y1":"4.998779299956368","x2":"10.999999976229446","y2":"4.998779299956368"})
        ]
      );
  }
});

module.exports = WindowSearchDots;
module.exports.WindowSearchDots = WindowSearchDots;
module.exports.default = WindowSearchDots;
