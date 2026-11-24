'use strict';

const { defineComponent, h } = require('vue');

const SwitchDialRight = defineComponent({
  name: 'SwitchDialRight',
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
          h('circle', {"cx":"11.999999977098014","cy":"15.99999656343698","r":"5.999999999998181"}),
          h('line', {"x1":"9.999999977100742","y1":"17.999996563434252","x2":"13.999999977100742","y2":"13.999996563434252"}),
          h('circle', {"cx":"11.999999977100742","cy":"3.99999656343789","r":"2"}),
          h('circle', {"cx":"19.999999977100742","cy":"3.99999656343789","r":"2"}),
          h('circle', {"cx":"3.999999977100742","cy":"3.99999656343789","r":"2"}),
          h('line', {"x1":"19.999999977100742","y1":"3.99999656343789","x2":"19.999999977100742","y2":"3.99999656343789"})
        ]
      );
  }
});

module.exports = SwitchDialRight;
module.exports.SwitchDialRight = SwitchDialRight;
module.exports.default = SwitchDialRight;
