'use strict';

const { defineComponent, h } = require('vue');

const ChartBarSquareThin = defineComponent({
  name: 'ChartBarSquareThin',
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
          h('rect', {"x":"2","y":"2.000000003885361","width":"20","height":"20","rx":"5","ry":"5"}),
          h('line', {"x1":"8","y1":"16.000000003885361","x2":"8","y2":"12.000000003885361"}),
          h('line', {"x1":"12","y1":"16.000000003885361","x2":"12","y2":"8.000000003885361"}),
          h('line', {"x1":"16","y1":"16.000000003885361","x2":"16","y2":"11.000000003885361"})
        ]
      );
  }
});

module.exports = ChartBarSquareThin;
module.exports.ChartBarSquareThin = ChartBarSquareThin;
module.exports.default = ChartBarSquareThin;
