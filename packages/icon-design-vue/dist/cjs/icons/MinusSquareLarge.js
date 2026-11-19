'use strict';

const { defineComponent, h } = require('vue');

const MinusSquareLarge = defineComponent({
  name: 'MinusSquareLarge',
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
          h('rect', {"x":"2","y":"2","width":"20","height":"20","rx":"3","ry":"3"}),
          h('line', {"x1":"7","y1":"12","x2":"17","y2":"12"})
        ]
      );
  }
});

module.exports = MinusSquareLarge;
module.exports.MinusSquareLarge = MinusSquareLarge;
module.exports.default = MinusSquareLarge;
