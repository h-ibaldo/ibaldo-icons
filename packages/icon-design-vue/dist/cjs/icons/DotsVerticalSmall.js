'use strict';

const { defineComponent, h } = require('vue');

const DotsVerticalSmall = defineComponent({
  name: 'DotsVerticalSmall',
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
          h('line', {"x1":"12.035268553439892","y1":"4.999996485714291","x2":"12.025268553439673","y2":"4.999996485714291"}),
          h('line', {"x1":"12.035268553439892","y1":"11.999996485714291","x2":"12.025268553439673","y2":"11.999996485714291"}),
          h('line', {"x1":"12.035268553439892","y1":"18.999996485714291","x2":"12.025268553439673","y2":"18.999996485714291"})
        ]
      );
  }
});

module.exports = DotsVerticalSmall;
module.exports.DotsVerticalSmall = DotsVerticalSmall;
module.exports.default = DotsVerticalSmall;
