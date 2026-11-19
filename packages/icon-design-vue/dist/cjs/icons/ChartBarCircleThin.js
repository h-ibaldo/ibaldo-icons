'use strict';

const { defineComponent, h } = require('vue');

const ChartBarCircleThin = defineComponent({
  name: 'ChartBarCircleThin',
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
          h('circle', {"cx":"12","cy":"12","r":"10"}),
          h('line', {"x1":"8","y1":"15","x2":"8","y2":"12"}),
          h('line', {"x1":"12","y1":"15","x2":"12","y2":"8"}),
          h('line', {"x1":"16","y1":"15","x2":"16","y2":"10"})
        ]
      );
  }
});

module.exports = ChartBarCircleThin;
module.exports.ChartBarCircleThin = ChartBarCircleThin;
module.exports.default = ChartBarCircleThin;
