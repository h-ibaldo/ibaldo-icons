'use strict';

const { defineComponent, h } = require('vue');

const FormRadioCheck = defineComponent({
  name: 'FormRadioCheck',
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
          h('line', {"x1":"18.00000000376167","y1":"11.999999998985004","x2":"22.00000000376167","y2":"11.999999998985004"}),
          h('circle', {"cx":"8.00000000376167","cy":"11.999999998985004","r":"6"}),
          h('polyline', {"points":"6.00000000376167 11.999999998985004 7.50000000376167 13.499999998985004 10.00000000376167 10.999999998985004"})
        ]
      );
  }
});

module.exports = FormRadioCheck;
module.exports.FormRadioCheck = FormRadioCheck;
module.exports.default = FormRadioCheck;
