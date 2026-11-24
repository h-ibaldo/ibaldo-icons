'use strict';

const { defineComponent, h } = require('vue');

const ArrowUturnUpSquare = defineComponent({
  name: 'ArrowUturnUpSquare',
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
          h('path', {"d":"M18 11L15 8L12 11"}),
          h('path', {"d":"M15 8L15 13C15 15.211 13.211 17 11 17C8.789 17 7 15.211 7 13L7 11"})
        ]
      );
  }
});

module.exports = ArrowUturnUpSquare;
module.exports.ArrowUturnUpSquare = ArrowUturnUpSquare;
module.exports.default = ArrowUturnUpSquare;
