'use strict';

const { defineComponent, h } = require('vue');

const ArrowClockwiseSquare = defineComponent({
  name: 'ArrowClockwiseSquare',
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
          h('path', {"d":"M5 22L19 22C20.656 22 22 20.656 22 19L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5L2 19C2 20.656 3.344 22 5 22Z"}),
          h('path', {"d":"M17 13L14 10C12.344 8.344 9.656 8.344 8 10C6.344 11.656 6.344 14.344 8 16L9 17"}),
          h('path', {"d":"M13 13L17 13L17 9"})
        ]
      );
  }
});

module.exports = ArrowClockwiseSquare;
module.exports.ArrowClockwiseSquare = ArrowClockwiseSquare;
module.exports.default = ArrowClockwiseSquare;
