'use strict';

const { defineComponent, h } = require('vue');

const ChatDollarSharp = defineComponent({
  name: 'ChatDollarSharp',
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
          h('path', {"d":"M14 8.5L13.449 8.316C12.82 8.105 12.16 8 11.5 8C10.395 8 9.5 8.895 9.5 10C9.5 11.105 10.395 12 11.5 12L12.5 12C13.605 12 14.5 12.895 14.5 14C14.5 15.105 13.605 16 12.5 16C11.84 16 11.18 15.895 10.551 15.684L10 15.5"}),
          h('path', {"d":"M12 7L12 8"}),
          h('path', {"d":"M12 16L12 17"}),
          h('path', {"d":"M12 2C6.477 2 2 6.477 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"})
        ]
      );
  }
});

module.exports = ChatDollarSharp;
module.exports.ChatDollarSharp = ChatDollarSharp;
module.exports.default = ChatDollarSharp;
