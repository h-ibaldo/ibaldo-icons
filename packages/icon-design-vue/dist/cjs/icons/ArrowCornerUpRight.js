'use strict';

const { defineComponent, h } = require('vue');

const ArrowCornerUpRight = defineComponent({
  name: 'ArrowCornerUpRight',
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
          h('path', {"d":"M17 12L21 8L17 4"}),
          h('path', {"d":"M21 8L11 8C6.582 8 3 11.582 3 16L3 20"})
        ]
      );
  }
});

module.exports = ArrowCornerUpRight;
module.exports.ArrowCornerUpRight = ArrowCornerUpRight;
module.exports.default = ArrowCornerUpRight;
