'use strict';

const { defineComponent, h } = require('vue');

const SquareStackPlusCorner = defineComponent({
  name: 'SquareStackPlusCorner',
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
          h('path', {"d":"M8 11L3.832 11C2.82 11 2 11.82 2 12.832L2 20.168C2 21.18 2.82 22 3.832 22L11.168 22C12.18 22 13 21.18 13 20.168L13 16"}),
          h('path', {"d":"M16 5L22 5"}),
          h('path', {"d":"M19 2L19 8"}),
          h('path', {"d":"M11.668 5L9.832 5C8.82 5 8 5.82 8 6.832L8 14.168C8 15.18 8.82 16 9.832 16L17.168 16C18.18 16 19 15.18 19 14.168L19 12.332"})
        ]
      );
  }
});

module.exports = SquareStackPlusCorner;
module.exports.SquareStackPlusCorner = SquareStackPlusCorner;
module.exports.default = SquareStackPlusCorner;
