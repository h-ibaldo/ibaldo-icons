'use strict';

const { defineComponent, h } = require('vue');

const ChecklistTop = defineComponent({
  name: 'ChecklistTop',
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
          h('line', {"x1":"10.949462885140747","y1":"4.000000000480213","x2":"21.949462885140747","y2":"4.000000000480213"}),
          h('line', {"x1":"10.949462885140747","y1":"12.000000000480213","x2":"21.949462885140747","y2":"12.000000000480213"}),
          h('line', {"x1":"10.949462885140747","y1":"20.000000000480213","x2":"21.949462885140747","y2":"20.000000000480213"}),
          h('polyline', {"points":"1.949462885140747 4.000000000480213 3.949462885140747 6.000000000480213 6.949462885140747 2.000000000480213"})
        ]
      );
  }
});

module.exports = ChecklistTop;
module.exports.ChecklistTop = ChecklistTop;
module.exports.default = ChecklistTop;
