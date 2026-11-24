'use strict';

const { defineComponent, h } = require('vue');

const ChatUserBoxy = defineComponent({
  name: 'ChatUserBoxy',
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
          h('path', {"d":"M2 5L2 22L7 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z"}),
          h('path', {"d":"M14.5 8.5C14.5 9.883 13.383 11 12 11C10.617 11 9.5 9.883 9.5 8.5C9.5 7.117 10.617 6 12 6C13.383 6 14.5 7.117 14.5 8.5Z"}),
          h('path', {"d":"M16 14C16 12.344 14.656 11 13 11L11 11C9.344 11 8 12.344 8 14"})
        ]
      );
  }
});

module.exports = ChatUserBoxy;
module.exports.ChatUserBoxy = ChatUserBoxy;
module.exports.default = ChatUserBoxy;
