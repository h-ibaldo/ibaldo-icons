'use strict';

const { defineComponent, h } = require('vue');

const ArrowCornerDownRight = defineComponent({
  name: 'ArrowCornerDownRight',
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
          h('path', {"d":"M17 12L21 16L17 20"}),
          h('path', {"d":"M21 16L11 16C6.582 16 3 12.418 3 8L3 4"})
        ]
      );
  }
});

module.exports = ArrowCornerDownRight;
module.exports.ArrowCornerDownRight = ArrowCornerDownRight;
module.exports.default = ArrowCornerDownRight;
