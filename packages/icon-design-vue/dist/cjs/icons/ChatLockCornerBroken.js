'use strict';

const { defineComponent, h } = require('vue');

const ChatLockCornerBroken = defineComponent({
  name: 'ChatLockCornerBroken',
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
          h('path', {"d":"M11 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L9 18"}),
          h('path', {"d":"M22 12L14 12L14 7L22 7Z"}),
          h('path', {"d":"M15 7L15 5C15 3.344 16.344 2 18 2C19.656 2 21 3.344 21 5L21 7"}),
          h('path', {"d":"M21.816 16C21.402 17.164 20.305 18 19 18L15 18L12 22"})
        ]
      );
  }
});

module.exports = ChatLockCornerBroken;
module.exports.ChatLockCornerBroken = ChatLockCornerBroken;
module.exports.default = ChatLockCornerBroken;
