'use strict';

const { defineComponent, h } = require('vue');

const XSmall = defineComponent({
  name: 'XSmall',
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
          h('line', {"x1":"5.999999991059667","y1":"18.000000000626642","x2":"17.999999990510332","y2":"6.000000001168701"}),
          h('line', {"x1":"17.999999990250217","y1":"18.000000000894943","x2":"5.999999991330697","y2":"6.0000000009004"})
        ]
      );
  }
});

module.exports = XSmall;
module.exports.XSmall = XSmall;
module.exports.default = XSmall;
