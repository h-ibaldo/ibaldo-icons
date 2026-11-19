'use strict';

const { defineComponent, h } = require('vue');

const FormRowsSquare = defineComponent({
  name: 'FormRowsSquare',
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
          h('rect', {"x":"10.000000005000402","y":"6.000000003886271","width":"9","height":"4","rx":"1","ry":"1"}),
          h('rect', {"x":"2.000000005000402","y":"2.000000003886271","width":"20","height":"19.999999999997272","rx":"1","ry":"1"}),
          h('line', {"x1":"5.000000005000402","y1":"8.000000003886271","x2":"7.000000005000402","y2":"8.000000003886271"}),
          h('rect', {"x":"10.000000005000402","y":"14.000000003886271","width":"9","height":"4","rx":"1","ry":"1"}),
          h('line', {"x1":"5.000000005000402","y1":"16.000000003886271","x2":"7.000000005000402","y2":"16.000000003886271"})
        ]
      );
  }
});

module.exports = FormRowsSquare;
module.exports.FormRowsSquare = FormRowsSquare;
module.exports.default = FormRowsSquare;
