'use strict';

const { defineComponent, h } = require('vue');

const ChatDotsVerticalWide = defineComponent({
  name: 'ChatDotsVerticalWide',
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
          h('path', {"d":"M22 2L22 2"}),
          h('path', {"d":"M22 6L22 6"}),
          h('path', {"d":"M22 10L22 10"}),
          h('path', {"d":"M17 3.293C16.367 3.105 15.695 3 15 3L9 3C5.133 3 2 6.133 2 10C2 13.172 4.109 15.848 7 16.707L7 21L11.57 17L15 17C17.379 17 19.477 15.813 20.738 14"})
        ]
      );
  }
});

module.exports = ChatDotsVerticalWide;
module.exports.ChatDotsVerticalWide = ChatDotsVerticalWide;
module.exports.default = ChatDotsVerticalWide;
