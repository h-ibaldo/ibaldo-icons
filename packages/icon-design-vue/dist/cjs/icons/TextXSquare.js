'use strict';

const { defineComponent, h } = require('vue');

const TextXSquare = defineComponent({
  name: 'TextXSquare',
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
          h('path', {"d":"M8 7L16 17"}),
          h('path', {"d":"M8 7L16 17"}),
          h('path', {"d":"M8 17L16 7"}),
          h('path', {"d":"M5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2Z"})
        ]
      );
  }
});

module.exports = TextXSquare;
module.exports.TextXSquare = TextXSquare;
module.exports.default = TextXSquare;
