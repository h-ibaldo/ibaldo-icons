'use strict';

const { defineComponent, h } = require('vue');

const WindowGrid = defineComponent({
  name: 'WindowGrid',
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
          h('rect', {"x":"2","y":"2","width":"8","height":"8","rx":"1","ry":"1"}),
          h('rect', {"x":"14","y":"2","width":"8","height":"8","rx":"1","ry":"1"}),
          h('rect', {"x":"2","y":"14","width":"8","height":"8","rx":"1","ry":"1"}),
          h('rect', {"x":"14","y":"14","width":"8","height":"8","rx":"1","ry":"1"}),
          h('line', {"x1":"2","y1":"4","x2":"10","y2":"4"}),
          h('line', {"x1":"2","y1":"16.000000000000909","x2":"10","y2":"16.000000000000909"}),
          h('line', {"x1":"14","y1":"4","x2":"22","y2":"4"}),
          h('line', {"x1":"14","y1":"16.000000000000909","x2":"22","y2":"16.000000000000909"})
        ]
      );
  }
});

module.exports = WindowGrid;
module.exports.WindowGrid = WindowGrid;
module.exports.default = WindowGrid;
