'use strict';

const { defineComponent, h } = require('vue');

const HourglassStandSand = defineComponent({
  name: 'HourglassStandSand',
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
          h('path', {"d":"M10 19L14 19"}),
          h('path', {"d":"M4 2L20 2"}),
          h('path', {"d":"M6 3L6 5.324C6 6.996 6.836 8.559 8.227 9.484L12 12L15.773 9.484C17.164 8.559 18 6.996 18 5.324L18 3"}),
          h('path', {"d":"M20 22L4 22"}),
          h('path', {"d":"M18 21L18 18.676C18 17.004 17.164 15.441 15.773 14.516L12 12L8.227 14.516C6.836 15.441 6 17.004 6 18.676L6 21"})
        ]
      );
  }
});

module.exports = HourglassStandSand;
module.exports.HourglassStandSand = HourglassStandSand;
module.exports.default = HourglassStandSand;
