'use strict';

const { defineComponent, h } = require('vue');

const ArrowDownSquareOut = defineComponent({
  name: 'ArrowDownSquareOut',
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
          h('path', {"d":"M17 15L12 20L7 15"}),
          h('path', {"d":"M12 6L12 20"}),
          h('path', {"d":"M8.023 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 20C22 21.105 21.105 22 20 22L16.023 22"})
        ]
      );
  }
});

module.exports = ArrowDownSquareOut;
module.exports.ArrowDownSquareOut = ArrowDownSquareOut;
module.exports.default = ArrowDownSquareOut;
