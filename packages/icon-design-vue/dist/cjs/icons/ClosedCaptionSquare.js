'use strict';

const { defineComponent, h } = require('vue');

const ClosedCaptionSquare = defineComponent({
  name: 'ClosedCaptionSquare',
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
          h('path', {"d":"M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z"}),
          h('path', {"d":"M17 15L16 15C14.895 15 14 14.105 14 13L14 11C14 9.895 14.895 9 16 9L17 9"}),
          h('path', {"d":"M10 15L9 15C7.895 15 7 14.105 7 13L7 11C7 9.895 7.895 9 9 9L10 9"})
        ]
      );
  }
});

module.exports = ClosedCaptionSquare;
module.exports.ClosedCaptionSquare = ClosedCaptionSquare;
module.exports.default = ClosedCaptionSquare;
