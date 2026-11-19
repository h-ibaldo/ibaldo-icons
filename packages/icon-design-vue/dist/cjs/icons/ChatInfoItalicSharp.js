'use strict';

const { defineComponent, h } = require('vue');

const ChatInfoItalicSharp = defineComponent({
  name: 'ChatInfoItalicSharp',
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
          h('path', {"d":"M12 2C6.477 2 2 6.477 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"}),
          h('path', {"d":"M10.5 12L10.918 11.582C11.238 11.262 11.762 11.262 12.082 11.582C12.332 11.832 12.395 12.215 12.234 12.531L10.766 15.469C10.605 15.785 10.668 16.168 10.918 16.418C11.238 16.738 11.762 16.738 12.082 16.418L12.5 16"}),
          h('path', {"d":"M13 7.5C13 7.777 12.777 8 12.5 8C12.223 8 12 7.777 12 7.5C12 7.223 12.223 7 12.5 7C12.777 7 13 7.223 13 7.5Z"})
        ]
      );
  }
});

module.exports = ChatInfoItalicSharp;
module.exports.ChatInfoItalicSharp = ChatInfoItalicSharp;
module.exports.default = ChatInfoItalicSharp;
