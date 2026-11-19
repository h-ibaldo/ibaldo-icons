'use strict';

const { defineComponent, h } = require('vue');

const ChatDotsCircleSharp = defineComponent({
  name: 'ChatDotsCircleSharp',
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
          h('path', {"d":"M22 7C22 9.762 19.762 12 17 12C14.238 12 12 9.762 12 7C12 4.238 14.238 2 17 2C19.762 2 22 4.238 22 7Z"}),
          h('path', {"d":"M15.5 7L15.5 7"}),
          h('path', {"d":"M18.5 7L18.5 7"}),
          h('path', {"d":"M9 2.461C4.941 3.734 2 7.523 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C16.477 22 20.266 19.059 21.539 15"})
        ]
      );
  }
});

module.exports = ChatDotsCircleSharp;
module.exports.ChatDotsCircleSharp = ChatDotsCircleSharp;
module.exports.default = ChatDotsCircleSharp;
