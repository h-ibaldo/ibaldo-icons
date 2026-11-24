'use strict';

const { defineComponent, h } = require('vue');

const ClockDashedLong = defineComponent({
  name: 'ClockDashedLong',
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
          h('path', {"d":"M2.52 8.73C2.188 9.727 2 10.789 2 11.895C2 13.004 2.188 14.063 2.52 15.059"}),
          h('path', {"d":"M19.477 5.27C18.066 3.68 16.164 2.535 14 2.098"}),
          h('path', {"d":"M21.48 15.059C21.813 14.066 22 13.004 22 11.895C22 10.789 21.813 9.727 21.48 8.73"}),
          h('path', {"d":"M10 2.098C7.836 2.535 5.934 3.68 4.523 5.27"}),
          h('path', {"d":"M14 21.695C16.164 21.258 18.066 20.109 19.477 18.52"}),
          h('path', {"d":"M4.523 18.523C5.934 20.113 7.836 21.254 10 21.695"}),
          h('path', {"d":"M12 7L12 12L17 14"})
        ]
      );
  }
});

module.exports = ClockDashedLong;
module.exports.ClockDashedLong = ClockDashedLong;
module.exports.default = ClockDashedLong;
