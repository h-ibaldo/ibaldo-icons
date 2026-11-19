'use strict';

const { defineComponent, h } = require('vue');

const ChartTrendUpAxis = defineComponent({
  name: 'ChartTrendUpAxis',
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
          h('polyline', {"points":"2 2 2 22 22 22"}),
          h('polyline', {"points":"6 16 12 10 15 13 22 6"}),
          h('polyline', {"points":"22 10 22 6 18 6"})
        ]
      );
  }
});

module.exports = ChartTrendUpAxis;
module.exports.ChartTrendUpAxis = ChartTrendUpAxis;
module.exports.default = ChartTrendUpAxis;
