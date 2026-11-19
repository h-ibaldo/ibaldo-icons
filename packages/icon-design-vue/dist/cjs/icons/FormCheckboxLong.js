'use strict';

const { defineComponent, h } = require('vue');

const FormCheckboxLong = defineComponent({
  name: 'FormCheckboxLong',
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
          h('line', {"x1":"13.050537107350465","y1":"11.998779300185561","x2":"22.050537107350465","y2":"11.998779300185561"}),
          h('rect', {"x":"2.050537107350465","y":"7.998779300185561","width":"8","height":"8","rx":"1","ry":"1"})
        ]
      );
  }
});

module.exports = FormCheckboxLong;
module.exports.FormCheckboxLong = FormCheckboxLong;
module.exports.default = FormCheckboxLong;
