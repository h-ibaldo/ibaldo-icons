'use strict';

const { defineComponent, h } = require('vue');

const ChatXCircleSharp = defineComponent({
  name: 'ChatXCircleSharp',
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
          h('path', {"d":"M22 7.5C22 10.539 19.539 13 16.5 13C13.461 13 11 10.539 11 7.5C11 4.461 13.461 2 16.5 2C19.539 2 22 4.461 22 7.5Z"}),
          h('path', {"d":"M14.75 9.25L18.25 5.75"}),
          h('path', {"d":"M18.25 9.25L14.75 5.75"}),
          h('path', {"d":"M10 2.199C5.438 3.129 2 7.16 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C16.84 22 20.871 18.566 21.801 14"})
        ]
      );
  }
});

module.exports = ChatXCircleSharp;
module.exports.ChatXCircleSharp = ChatXCircleSharp;
module.exports.default = ChatXCircleSharp;
