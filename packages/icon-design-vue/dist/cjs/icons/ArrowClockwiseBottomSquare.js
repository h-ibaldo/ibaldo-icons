'use strict';

const { defineComponent, h } = require('vue');

const ArrowClockwiseBottomSquare = defineComponent({
  name: 'ArrowClockwiseBottomSquare',
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
          h('path', {"d":"M19 2L5 2C3.344 2 2 3.344 2 5L2 19C2 20.656 3.344 22 5 22L19 22C20.656 22 22 20.656 22 19L22 5C22 3.344 20.656 2 19 2Z"}),
          h('path', {"d":"M7 11L10 14C11.656 15.656 14.344 15.656 16 14C17.656 12.344 17.656 9.656 16 8L15 7"}),
          h('path', {"d":"M11 11L7 11L7 15"})
        ]
      );
  }
});

module.exports = ArrowClockwiseBottomSquare;
module.exports.ArrowClockwiseBottomSquare = ArrowClockwiseBottomSquare;
module.exports.default = ArrowClockwiseBottomSquare;
