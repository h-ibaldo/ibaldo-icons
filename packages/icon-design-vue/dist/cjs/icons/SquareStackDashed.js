'use strict';

const { defineComponent, h } = require('vue');

const SquareStackDashed = defineComponent({
  name: 'SquareStackDashed',
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
          h('path', {"d":"M10 16L20 16C21.105 16 22 15.105 22 14L22 4C22 2.895 21.105 2 20 2L10 2C8.895 2 8 2.895 8 4L8 14C8 15.105 8.895 16 10 16Z"}),
          h('path', {"d":"M2 10C2 8.895 2.895 8 4 8"}),
          h('path', {"d":"M4 22C2.895 22 2 21.105 2 20"}),
          h('path', {"d":"M16 20C16 21.105 15.105 22 14 22"}),
          h('path', {"d":"M2 14L2 16"}),
          h('path', {"d":"M8 22L10 22"})
        ]
      );
  }
});

module.exports = SquareStackDashed;
module.exports.SquareStackDashed = SquareStackDashed;
module.exports.default = SquareStackDashed;
