'use strict';

const { defineComponent, h } = require('vue');

const ChartBarAxisTwo = defineComponent({
  name: 'ChartBarAxisTwo',
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
          h('path', {"d":"M6 10L10 10L10 18L6 18Z"}),
          h('path', {"d":"M14 5L18 5L18 18L14 18Z"})
        ]
      );
  }
});

module.exports = ChartBarAxisTwo;
module.exports.ChartBarAxisTwo = ChartBarAxisTwo;
module.exports.default = ChartBarAxisTwo;
