'use strict';

const { defineComponent, h } = require('vue');

const ArrowUpRight = defineComponent({
  name: 'ArrowUpRight',
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
          h('path', {"d":"M6 6L18 6L18 18"}),
          h('path', {"d":"M18 6L6 18"})
        ]
      );
  }
});

module.exports = ArrowUpRight;
module.exports.ArrowUpRight = ArrowUpRight;
module.exports.default = ArrowUpRight;
