'use strict';

const { defineComponent, h } = require('vue');

const ChartCandlestickTwoAxis = defineComponent({
  name: 'ChartCandlestickTwoAxis',
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
          h('path', {"d":"M2 2L2 22L22.023 22"}),
          h('path', {"d":"M7 6L11 6L11 14L7 14Z"}),
          h('path', {"d":"M15 10L19 10L19 15L15 15Z"}),
          h('path', {"d":"M17 7L17 10"}),
          h('path', {"d":"M9 3L9 6"}),
          h('path', {"d":"M9 14L9 17"}),
          h('path', {"d":"M17 15L17 18"})
        ]
      );
  }
});

module.exports = ChartCandlestickTwoAxis;
module.exports.ChartCandlestickTwoAxis = ChartCandlestickTwoAxis;
module.exports.default = ChartCandlestickTwoAxis;
