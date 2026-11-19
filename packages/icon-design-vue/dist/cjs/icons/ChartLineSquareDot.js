'use strict';

const { defineComponent, h } = require('vue');

const ChartLineSquareDot = defineComponent({
  name: 'ChartLineSquareDot',
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
          h('path', {"d":"M22,10.000000004136382v7c0,2.761423749150708-2.238576250850201,5-5,5H7c-2.761423749139794,0-5-2.238576250849292-5-5V7.000000004136382c0-2.761423749150708,2.238576250860206-5,5-5h7"}),
          h('polyline', {"points":"7 15.000000004136382 10 11.000000004136382 14 14.000000004136382 17 10.000000004136382"}),
          h('circle', {"cx":"19.5","cy":"4.500000004136382","r":"2.5"})
        ]
      );
  }
});

module.exports = ChartLineSquareDot;
module.exports.ChartLineSquareDot = ChartLineSquareDot;
module.exports.default = ChartLineSquareDot;
