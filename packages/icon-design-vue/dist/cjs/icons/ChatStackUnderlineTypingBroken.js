'use strict';

const { defineComponent, h } = require('vue');

const ChatStackUnderlineTypingBroken = defineComponent({
  name: 'ChatStackUnderlineTypingBroken',
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
          h('path', {"d":"M17 2L5 2C3.344 2 2 3.344 2 5L2 11"}),
          h('path', {"d":"M14 18L17 16L19 16C20.656 16 22 14.656 22 13L22 9C22 7.344 20.656 6 19 6L9 6C7.344 6 6 7.344 6 9L6 13C6 14.656 7.344 16 9 16L11 16"}),
          h('path', {"d":"M19 22L9 22"}),
          h('path', {"d":"M10 11L10 11"}),
          h('path', {"d":"M14 11L14 11"}),
          h('path', {"d":"M18 11L18 11"})
        ]
      );
  }
});

module.exports = ChatStackUnderlineTypingBroken;
module.exports.ChatStackUnderlineTypingBroken = ChatStackUnderlineTypingBroken;
module.exports.default = ChatStackUnderlineTypingBroken;
