'use strict';

const { defineComponent, h } = require('vue');

const MinimizeSquare = defineComponent({
  name: 'MinimizeSquare',
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
          h('rect', {"x":"1.94946288328174","y":"1.998779303956326","width":"20","height":"20","rx":"3","ry":"3"}),
          h('line', {"x1":"16.94946288328174","y1":"16.998779303956326","x2":"6.94946288328174","y2":"16.998779303956326"})
        ]
      );
  }
});

module.exports = MinimizeSquare;
module.exports.MinimizeSquare = MinimizeSquare;
module.exports.default = MinimizeSquare;
