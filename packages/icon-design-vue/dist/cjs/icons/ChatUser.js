'use strict';

const { defineComponent, h } = require('vue');

const ChatUser = defineComponent({
  name: 'ChatUser',
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
          h('path', {"d":"M12 3C6.477 3 2 6.582 2 11C2 13.84 3.855 16.328 6.645 17.75C6.664 18.895 6.391 20.078 5.719 21.113C5.48 21.48 5.766 21.973 6.195 21.898C8.313 21.535 9.781 20.23 10.715 18.926C11.137 18.969 11.563 19 12 19C17.523 19 22 15.418 22 11C22 6.582 17.523 3 12 3Z"}),
          h('path', {"d":"M14.5 9C14.5 10.383 13.383 11.5 12 11.5C10.617 11.5 9.5 10.383 9.5 9C9.5 7.617 10.617 6.5 12 6.5C13.383 6.5 14.5 7.617 14.5 9Z"}),
          h('path', {"d":"M16 14.5C16 12.844 14.656 11.5 13 11.5L11 11.5C9.344 11.5 8 12.844 8 14.5"})
        ]
      );
  }
});

module.exports = ChatUser;
module.exports.ChatUser = ChatUser;
module.exports.default = ChatUser;
