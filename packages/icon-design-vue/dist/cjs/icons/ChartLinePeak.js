'use strict';

const { defineComponent, h } = require('vue');

const ChartLinePeak = defineComponent({
  name: 'ChartLinePeak',
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
          h('polyline', {"points":"4 12.000000000480213 9 19.000000000480213 15 5.000000000480213 20 12.000000000480213"})
        ]
      );
  }
});

module.exports = ChartLinePeak;
module.exports.ChartLinePeak = ChartLinePeak;
module.exports.default = ChartLinePeak;
