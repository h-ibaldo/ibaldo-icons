'use strict';

const { defineComponent, h } = require('vue');

const DiagramGrid = defineComponent({
  name: 'DiagramGrid',
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
          h('rect', {"x":"1.949462885142566","y":"15.000000000480213","width":"7","height":"7"}),
          h('rect', {"x":"14.949462885142566","y":"15.000000000480213","width":"7","height":"7"}),
          h('rect', {"x":"1.949462885142566","y":"2.000000000480213","width":"7","height":"7"}),
          h('rect', {"x":"14.949462885142566","y":"2.000000000480213","width":"7","height":"7"}),
          h('line', {"x1":"1.949462885142566","y1":"17.000000000480213","x2":"6.949462885142566","y2":"22.000000000480213"}),
          h('line', {"x1":"3.949462885142566","y1":"15.000000000480213","x2":"8.949462885142566","y2":"20.000000000480213"}),
          h('line', {"x1":"8.949462885142566","y1":"5.500000000480213","x2":"14.949462885142566","y2":"5.500000000480213"}),
          h('line', {"x1":"8.949462885142566","y1":"18.500000000480213","x2":"14.949462885142566","y2":"18.500000000480213"}),
          h('line', {"x1":"18.449462885142566","y1":"9.000000000480213","x2":"18.449462885142566","y2":"15.000000000480213"}),
          h('line', {"x1":"5.449462885142566","y1":"9.000000000480213","x2":"5.449462885142566","y2":"15.000000000480213"})
        ]
      );
  }
});

module.exports = DiagramGrid;
module.exports.DiagramGrid = DiagramGrid;
module.exports.default = DiagramGrid;
