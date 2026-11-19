'use strict';

const { defineComponent, h } = require('vue');

const ScannerPaper = defineComponent({
  name: 'ScannerPaper',
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
          h('path', {"d":"M3.999999981189831,14.999996564258254h18v6H1.999999981189831v-4c0-1.103830048988.896169951012-2,2-2Z"}),
          h('line', {"x1":"5.999999981189831","y1":"17.999996564258254","x2":"7.999999981189831","y2":"17.999996564258254"}),
          h('path', {"d":"M5.999999981189831,2.999996564258254l13.788854381999045,6.894427191000432c1.355136113079425.67756805654426,2.211145618000955,2.062620530181448,2.211145618000955,3.577708763998089v1.527864045001479"}),
          h('line', {"x1":"4.999999981189831","y1":"11.999996564258254","x2":"16.999999981189831","y2":"11.999996564258254"})
        ]
      );
  }
});

module.exports = ScannerPaper;
module.exports.ScannerPaper = ScannerPaper;
module.exports.default = ScannerPaper;
