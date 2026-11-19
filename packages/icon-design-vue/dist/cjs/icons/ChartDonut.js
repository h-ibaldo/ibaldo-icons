'use strict';

const { defineComponent, h } = require('vue');

const ChartDonut = defineComponent({
  name: 'ChartDonut',
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
          h('circle', {"cx":"11.949462885142566","cy":"12.000000000480213","r":"10"}),
          h('circle', {"cx":"11.949462885142566","cy":"12.000000000480213","r":"5"}),
          h('line', {"x1":"11.949462885142566","y1":"2.000000000480213","x2":"11.949462885142566","y2":"7.000000000480213"}),
          h('line', {"x1":"19.020530697164759","y1":"19.071067812190449","x2":"15.484996791152298","y2":"15.535533906338969"})
        ]
      );
  }
});

module.exports = ChartDonut;
module.exports.ChartDonut = ChartDonut;
module.exports.default = ChartDonut;
