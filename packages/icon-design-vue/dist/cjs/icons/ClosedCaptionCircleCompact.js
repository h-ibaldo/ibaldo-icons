'use strict';

const { defineComponent, h } = require('vue');

const ClosedCaptionCircleCompact = defineComponent({
  name: 'ClosedCaptionCircleCompact',
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
          h('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z"}),
          h('path', {"d":"M10 14L9 14C7.895 14 7 13.105 7 12C7 10.895 7.895 10 9 10L10 10"}),
          h('path', {"d":"M16 14L15 14C13.895 14 13 13.105 13 12C13 10.895 13.895 10 15 10L16 10"})
        ]
      );
  }
});

module.exports = ClosedCaptionCircleCompact;
module.exports.ClosedCaptionCircleCompact = ClosedCaptionCircleCompact;
module.exports.default = ClosedCaptionCircleCompact;
