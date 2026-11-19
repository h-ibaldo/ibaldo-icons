'use strict';

const { defineComponent, h } = require('vue');

const ChatStackReply = defineComponent({
  name: 'ChatStackReply',
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
          h('path', {"d":"M16 9C16 5.688 12.867 3 9 3C5.133 3 2 5.688 2 9C2 10.914 3.051 12.617 4.684 13.719C4.313 15.242 3.656 16.344 3 17C5.613 17 7.789 16.141 9.27 14.988C13.012 14.863 16 12.234 16 9Z"}),
          h('path', {"d":"M8.613 15.445C9.676 17.469 12 18.898 14.73 18.988C16.211 20.141 18.387 21 21 21C20.344 20.34 19.688 19.242 19.316 17.715C20.949 16.617 22 14.918 22 13C22 9.859 19.188 7.289 15.605 7.027"}),
          h('path', {"d":"M8 11L6 9L8 7"}),
          h('path', {"d":"M6 9L10 9C11.105 9 12 9.895 12 11"})
        ]
      );
  }
});

module.exports = ChatStackReply;
module.exports.ChatStackReply = ChatStackReply;
module.exports.default = ChatStackReply;
