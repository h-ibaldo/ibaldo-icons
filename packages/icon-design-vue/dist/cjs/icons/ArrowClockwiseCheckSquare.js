'use strict';

const { defineComponent, h } = require('vue');

const ArrowClockwiseCheckSquare = defineComponent({
  name: 'ArrowClockwiseCheckSquare',
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
          h('path', {"d":"M19 22L13 22C11.895 22 11 21.105 11 20L11 14C11 12.895 11.895 12 13 12L19 12C20.105 12 21 12.895 21 14L21 20C21 21.105 20.105 22 19 22Z"}),
          h('path', {"d":"M20 3L20 7L16 7"}),
          h('path', {"d":"M19.465 6.969C17.848 4.574 15.105 3 12 3C7.027 3 3 7.031 3 12C3 16.719 6.637 20.582 11.258 20.961"}),
          h('path', {"d":"M14.25 17L15.418 18.168L17.75 15.832"})
        ]
      );
  }
});

module.exports = ArrowClockwiseCheckSquare;
module.exports.ArrowClockwiseCheckSquare = ArrowClockwiseCheckSquare;
module.exports.default = ArrowClockwiseCheckSquare;
