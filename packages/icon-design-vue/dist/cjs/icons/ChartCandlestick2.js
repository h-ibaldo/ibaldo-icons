'use strict';

const { defineComponent, h } = require('vue');

const ChartCandlestick2 = defineComponent({
  name: 'ChartCandlestick2',
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
          h('rect', {"x":"2.016630450973025","y":"10.000000000480213","width":"4","height":"8.999999999996362"}),
          h('line', {"x1":"4.016630450973025","y1":"7.000000000480213","x2":"4.016630450973025","y2":"10.000000000480213"}),
          h('line', {"x1":"4.016630450973025","y1":"19.000000000480213","x2":"4.016630450973025","y2":"22.000000000480213"}),
          h('rect', {"x":"10.016630450973025","y":"10.000000000480213","width":"4","height":"5.999999999996362"}),
          h('line', {"x1":"12.016630450973025","y1":"7.000000000480213","x2":"12.016630450973025","y2":"10.000000000480213"}),
          h('line', {"x1":"12.016630450973025","y1":"16.000000000480213","x2":"12.016630450973025","y2":"19.000000000480213"}),
          h('rect', {"x":"18.016630450973025","y":"5.000000000480213","width":"4","height":"10.999999999996362"}),
          h('line', {"x1":"20.016630450973025","y1":"2.000000000480213","x2":"20.016630450973025","y2":"5.000000000480213"}),
          h('line', {"x1":"20.016630450973025","y1":"16.000000000480213","x2":"20.016630450973025","y2":"19.000000000480213"})
        ]
      );
  }
});

module.exports = ChartCandlestick2;
module.exports.ChartCandlestick2 = ChartCandlestick2;
module.exports.default = ChartCandlestick2;
