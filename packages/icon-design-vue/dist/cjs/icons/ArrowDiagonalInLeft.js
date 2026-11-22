'use strict';

const { defineComponent, h } = require('vue');

const ArrowDiagonalInLeft = defineComponent({
  name: 'ArrowDiagonalInLeft',
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
          h('path', {"d":"M22 22L15 15"}),
          h('path', {"d":"M9 9L2 2"}),
          h('path', {"d":"M9 4L9 9L4 9"}),
          h('path', {"d":"M15 20L15 15L20 15"})
        ]
      );
  }
});

module.exports = ArrowDiagonalInLeft;
module.exports.ArrowDiagonalInLeft = ArrowDiagonalInLeft;
module.exports.default = ArrowDiagonalInLeft;
