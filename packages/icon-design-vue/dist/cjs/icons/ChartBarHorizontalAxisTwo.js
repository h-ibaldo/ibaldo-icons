'use strict';

const { defineComponent, h } = require('vue');

const ChartBarHorizontalAxisTwo = defineComponent({
  name: 'ChartBarHorizontalAxisTwo',
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
          h('path', {"d":"M13.5 5.5L13.5 9.5L5.5 9.5L5.5 5.5Z"}),
          h('path', {"d":"M18.5 13.5L18.5 17.5L5.5 17.5L5.5 13.5Z"})
        ]
      );
  }
});

module.exports = ChartBarHorizontalAxisTwo;
module.exports.ChartBarHorizontalAxisTwo = ChartBarHorizontalAxisTwo;
module.exports.default = ChartBarHorizontalAxisTwo;
