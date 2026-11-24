'use strict';

const { defineComponent, h } = require('vue');

const ChartBellAxis = defineComponent({
  name: 'ChartBellAxis',
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
          h('path', {"d":"M6 18C11 18 7.91 5 13 5C18 5 16 18 21 18"})
        ]
      );
  }
});

module.exports = ChartBellAxis;
module.exports.ChartBellAxis = ChartBellAxis;
module.exports.default = ChartBellAxis;
