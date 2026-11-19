'use strict';

const { defineComponent, h } = require('vue');

const TriangleDownCircle = defineComponent({
  name: 'TriangleDownCircle',
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
          h('path', {"d":"M2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12Z"}),
          h('path', {"d":"M15.195 9L8.805 9C8.02 9 7.539 9.863 7.957 10.531L11.152 15.645C11.543 16.27 12.457 16.27 12.848 15.645L16.043 10.531C16.461 9.863 15.98 9 15.195 9Z"})
        ]
      );
  }
});

module.exports = TriangleDownCircle;
module.exports.TriangleDownCircle = TriangleDownCircle;
module.exports.default = TriangleDownCircle;
