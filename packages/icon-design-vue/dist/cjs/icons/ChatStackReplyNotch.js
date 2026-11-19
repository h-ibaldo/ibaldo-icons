'use strict';

const { defineComponent, h } = require('vue');

const ChatStackReplyNotch = defineComponent({
  name: 'ChatStackReplyNotch',
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
          h('path', {"d":"M2 4L2 12C2 13.105 2.895 14 4 14L5 14L5 18L10 14L16 14C17.105 14 18 13.105 18 12L18 4C18 2.895 17.105 2 16 2L4 2C2.895 2 2 2.895 2 4Z"}),
          h('path', {"d":"M22 8L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L12 18"}),
          h('path', {"d":"M9 10L7 8L9 6"}),
          h('path', {"d":"M7 8L11 8C12.105 8 13 8.895 13 10"})
        ]
      );
  }
});

module.exports = ChatStackReplyNotch;
module.exports.ChatStackReplyNotch = ChatStackReplyNotch;
module.exports.default = ChatStackReplyNotch;
