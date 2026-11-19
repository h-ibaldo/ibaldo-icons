'use strict';

const { defineComponent, h } = require('vue');

const FormRadioLong = defineComponent({
  name: 'FormRadioLong',
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
          h('circle', {"cx":"5.999999991062396","cy":"12","r":"4"}),
          h('line', {"x1":"14","y1":"12","x2":"22","y2":"12"})
        ]
      );
  }
});

module.exports = FormRadioLong;
module.exports.FormRadioLong = FormRadioLong;
module.exports.default = FormRadioLong;
