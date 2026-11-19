'use strict';

const { defineComponent, h } = require('vue');

const ChartLinePeakSquare = defineComponent({
  name: 'ChartLinePeakSquare',
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
          h('rect', {"x":"1.949462885141656","y":"2.000000000749424","width":"20","height":"20","rx":"5","ry":"5"}),
          h('polyline', {"points":"6.949462885141656 12.000000000927685 9.949462885141656 16.000000000927685 13.949462885141656 8.000000000927685 16.949462885141656 12.000000000927685"})
        ]
      );
  }
});

module.exports = ChartLinePeakSquare;
module.exports.ChartLinePeakSquare = ChartLinePeakSquare;
module.exports.default = ChartLinePeakSquare;
