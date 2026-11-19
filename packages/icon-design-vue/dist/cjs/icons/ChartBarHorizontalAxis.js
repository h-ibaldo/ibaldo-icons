'use strict';

const { defineComponent, h } = require('vue');

const ChartBarHorizontalAxis = defineComponent({
  name: 'ChartBarHorizontalAxis',
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
          h('polyline', {"points":"3.016630450973025 20.000000000480213 21.016630450973025 20.000000000480213 21.016630450973025 15.000000000480213 16.016630450973025 15.000000000480213 16.016630450973025 10.000000000480213 11.016630450973025 10.000000000480213 11.016630450973025 5.000000000480213 3.016630450973025 5.000000000480213"}),
          h('line', {"x1":"3.016630450973025","y1":"2.500000000480213","x2":"3.016630450973025","y2":"22.000000000480213"}),
          h('line', {"x1":"16.016630450973025","y1":"15.000000000480213","x2":"3.016630450973025","y2":"15.000000000480213"}),
          h('line', {"x1":"11.016630450973025","y1":"10.000000000480213","x2":"3.016630450973025","y2":"10.000000000480213"})
        ]
      );
  }
});

module.exports = ChartBarHorizontalAxis;
module.exports.ChartBarHorizontalAxis = ChartBarHorizontalAxis;
module.exports.default = ChartBarHorizontalAxis;
