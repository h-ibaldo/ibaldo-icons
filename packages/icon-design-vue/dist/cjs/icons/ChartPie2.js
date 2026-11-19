'use strict';

const { defineComponent, h } = require('vue');

const ChartPie2 = defineComponent({
  name: 'ChartPie2',
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
          h('circle', {"cx":"12.016630450973025","cy":"12.000000000480213","r":"10"}),
          h('line', {"x1":"12.016630450973025","y1":"12.000000000480213","x2":"19.087675372848025","y2":"4.928955078605213"}),
          h('line', {"x1":"20.016630450973025","y1":"18.000000000480213","x2":"12.016630450973025","y2":"12.000000000480213"})
        ]
      );
  }
});

module.exports = ChartPie2;
module.exports.ChartPie2 = ChartPie2;
module.exports.default = ChartPie2;
