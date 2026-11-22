'use strict';

const { defineComponent, h } = require('vue');

const ChartGanttSquare = defineComponent({
  name: 'ChartGanttSquare',
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
          h('path', {"d":"M20.023 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20.004 2C21.105 2 22 2.895 22.004 3.996L22.023 19.996C22.023 21.102 21.129 22 20.023 22Z"}),
          h('path', {"d":"M11.965 12L6 12"}),
          h('path', {"d":"M15.965 16L10 16"}),
          h('path', {"d":"M17.965 8L10 8"})
        ]
      );
  }
});

module.exports = ChartGanttSquare;
module.exports.ChartGanttSquare = ChartGanttSquare;
module.exports.default = ChartGanttSquare;
