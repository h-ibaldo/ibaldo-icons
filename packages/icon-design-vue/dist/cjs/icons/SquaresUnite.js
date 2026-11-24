'use strict';

const { defineComponent, h } = require('vue');

const SquaresUnite = defineComponent({
  name: 'SquaresUnite',
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
          h('path', {"d":"M2 4C2 2.895 2.895 2 4 2L14 2C15.105 2 16 2.895 16 4L16 8L20 8C21.105 8 22 8.895 22 10L22 20C22 21.105 21.105 22 20 22L10 22C8.895 22 8 21.105 8 20L8 16L4 16C2.895 16 2 15.105 2 14Z"})
        ]
      );
  }
});

module.exports = SquaresUnite;
module.exports.SquaresUnite = SquaresUnite;
module.exports.default = SquaresUnite;
