'use strict';

const { defineComponent, h } = require('vue');

const ArrowUturnDownFlippedCircleDotted = defineComponent({
  name: 'ArrowUturnDownFlippedCircleDotted',
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
          h('path', {"d":"M7 13L10 16L13 13"}),
          h('path', {"d":"M10 16L10 11.5C10 9.566 11.566 8 13.5 8C15.434 8 17 9.566 17 11.5L17 12"}),
          h('path', {"d":"M16 18L16 18"}),
          h('path', {"d":"M20 18L20 18"}),
          h('path', {"d":"M21.539 15C21.84 14.055 22 13.047 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C13.047 22 14.051 21.84 15 21.539"})
        ]
      );
  }
});

module.exports = ArrowUturnDownFlippedCircleDotted;
module.exports.ArrowUturnDownFlippedCircleDotted = ArrowUturnDownFlippedCircleDotted;
module.exports.default = ArrowUturnDownFlippedCircleDotted;
