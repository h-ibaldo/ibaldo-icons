'use strict';

const { defineComponent, h } = require('vue');

const ChatStackPlusCornerNotch = defineComponent({
  name: 'ChatStackPlusCornerNotch',
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
          h('path', {"d":"M4 2L4 6"}),
          h('path', {"d":"M6 4L2 4"}),
          h('path', {"d":"M2 10L2 12C2 13.105 2.895 14 4 14L5 14L5 18L10 14L16 14C17.105 14 18 13.105 18 12L18 4C18 2.895 17.105 2 16 2L10 2"}),
          h('path', {"d":"M22 8L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L12 18"})
        ]
      );
  }
});

module.exports = ChatStackPlusCornerNotch;
module.exports.ChatStackPlusCornerNotch = ChatStackPlusCornerNotch;
module.exports.default = ChatStackPlusCornerNotch;
