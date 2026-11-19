'use strict';

const { defineComponent, h } = require('vue');

const ChartBarHorizontalPeakAxis = defineComponent({
  name: 'ChartBarHorizontalPeakAxis',
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
          h('polyline', {"points":"3.016630450973025 19.000000000480213 12.016630450973025 19.000000000480213 12.016630450973025 14.000000000480213 21.016630450973025 14.000000000480213 21.016630450973025 9.000000000480213 16.016630450973025 9.000000000480213 16.016630450973025 4.000000000480213 3.016630450973025 4.000000000480213"}),
          h('line', {"x1":"3.016630450973025","y1":"2.000000000480213","x2":"3.016630450973025","y2":"21.500000000480213"}),
          h('line', {"x1":"12.016630450973025","y1":"14.000000000480213","x2":"3.016630450973025","y2":"14.000000000480213"}),
          h('line', {"x1":"16.016630450973025","y1":"9.000000000480213","x2":"3.016630450973025","y2":"9.000000000480213"})
        ]
      );
  }
});

module.exports = ChartBarHorizontalPeakAxis;
module.exports.ChartBarHorizontalPeakAxis = ChartBarHorizontalPeakAxis;
module.exports.default = ChartBarHorizontalPeakAxis;
