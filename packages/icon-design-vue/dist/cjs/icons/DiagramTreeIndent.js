'use strict';

const { defineComponent, h } = require('vue');

const DiagramTreeIndent = defineComponent({
  name: 'DiagramTreeIndent',
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
          h('rect', {"x":"2.949462885142566","y":"2.000000000480213","width":"8","height":"4"}),
          h('rect', {"x":"12.949462885142566","y":"10.000000000480213","width":"8","height":"4"}),
          h('rect', {"x":"12.949462885142566","y":"18.000000000480213","width":"8","height":"4"}),
          h('polyline', {"points":"6.949462885142566 6.000000000480213 6.949462885142566 20.000000000480213 12.949462885142566 20.000000000480213"}),
          h('line', {"x1":"6.949462885142566","y1":"12.000000000480213","x2":"12.949462885142566","y2":"12.000000000480213"})
        ]
      );
  }
});

module.exports = DiagramTreeIndent;
module.exports.DiagramTreeIndent = DiagramTreeIndent;
module.exports.default = DiagramTreeIndent;
