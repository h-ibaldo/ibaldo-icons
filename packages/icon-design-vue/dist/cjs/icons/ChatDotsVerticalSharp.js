'use strict';

const { defineComponent, h } = require('vue');

const ChatDotsVerticalSharp = defineComponent({
  name: 'ChatDotsVerticalSharp',
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
          h('path', {"d":"M17 3.348C15.527 2.496 13.824 2 12 2C6.477 2 2 6.477 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C16.477 22 20.266 19.055 21.539 15"})
        ]
      );
  }
});

module.exports = ChatDotsVerticalSharp;
module.exports.ChatDotsVerticalSharp = ChatDotsVerticalSharp;
module.exports.default = ChatDotsVerticalSharp;
