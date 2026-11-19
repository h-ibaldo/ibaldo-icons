'use strict';

const { defineComponent, h } = require('vue');

const ChatStackTypingBroken = defineComponent({
  name: 'ChatStackTypingBroken',
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
          h('path', {"d":"M17 2L5 2C3.344 2 2 3.344 2 5L2 13"}),
          h('path', {"d":"M14 22L17 18L19 18C20.656 18 22 16.656 22 15L22 9C22 7.344 20.656 6 19 6L9 6C7.344 6 6 7.344 6 9L6 15C6 16.656 7.344 18 9 18L11 18"}),
          h('path', {"d":"M10 12L10 12"}),
          h('path', {"d":"M14 12L14 12"}),
          h('path', {"d":"M18 12L18 12"})
        ]
      );
  }
});

module.exports = ChatStackTypingBroken;
module.exports.ChatStackTypingBroken = ChatStackTypingBroken;
module.exports.default = ChatStackTypingBroken;
