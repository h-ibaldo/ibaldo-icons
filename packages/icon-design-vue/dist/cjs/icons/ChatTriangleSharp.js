'use strict';

const { defineComponent, h } = require('vue');

const ChatTriangleSharp = defineComponent({
  name: 'ChatTriangleSharp',
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
          h('path', {"d":"M13.648 11L20.352 11C21.516 11 22.238 9.727 21.637 8.727L18.285 3.145C17.703 2.172 16.297 2.172 15.715 3.145L12.363 8.727C11.762 9.727 12.484 11 13.648 11Z"}),
          h('path', {"d":"M11 2.051C5.945 2.551 2 6.816 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C16.477 22 20.266 19.055 21.539 15"})
        ]
      );
  }
});

module.exports = ChatTriangleSharp;
module.exports.ChatTriangleSharp = ChatTriangleSharp;
module.exports.default = ChatTriangleSharp;
