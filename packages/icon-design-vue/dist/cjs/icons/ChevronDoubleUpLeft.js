'use strict';

const { defineComponent, h } = require('vue');

const ChevronDoubleUpLeft = defineComponent({
  name: 'ChevronDoubleUpLeft',
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
          h('path', {"d":"M4 16L4 4L16 4"}),
          h('path', {"d":"M8 20L8 8L20 8"})
        ]
      );
  }
});

module.exports = ChevronDoubleUpLeft;
module.exports.ChevronDoubleUpLeft = ChevronDoubleUpLeft;
module.exports.default = ChevronDoubleUpLeft;
