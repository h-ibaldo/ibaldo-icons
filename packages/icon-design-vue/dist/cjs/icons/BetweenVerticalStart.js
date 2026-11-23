'use strict';

const { defineComponent, h } = require('vue');

const BetweenVerticalStart = defineComponent({
  name: 'BetweenVerticalStart',
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
          h('path', {"d":"M16 3L11.758 7.242L7.516 3"}),
          h('path', {"d":"M22 11L22 21L14 21L14 11Z"}),
          h('path', {"d":"M10 11L10 21L2 21L2 11Z"})
        ]
      );
  }
});

module.exports = BetweenVerticalStart;
module.exports.BetweenVerticalStart = BetweenVerticalStart;
module.exports.default = BetweenVerticalStart;
