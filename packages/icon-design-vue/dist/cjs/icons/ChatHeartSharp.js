'use strict';

const { defineComponent, h } = require('vue');

const ChatHeartSharp = defineComponent({
  name: 'ChatHeartSharp',
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
          h('path', {"d":"M13 8.828L12 9.828L11 8.828C9.895 7.723 8.105 7.723 7 8.828C5.895 9.934 5.895 11.723 7 12.828L10.586 16.414C11.367 17.195 12.633 17.195 13.414 16.414L17 12.828C18.105 11.723 18.105 9.934 17 8.828C15.895 7.723 14.105 7.723 13 8.828Z"})
        ]
      );
  }
});

module.exports = ChatHeartSharp;
module.exports.ChatHeartSharp = ChatHeartSharp;
module.exports.default = ChatHeartSharp;
