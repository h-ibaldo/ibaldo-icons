'use strict';

const { defineComponent, h } = require('vue');

const ArrowUturnUpFlippedSquare = defineComponent({
  name: 'ArrowUturnUpFlippedSquare',
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
          h('path', {"d":"M6 11L9 8L12 11"}),
          h('path', {"d":"M9 8L9 13C9 15.211 10.789 17 13 17C15.211 17 17 15.211 17 13L17 11"})
        ]
      );
  }
});

module.exports = ArrowUturnUpFlippedSquare;
module.exports.ArrowUturnUpFlippedSquare = ArrowUturnUpFlippedSquare;
module.exports.default = ArrowUturnUpFlippedSquare;
