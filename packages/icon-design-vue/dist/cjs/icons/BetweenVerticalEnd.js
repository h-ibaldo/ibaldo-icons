'use strict';

const { defineComponent, h } = require('vue');

const BetweenVerticalEnd = defineComponent({
  name: 'BetweenVerticalEnd',
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
          h('path', {"d":"M8 21L12.242 16.758L16.484 21"}),
          h('path', {"d":"M2 13L2 3L10 3L10 13Z"}),
          h('path', {"d":"M14 13L14 3L22 3L22 13Z"})
        ]
      );
  }
});

module.exports = BetweenVerticalEnd;
module.exports.BetweenVerticalEnd = BetweenVerticalEnd;
module.exports.default = BetweenVerticalEnd;
