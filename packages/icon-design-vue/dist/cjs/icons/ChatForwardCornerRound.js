'use strict';

const { defineComponent, h } = require('vue');

const ChatForwardCornerRound = defineComponent({
  name: 'ChatForwardCornerRound',
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
          h('path', {"d":"M15 5L22 5"}),
          h('path', {"d":"M20 3L22 5L20 7"}),
          h('path', {"d":"M12 2C6.477 2 2 6.477 2 12C2 14.625 3.02 17.008 4.676 18.789L2 22L12 22C17.523 22 22 17.523 22 12C22 11.664 21.98 11.328 21.949 11"})
        ]
      );
  }
});

module.exports = ChatForwardCornerRound;
module.exports.ChatForwardCornerRound = ChatForwardCornerRound;
module.exports.default = ChatForwardCornerRound;
