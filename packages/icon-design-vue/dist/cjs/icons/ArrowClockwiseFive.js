'use strict';

const { defineComponent, h } = require('vue');

const ArrowClockwiseFive = defineComponent({
  name: 'ArrowClockwiseFive',
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
          h('path', {"d":"M14 8L10 8L10 11.5L11.75 11.5C12.992 11.5 14 12.508 14 13.75C14 14.992 12.992 16 11.75 16L10 16"}),
          h('path', {"d":"M19 2L19 5L16 5"}),
          h('path', {"d":"M19 4.875C17.195 3.102 14.73 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 10.953 21.84 9.945 21.539 9"})
        ]
      );
  }
});

module.exports = ArrowClockwiseFive;
module.exports.ArrowClockwiseFive = ArrowClockwiseFive;
module.exports.default = ArrowClockwiseFive;
