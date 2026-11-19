'use strict';

const { defineComponent, h } = require('vue');

const ProgressBarMultipleStripedJoined = defineComponent({
  name: 'ProgressBarMultipleStripedJoined',
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
          h('rect', {"x":"1.949462885142566","y":"3.000000000480213","width":"20","height":"18"}),
          h('line', {"x1":"21.949462885142566","y1":"15.000000000480213","x2":"1.949462885142566","y2":"15.000000000480213"}),
          h('line', {"x1":"1.949462885142566","y1":"9.000000000480213","x2":"21.949462885142566","y2":"9.000000000480213"}),
          h('line', {"x1":"15.949462885142566","y1":"9.000000000480213","x2":"15.949462885142566","y2":"15.000000000480213"}),
          h('line', {"x1":"7.949462885142566","y1":"3.000000000480213","x2":"7.949462885142566","y2":"9.000000000480213"}),
          h('line', {"x1":"12.949462885142566","y1":"15.000000000480213","x2":"12.949462885142566","y2":"21.000000000480213"}),
          h('line', {"x1":"1.949462885142566","y1":"7.000000000480213","x2":"5.949462885142566","y2":"3.000000000480213"}),
          h('line', {"x1":"1.949462885142566","y1":"13.000000000480213","x2":"5.949462885142566","y2":"9.000000000480213"}),
          h('line', {"x1":"3.949462885142566","y1":"15.000000000480213","x2":"9.949462885142566","y2":"9.000000000480213"}),
          h('line', {"x1":"7.949462885142566","y1":"15.000000000480213","x2":"13.949462885142566","y2":"9.000000000480213"}),
          h('line', {"x1":"1.949462885142566","y1":"19.000000000480213","x2":"5.949462885142566","y2":"15.000000000480213"}),
          h('line', {"x1":"3.949462885142566","y1":"21.000000000480213","x2":"9.949462885142566","y2":"15.000000000480213"}),
          h('line', {"x1":"7.949462885142566","y1":"21.000000000480213","x2":"12.949462885142566","y2":"16.000000000480213"}),
          h('line', {"x1":"11.949462885142566","y1":"15.000000000480213","x2":"15.949462885142566","y2":"11.000000000480213"}),
          h('line', {"x1":"3.949462885142566","y1":"9.000000000480213","x2":"7.949462885142566","y2":"5.000000000480213"})
        ]
      );
  }
});

module.exports = ProgressBarMultipleStripedJoined;
module.exports.ProgressBarMultipleStripedJoined = ProgressBarMultipleStripedJoined;
module.exports.default = ProgressBarMultipleStripedJoined;
