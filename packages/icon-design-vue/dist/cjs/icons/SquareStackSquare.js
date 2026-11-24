'use strict';

const { defineComponent, h } = require('vue');

const SquareStackSquare = defineComponent({
  name: 'SquareStackSquare',
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
          h('path', {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z"}),
          h('path', {"d":"M13 14L8 14C7.449 14 7 13.551 7 13L7 8C7 7.449 7.449 7 8 7L13 7C13.551 7 14 7.449 14 8L14 13C14 13.551 13.551 14 13 14Z"}),
          h('path', {"d":"M17 10L17 16C17 16.551 16.551 17 16 17L10 17"})
        ]
      );
  }
});

module.exports = SquareStackSquare;
module.exports.SquareStackSquare = SquareStackSquare;
module.exports.default = SquareStackSquare;
