'use strict';

const { defineComponent, h } = require('vue');

const ProgressBarMultipleSegmentedSharp = defineComponent({
  name: 'ProgressBarMultipleSegmentedSharp',
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
          h('rect', {"x":"1.949462885140747","y":"2.000000000480213","width":"20","height":"4"}),
          h('rect', {"x":"1.949462885140747","y":"10.000000000480213","width":"20","height":"4"}),
          h('rect', {"x":"1.949462885140747","y":"18.000000000480213","width":"20","height":"4"}),
          h('line', {"x1":"4.949462885142566","y1":"2.000000000480213","x2":"4.949462885142566","y2":"6.000000000480213"}),
          h('line', {"x1":"7.949462885142566","y1":"2.000000000480213","x2":"7.949462885142566","y2":"6.000000000480213"}),
          h('line', {"x1":"4.949462885142566","y1":"18.000000000480213","x2":"4.949462885142566","y2":"22.000000000480213"}),
          h('line', {"x1":"7.949462885142566","y1":"18.000000000480213","x2":"7.949462885142566","y2":"22.000000000480213"}),
          h('line', {"x1":"10.949462885142566","y1":"18.000000000480213","x2":"10.949462885142566","y2":"22.000000000480213"}),
          h('line', {"x1":"4.949462885142566","y1":"10.000000000480213","x2":"4.949462885142566","y2":"14.000000000480213"}),
          h('line', {"x1":"7.949462885142566","y1":"10.000000000480213","x2":"7.949462885142566","y2":"14.000000000480213"}),
          h('line', {"x1":"10.949462885142566","y1":"10.000000000480213","x2":"10.949462885142566","y2":"14.000000000480213"}),
          h('line', {"x1":"13.949462885142566","y1":"10.000000000480213","x2":"13.949462885142566","y2":"14.000000000480213"})
        ]
      );
  }
});

module.exports = ProgressBarMultipleSegmentedSharp;
module.exports.ProgressBarMultipleSegmentedSharp = ProgressBarMultipleSegmentedSharp;
module.exports.default = ProgressBarMultipleSegmentedSharp;
