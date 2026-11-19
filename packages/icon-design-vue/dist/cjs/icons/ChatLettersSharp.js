'use strict';

const { defineComponent, h } = require('vue');

const ChatLettersSharp = defineComponent({
  name: 'ChatLettersSharp',
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
          h('path', {"d":"M14 15C13.172 15 12.5 14.328 12.5 13.5L12.5 10.5C12.5 9.672 13.172 9 14 9C14.828 9 15.5 9.672 15.5 10.5L15.5 13.5C15.5 14.328 14.828 15 14 15Z"}),
          h('path', {"d":"M6.5 15L7.5 15C8.328 15 9 14.328 9 13.5C9 12.672 8.328 12 7.5 12C6.672 12 6 11.328 6 10.5C6 9.672 6.672 9 7.5 9L8.5 9"}),
          h('path', {"d":"M19.5 15L20.5 15C21.328 15 22 14.328 22 13.5C22 12.672 21.328 12 20.5 12C19.672 12 19 11.328 19 10.5C19 9.672 19.672 9 20.5 9L21.5 9"}),
          h('path', {"d":"M19.137 5C17.32 3.148 14.797 2 12 2C6.477 2 2 6.477 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C14.797 22 17.32 20.852 19.137 19"})
        ]
      );
  }
});

module.exports = ChatLettersSharp;
module.exports.ChatLettersSharp = ChatLettersSharp;
module.exports.default = ChatLettersSharp;
