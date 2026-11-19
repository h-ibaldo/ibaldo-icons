'use strict';

const { defineComponent, h } = require('vue');

const DotsVerticalSmallSpaced = defineComponent({
  name: 'DotsVerticalSmallSpaced',
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
          h('line', {"x1":"12.035268553439892","y1":"2.999996485714291","x2":"12.025268553439673","y2":"2.999996485714291"}),
          h('line', {"x1":"12.035268553439892","y1":"11.999996485714291","x2":"12.025268553439673","y2":"11.999996485714291"}),
          h('line', {"x1":"12.035268553439892","y1":"20.999996485714291","x2":"12.025268553439673","y2":"20.999996485714291"})
        ]
      );
  }
});

module.exports = DotsVerticalSmallSpaced;
module.exports.DotsVerticalSmallSpaced = DotsVerticalSmallSpaced;
module.exports.default = DotsVerticalSmallSpaced;
