'use strict';

const { defineComponent, h } = require('vue');

const ClockPlusTop = defineComponent({
  name: 'ClockPlusTop',
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
          h('path', {"d":"M19 2L19 8"}),
          h('path', {"d":"M22 5L16 5"}),
          h('path', {"d":"M13 2.051C12.672 2.016 12.34 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 11.664 21.98 11.328 21.949 11"}),
          h('path', {"d":"M12 7L12 12L17 14"})
        ]
      );
  }
});

module.exports = ClockPlusTop;
module.exports.ClockPlusTop = ClockPlusTop;
module.exports.default = ClockPlusTop;
