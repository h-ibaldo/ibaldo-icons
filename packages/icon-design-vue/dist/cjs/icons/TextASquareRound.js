'use strict';

const { defineComponent, h } = require('vue');

const TextASquareRound = defineComponent({
  name: 'TextASquareRound',
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
          h('path', {"d":"M20 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 20C22 21.105 21.105 22 20 22Z"}),
          h('path', {"d":"M7 17L10.75 7.629C10.898 7.25 11.27 7 11.676 7L12.324 7C12.73 7 13.102 7.25 13.25 7.629L17 17"}),
          h('path', {"d":"M9 14L15 14"})
        ]
      );
  }
});

module.exports = TextASquareRound;
module.exports.TextASquareRound = TextASquareRound;
module.exports.default = TextASquareRound;
