'use strict';

const { defineComponent, h } = require('vue');

const ChartSplineAxis = defineComponent({
  name: 'ChartSplineAxis',
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
          h('path', {"d":"M6 18C6.938 9 10.281 6.773 13.5 12C16.719 17.227 21 14 21 6"})
        ]
      );
  }
});

module.exports = ChartSplineAxis;
module.exports.ChartSplineAxis = ChartSplineAxis;
module.exports.default = ChartSplineAxis;
