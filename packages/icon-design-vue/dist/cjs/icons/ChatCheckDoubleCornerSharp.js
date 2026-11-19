'use strict';

const { defineComponent, h } = require('vue');

const ChatCheckDoubleCornerSharp = defineComponent({
  name: 'ChatCheckDoubleCornerSharp',
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
          h('path', {"d":"M12 4L13.5 6L18 2"}),
          h('path', {"d":"M16.801 7.066L17.5 8L22 4"}),
          h('path', {"d":"M8 2.84C4.469 4.383 2 7.898 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C17.523 22 22 17.523 22 12C22 11.664 21.98 11.328 21.949 11"})
        ]
      );
  }
});

module.exports = ChatCheckDoubleCornerSharp;
module.exports.ChatCheckDoubleCornerSharp = ChatCheckDoubleCornerSharp;
module.exports.default = ChatCheckDoubleCornerSharp;
