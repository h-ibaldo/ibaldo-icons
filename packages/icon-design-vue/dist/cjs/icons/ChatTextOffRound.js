'use strict';

const { defineComponent, h } = require('vue');

const ChatTextOffRound = defineComponent({
  name: 'ChatTextOffRound',
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
          h('path', {"d":"M3 2L21 21"}),
          h('path', {"d":"M5.383 4.516C3.313 6.348 2 9.02 2 12C2 14.625 3.02 17.008 4.672 18.789L2 22L12 22C14.789 22 17.309 20.855 19.121 19.016"}),
          h('path', {"d":"M21.434 15.293C21.793 14.258 22 13.156 22 12C22 6.477 17.523 2 12 2C11.035 2 10.105 2.145 9.219 2.398"}),
          h('path', {"d":"M15 10L16 10"}),
          h('path', {"d":"M8 10L10.578 10"}),
          h('path', {"d":"M8 14L14.367 14"})
        ]
      );
  }
});

module.exports = ChatTextOffRound;
module.exports.ChatTextOffRound = ChatTextOffRound;
module.exports.default = ChatTextOffRound;
