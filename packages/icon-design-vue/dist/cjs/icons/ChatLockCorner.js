'use strict';

const { defineComponent, h } = require('vue');

const ChatLockCorner = defineComponent({
  name: 'ChatLockCorner',
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
          h('path', {"d":"M22 13L14 13L14 8L22 8Z"}),
          h('path', {"d":"M15 8L15 6C15 4.344 16.344 3 18 3C19.656 3 21 4.344 21 6L21 8"}),
          h('path', {"d":"M11 3.039C5.945 3.441 2 6.852 2 11C2 13.84 3.855 16.328 6.645 17.75C6.664 18.895 6.391 20.078 5.719 21.113C5.48 21.48 5.766 21.973 6.195 21.898C8.313 21.535 9.781 20.23 10.715 18.926C11.137 18.969 11.563 19 12 19C14.531 19 16.836 18.242 18.598 17"})
        ]
      );
  }
});

module.exports = ChatLockCorner;
module.exports.ChatLockCorner = ChatLockCorner;
module.exports.default = ChatLockCorner;
