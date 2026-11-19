'use strict';

const { defineComponent, h } = require('vue');

const ArrowCounterclockwiseTen = defineComponent({
  name: 'ArrowCounterclockwiseTen',
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
          h('path', {"d":"M5 2L5 5L8 5"}),
          h('path', {"d":"M5 4.875C6.805 3.102 9.27 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 10.953 2.16 9.945 2.461 9"}),
          h('path', {"d":"M14.5 16C13.395 16 12.5 15.105 12.5 14L12.5 10C12.5 8.895 13.395 8 14.5 8C15.605 8 16.5 8.895 16.5 10L16.5 14C16.5 15.105 15.605 16 14.5 16Z"}),
          h('path', {"d":"M9 16L9 8L8 8"})
        ]
      );
  }
});

module.exports = ArrowCounterclockwiseTen;
module.exports.ArrowCounterclockwiseTen = ArrowCounterclockwiseTen;
module.exports.default = ArrowCounterclockwiseTen;
