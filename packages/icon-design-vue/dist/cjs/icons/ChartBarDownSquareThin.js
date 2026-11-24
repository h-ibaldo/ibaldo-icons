'use strict';

const { defineComponent, h } = require('vue');

const ChartBarDownSquareThin = defineComponent({
  name: 'ChartBarDownSquareThin',
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
          h('rect', {"x":"2","y":"2","width":"20","height":"20","rx":"5","ry":"5"}),
          h('line', {"x1":"7","y1":"12","x2":"7","y2":"6"}),
          h('line', {"x1":"12","y1":"11","x2":"12","y2":"6"}),
          h('line', {"x1":"17","y1":"15","x2":"17","y2":"6"})
        ]
      );
  }
});

module.exports = ChartBarDownSquareThin;
module.exports.ChartBarDownSquareThin = ChartBarDownSquareThin;
module.exports.default = ChartBarDownSquareThin;
