'use strict';

const { defineComponent, h } = require('vue');

const ChevronDoubleUpRight = defineComponent({
  name: 'ChevronDoubleUpRight',
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
          h('path', {"d":"M8 4L20 4L20 16"}),
          h('path', {"d":"M4 8L16 8L16 20"})
        ]
      );
  }
});

module.exports = ChevronDoubleUpRight;
module.exports.ChevronDoubleUpRight = ChevronDoubleUpRight;
module.exports.default = ChevronDoubleUpRight;
