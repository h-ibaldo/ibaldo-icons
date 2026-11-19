'use strict';

const { defineComponent, h } = require('vue');

const ClockDottedTop = defineComponent({
  name: 'ClockDottedTop',
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
          h('path', {"d":"M22 2L22 2"}),
          h('path', {"d":"M22 6L22 6"}),
          h('path', {"d":"M22 10L22 10"}),
          h('path', {"d":"M17 3.359C15.527 2.5 13.824 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C16.477 22 20.262 19.055 21.535 15"})
        ]
      );
  }
});

module.exports = ClockDottedTop;
module.exports.ClockDottedTop = ClockDottedTop;
module.exports.default = ClockDottedTop;
