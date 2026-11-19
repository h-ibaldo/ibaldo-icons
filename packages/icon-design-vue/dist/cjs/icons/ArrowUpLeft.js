'use strict';

const { defineComponent, h } = require('vue');

const ArrowUpLeft = defineComponent({
  name: 'ArrowUpLeft',
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
          h('path', {"d":"M6 18L6 6L18 6"}),
          h('path', {"d":"M6 6L18 18"})
        ]
      );
  }
});

module.exports = ArrowUpLeft;
module.exports.ArrowUpLeft = ArrowUpLeft;
module.exports.default = ArrowUpLeft;
