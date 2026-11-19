'use strict';

const { defineComponent, h } = require('vue');

const ChatEyeSharp = defineComponent({
  name: 'ChatEyeSharp',
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
          h('path', {"d":"M15.531 7.5C14.98 7.5 14.531 7.051 14.531 6.5C14.531 5.949 14.98 5.5 15.531 5.5C16.086 5.5 16.531 5.949 16.531 6.5C16.531 7.051 16.086 7.5 15.531 7.5Z"}),
          h('path', {"d":"M15.531 2C12.547 2 10.008 3.871 9 6.5C10.008 9.129 12.547 11 15.531 11C18.516 11 21.059 9.129 22.063 6.5C21.059 3.871 18.516 2 15.531 2Z"}),
          h('path', {"d":"M6 4.016C3.574 5.84 2 8.73 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C17.188 22 21.449 18.055 21.949 13"})
        ]
      );
  }
});

module.exports = ChatEyeSharp;
module.exports.ChatEyeSharp = ChatEyeSharp;
module.exports.default = ChatEyeSharp;
