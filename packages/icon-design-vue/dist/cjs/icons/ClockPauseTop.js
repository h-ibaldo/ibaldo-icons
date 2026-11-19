'use strict';

const { defineComponent, h } = require('vue');

const ClockPauseTop = defineComponent({
  name: 'ClockPauseTop',
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
          h('path', {"d":"M12 7L12 12L17 14"}),
          h('path', {"d":"M17 7L17 2"}),
          h('path', {"d":"M21 7L21 2"}),
          h('path', {"d":"M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12"})
        ]
      );
  }
});

module.exports = ClockPauseTop;
module.exports.ClockPauseTop = ClockPauseTop;
module.exports.default = ClockPauseTop;
