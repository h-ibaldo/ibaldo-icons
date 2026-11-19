'use strict';

const { defineComponent, h } = require('vue');

const ChatPlusCornerWide = defineComponent({
  name: 'ChatPlusCornerWide',
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
          h('path', {"d":"M19 2L19 8"}),
          h('path', {"d":"M22 5L16 5"}),
          h('path', {"d":"M12 3L9 3C5.133 3 2 6.133 2 10C2 13.172 4.109 15.848 7 16.707L7 21L11.57 17L15 17C18.523 17 21.434 14.391 21.922 11"})
        ]
      );
  }
});

module.exports = ChatPlusCornerWide;
module.exports.ChatPlusCornerWide = ChatPlusCornerWide;
module.exports.default = ChatPlusCornerWide;
