'use strict';

const { defineComponent, h } = require('vue');

const ChatStackTypingFlipped = defineComponent({
  name: 'ChatStackTypingFlipped',
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
          h('path', {"d":"M2 12L2 8C2 6.895 2.895 6 4 6L5 6L5 2L10 6L16 6C17.105 6 18 6.895 18 8L18 12C18 13.105 17.105 14 16 14L4 14C2.895 14 2 13.105 2 12Z"}),
          h('path', {"d":"M22 12L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L7 18"}),
          h('path', {"d":"M6 10L6 10"}),
          h('path', {"d":"M10 10L10 10"}),
          h('path', {"d":"M14 10L14 10"})
        ]
      );
  }
});

module.exports = ChatStackTypingFlipped;
module.exports.ChatStackTypingFlipped = ChatStackTypingFlipped;
module.exports.default = ChatStackTypingFlipped;
