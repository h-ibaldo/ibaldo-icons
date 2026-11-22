'use strict';

const { defineComponent, h } = require('vue');

const SquareSplitDashedBottom = defineComponent({
  name: 'SquareSplitDashedBottom',
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
          h('path', {"d":"M2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 20C22 21.105 21.105 22 20 22L4 22C2.895 22 2 21.105 2 20Z"}),
          h('path', {"d":"M2 15L4 15"}),
          h('path', {"d":"M8 15L10 15"}),
          h('path', {"d":"M14 15L16 15"}),
          h('path', {"d":"M20 15L22 15"})
        ]
      );
  }
});

module.exports = SquareSplitDashedBottom;
module.exports.SquareSplitDashedBottom = SquareSplitDashedBottom;
module.exports.default = SquareSplitDashedBottom;
