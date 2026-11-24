'use strict';

const { defineComponent, h } = require('vue');

const WindowSquare = defineComponent({
  name: 'WindowSquare',
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
          h('rect', {"x":"1.898925794721436","y":"1.99877930292314","width":"20","height":"20","rx":"3","ry":"3"}),
          h('rect', {"x":"6.898925794721436","y":"6.99877930292314","width":"10","height":"10","rx":"1","ry":"1"}),
          h('line', {"x1":"6.898925794721436","y1":"10.99877930292314","x2":"16.898925794721436","y2":"10.99877930292314"})
        ]
      );
  }
});

module.exports = WindowSquare;
module.exports.WindowSquare = WindowSquare;
module.exports.default = WindowSquare;
