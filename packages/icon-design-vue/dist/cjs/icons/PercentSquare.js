'use strict';

const { defineComponent, h } = require('vue');

const PercentSquare = defineComponent({
  name: 'PercentSquare',
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
          h('path', {"d":"M8 16L16 8"}),
          h('path', {"d":"M8 9C8 8.449 8.449 8 9 8C9.551 8 10 8.449 10 9C10 9.551 9.551 10 9 10C8.449 10 8 9.551 8 9Z"}),
          h('path', {"d":"M14 15C14 14.449 14.449 14 15 14C15.551 14 16 14.449 16 15C16 15.551 15.551 16 15 16C14.449 16 14 15.551 14 15Z"}),
          h('path', {"d":"M7 3L17 3C19.211 3 21 4.789 21 7L21 17C21 19.211 19.211 21 17 21L7 21C4.789 21 3 19.211 3 17L3 7C3 4.789 4.789 3 7 3Z"})
        ]
      );
  }
});

module.exports = PercentSquare;
module.exports.PercentSquare = PercentSquare;
module.exports.default = PercentSquare;
