'use strict';

const { defineComponent, h } = require('vue');

const ChartLinePeakSquareCheck = defineComponent({
  name: 'ChartLinePeakSquareCheck',
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
          h('polyline', {"points":"16.949462885141656 4.000000000927685 18.949462885141656 6.000000000927685 21.949462885141656 3.000000000927685"}),
          h('path', {"d":"M21.949462885141656,9.000000000927685v8c0,2.761423749150708-2.238576250847473,5-5,5H6.949462885141656c-2.761423749149799,0-5-2.238576250849292-5-5V7.000000000927685c0-2.76142374914707,2.238576250850201-5,5-5h6"}),
          h('polyline', {"points":"6.949462885141656 12.000000000927685 9.949462885141656 16.000000000927685 13.949462885141656 8.000000000927685 16.949462885141656 12.000000000927685"})
        ]
      );
  }
});

module.exports = ChartLinePeakSquareCheck;
module.exports.ChartLinePeakSquareCheck = ChartLinePeakSquareCheck;
module.exports.default = ChartLinePeakSquareCheck;
