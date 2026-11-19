'use strict';

const { defineComponent, h } = require('vue');

const SquareStackArrowBend = defineComponent({
  name: 'SquareStackArrowBend',
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
          h('path', {"d":"M15 12L17 14L15 16"}),
          h('path', {"d":"M11 17L11 19C11 20.105 11.895 21 13 21L20 21C21.105 21 22 20.105 22 19L22 9C22 7.895 21.105 7 20 7L13 7C11.895 7 11 7.895 11 9L11 10"}),
          h('path', {"d":"M13 7L13 5C13 3.895 12.105 3 11 3L4 3C2.895 3 2 3.895 2 5L2 16C2 17.105 2.895 18 4 18L11 18"}),
          h('path', {"d":"M7 9L7 10C7 12.211 8.789 14 11 14L17 14"})
        ]
      );
  }
});

module.exports = SquareStackArrowBend;
module.exports.SquareStackArrowBend = SquareStackArrowBend;
module.exports.default = SquareStackArrowBend;
