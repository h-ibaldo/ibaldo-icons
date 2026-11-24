'use strict';

const { defineComponent, h } = require('vue');

const FormCentered = defineComponent({
  name: 'FormCentered',
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
          h('rect', {"x":"2.000000005000402","y":"2.000000003886271","width":"20","height":"5","rx":"1","ry":"1"}),
          h('rect', {"x":"2.000000005000402","y":"11.000000003886271","width":"20","height":"5","rx":"1","ry":"1"}),
          h('rect', {"x":"7.000000002616162","y":"20.000000004948035","width":"10","height":"1.999999987357029","rx":".999998940923852","ry":".999998940923852"})
        ]
      );
  }
});

module.exports = FormCentered;
module.exports.FormCentered = FormCentered;
module.exports.default = FormCentered;
