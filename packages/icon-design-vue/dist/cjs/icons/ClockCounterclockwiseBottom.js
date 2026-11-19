'use strict';

const { defineComponent, h } = require('vue');

const ClockCounterclockwiseBottom = defineComponent({
  name: 'ClockCounterclockwiseBottom',
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
          h('path', {"d":"M20 22L20 18L16 18"}),
          h('path', {"d":"M19.984 18C18.16 20.426 15.27 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 12.684 21.93 13.355 21.801 14"}),
          h('path', {"d":"M12 7L12 12L17 12"})
        ]
      );
  }
});

module.exports = ClockCounterclockwiseBottom;
module.exports.ClockCounterclockwiseBottom = ClockCounterclockwiseBottom;
module.exports.default = ClockCounterclockwiseBottom;
