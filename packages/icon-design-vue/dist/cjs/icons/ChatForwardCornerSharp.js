'use strict';

const { defineComponent, h } = require('vue');

const ChatForwardCornerSharp = defineComponent({
  name: 'ChatForwardCornerSharp',
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
          h('path', {"d":"M15 4L22 4"}),
          h('path', {"d":"M20 2L22 4L20 6"}),
          h('path', {"d":"M11 2.051C5.945 2.551 2 6.816 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C17.523 22 22 17.523 22 12C22 11.316 21.93 10.645 21.801 10"})
        ]
      );
  }
});

module.exports = ChatForwardCornerSharp;
module.exports.ChatForwardCornerSharp = ChatForwardCornerSharp;
module.exports.default = ChatForwardCornerSharp;
