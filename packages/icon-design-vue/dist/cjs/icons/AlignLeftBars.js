'use strict';

const { defineComponent, h } = require('vue');

const AlignLeftBars = defineComponent({
  name: 'AlignLeftBars',
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
          h('path', {"d":"M2 9L2 7C2 6.449 2.449 6 3 6L21 6C21.551 6 22 6.449 22 7L22 9C22 9.551 21.551 10 21 10L3 10C2.449 10 2 9.551 2 9Z"}),
          h('path', {"d":"M11 2L2 2"}),
          h('path', {"d":"M2 21L2 19C2 18.449 2.449 18 3 18L21 18C21.551 18 22 18.449 22 19L22 21C22 21.551 21.551 22 21 22L3 22C2.449 22 2 21.551 2 21Z"}),
          h('path', {"d":"M11 14L2 14"})
        ]
      );
  }
});

module.exports = AlignLeftBars;
module.exports.AlignLeftBars = AlignLeftBars;
module.exports.default = AlignLeftBars;
