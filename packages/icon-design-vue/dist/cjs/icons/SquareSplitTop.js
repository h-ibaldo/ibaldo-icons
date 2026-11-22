'use strict';

const { defineComponent, h } = require('vue');

const SquareSplitTop = defineComponent({
  name: 'SquareSplitTop',
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
          h('path', {"d":"M21 9L3 9"}),
          h('path', {"d":"M21 4.801L21 19.199C21 20.195 20.195 21 19.199 21L4.801 21C3.805 21 3 20.195 3 19.199L3 4.801C3 3.805 3.805 3 4.801 3L19.199 3C20.195 3 21 3.805 21 4.801Z"})
        ]
      );
  }
});

module.exports = SquareSplitTop;
module.exports.SquareSplitTop = SquareSplitTop;
module.exports.default = SquareSplitTop;
