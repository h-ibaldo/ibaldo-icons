'use strict';

const { defineComponent, h } = require('vue');

const AlignSquareCenterHorizontal = defineComponent({
  name: 'AlignSquareCenterHorizontal',
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
          h('path', {"d":"M14 16L10 16C8.895 16 8 15.105 8 14L8 10C8 8.895 8.895 8 10 8L14 8C15.105 8 16 8.895 16 10L16 14C16 15.105 15.105 16 14 16Z"}),
          h('path', {"d":"M22 19L22 5"}),
          h('path', {"d":"M2 19L2 5"})
        ]
      );
  }
});

module.exports = AlignSquareCenterHorizontal;
module.exports.AlignSquareCenterHorizontal = AlignSquareCenterHorizontal;
module.exports.default = AlignSquareCenterHorizontal;
