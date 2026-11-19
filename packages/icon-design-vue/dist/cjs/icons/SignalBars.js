'use strict';

const { defineComponent, h } = require('vue');

const SignalBars = defineComponent({
  name: 'SignalBars',
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
          h('path', {"d":"M2 21L2 15"}),
          h('path', {"d":"M7 21L7 12"}),
          h('path', {"d":"M12 21L12 9"}),
          h('path', {"d":"M17 21L17 6"}),
          h('path', {"d":"M22 21L22 3"})
        ]
      );
  }
});

module.exports = SignalBars;
module.exports.SignalBars = SignalBars;
module.exports.default = SignalBars;
