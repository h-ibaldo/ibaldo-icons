'use strict';

const { defineComponent, h } = require('vue');

const ClosedCaptionCircleSmall = defineComponent({
  name: 'ClosedCaptionCircleSmall',
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
          h('path', {"d":"M20 12C20 16.418 16.418 20 12 20C7.582 20 4 16.418 4 12C4 7.582 7.582 4 12 4C16.418 4 20 7.582 20 12Z"}),
          h('path', {"d":"M10 14C8.895 14 8 13.105 8 12C8 10.895 8.895 10 10 10"}),
          h('path', {"d":"M15 14C13.895 14 13 13.105 13 12C13 10.895 13.895 10 15 10"})
        ]
      );
  }
});

module.exports = ClosedCaptionCircleSmall;
module.exports.ClosedCaptionCircleSmall = ClosedCaptionCircleSmall;
module.exports.default = ClosedCaptionCircleSmall;
