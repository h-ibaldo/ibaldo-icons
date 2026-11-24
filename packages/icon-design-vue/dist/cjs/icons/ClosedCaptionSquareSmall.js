'use strict';

const { defineComponent, h } = require('vue');

const ClosedCaptionSquareSmall = defineComponent({
  name: 'ClosedCaptionSquareSmall',
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
          h('path', {"d":"M10 14C8.895 14 8 13.105 8 12C8 10.895 8.895 10 10 10"}),
          h('path', {"d":"M15 14C13.895 14 13 13.105 13 12C13 10.895 13.895 10 15 10"}),
          h('path', {"d":"M16 20L8 20C5.789 20 4 18.211 4 16L4 8C4 5.789 5.789 4 8 4L16 4C18.211 4 20 5.789 20 8L20 16C20 18.211 18.211 20 16 20Z"})
        ]
      );
  }
});

module.exports = ClosedCaptionSquareSmall;
module.exports.ClosedCaptionSquareSmall = ClosedCaptionSquareSmall;
module.exports.default = ClosedCaptionSquareSmall;
