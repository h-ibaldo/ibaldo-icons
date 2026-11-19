'use strict';

const { defineComponent, h } = require('vue');

const ChatStackUnderlineTypingFacing = defineComponent({
  name: 'ChatStackUnderlineTypingFacing',
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
          h('path', {"d":"M22 22L13 22"}),
          h('path', {"d":"M6 6L6 6"}),
          h('path', {"d":"M10 6L10 6"}),
          h('path', {"d":"M14 6L14 6"}),
          h('path', {"d":"M2 4L2 14L7 10L16 10C17.105 10 18 9.105 18 8L18 4C18 2.895 17.105 2 16 2L4 2C2.895 2 2 2.895 2 4Z"}),
          h('path', {"d":"M8 13C8 14.105 8.895 15 10 15L17 15L22 18L22 9.414C22 8.508 21.641 7.641 21 7"})
        ]
      );
  }
});

module.exports = ChatStackUnderlineTypingFacing;
module.exports.ChatStackUnderlineTypingFacing = ChatStackUnderlineTypingFacing;
module.exports.default = ChatStackUnderlineTypingFacing;
