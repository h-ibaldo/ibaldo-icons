'use strict';

const { defineComponent, h } = require('vue');

const MinusSquareCompactLarge = defineComponent({
  name: 'MinusSquareCompactLarge',
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
          h('rect', {"x":"4","y":"4","width":"16","height":"16","rx":"3","ry":"3"}),
          h('line', {"x1":"8","y1":"12","x2":"16","y2":"12"})
        ]
      );
  }
});

module.exports = MinusSquareCompactLarge;
module.exports.MinusSquareCompactLarge = MinusSquareCompactLarge;
module.exports.default = MinusSquareCompactLarge;
