'use strict';

const { defineComponent, h } = require('vue');

const EyeArc = defineComponent({
  name: 'EyeArc',
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
          h('circle', {"cx":"12.075805663474966","cy":"11.997565472718634","r":"4.999999999999545"}),
          h('path', {"d":"M22.075805663474966,12.020331586000793c-2.27978515625-3.0439453125-5.904296875-5.02276611328125-10-5.02276611328125s-7.72021484375,1.97882080078125-10,5.02276611328125"})
        ]
      );
  }
});

module.exports = EyeArc;
module.exports.EyeArc = EyeArc;
module.exports.default = EyeArc;
