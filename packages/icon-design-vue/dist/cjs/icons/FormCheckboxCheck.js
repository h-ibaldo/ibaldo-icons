'use strict';

const { defineComponent, h } = require('vue');

const FormCheckboxCheck = defineComponent({
  name: 'FormCheckboxCheck',
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
          h('polyline', {"points":"5.050537107349555 11.998779300163733 6.550537107349555 13.498779300163733 9.050537107350465 10.498779300163733"}),
          h('line', {"x1":"16.050537107350465","y1":"11.998779300163733","x2":"22.050537107350465","y2":"11.998779300163733"}),
          h('rect', {"x":"2.050537107349555","y":"6.998779300163733","width":"10.000000000000909","height":"10","rx":"1","ry":"1"})
        ]
      );
  }
});

module.exports = FormCheckboxCheck;
module.exports.FormCheckboxCheck = FormCheckboxCheck;
module.exports.default = FormCheckboxCheck;
