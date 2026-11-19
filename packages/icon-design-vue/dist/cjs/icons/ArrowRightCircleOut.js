'use strict';

const { defineComponent, h } = require('vue');

const ArrowRightCircleOut = defineComponent({
  name: 'ArrowRightCircleOut',
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
          h('path', {"d":"M18 9L21 12L18 15"}),
          h('path', {"d":"M9 12L21 12"}),
          h('path', {"d":"M20.98 18C19.156 20.426 16.27 22 13 22C7.477 22 3 17.523 3 12C3 6.477 7.477 2 13 2C16.27 2 19.156 3.574 20.98 6"})
        ]
      );
  }
});

module.exports = ArrowRightCircleOut;
module.exports.ArrowRightCircleOut = ArrowRightCircleOut;
module.exports.default = ArrowRightCircleOut;
