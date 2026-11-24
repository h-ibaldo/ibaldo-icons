'use strict';

const { defineComponent, h } = require('vue');

const OptionsCheckSquareInfoSquare = defineComponent({
  name: 'OptionsCheckSquareInfoSquare',
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
          h('path', {"d":"M5.5 7L6.5 8L8.5 6"}),
          h('path', {"d":"M7 12L4 12C2.895 12 2 11.105 2 10L2 4C2 2.895 2.895 2 4 2L10 2C11.105 2 12 2.895 12 4L12 7"}),
          h('path', {"d":"M19.602 22L12.398 22C11.074 22 10 20.926 10 19.602L10 12.398C10 11.074 11.074 10 12.398 10L19.602 10C20.926 10 22 11.074 22 12.398L22 19.602C22 20.926 20.926 22 19.602 22Z"}),
          h('path', {"d":"M16 13.5L16 13.5"}),
          h('path', {"d":"M16 16.5L16 18.5"})
        ]
      );
  }
});

module.exports = OptionsCheckSquareInfoSquare;
module.exports.OptionsCheckSquareInfoSquare = OptionsCheckSquareInfoSquare;
module.exports.default = OptionsCheckSquareInfoSquare;
