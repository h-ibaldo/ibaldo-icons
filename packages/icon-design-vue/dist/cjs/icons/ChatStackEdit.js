'use strict';

const { defineComponent, h } = require('vue');

const ChatStackEdit = defineComponent({
  name: 'ChatStackEdit',
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
          h('path', {"d":"M14.707 2.707L16.293 4.293C16.684 4.684 16.684 5.316 16.293 5.707L11 11L8 11L8 8L13.293 2.707C13.684 2.316 14.316 2.316 14.707 2.707Z"}),
          h('path', {"d":"M8.613 16.445C9.672 18.469 12 19.898 14.73 19.988C16.211 21.141 18.383 22 21 22C20.34 21.34 19.691 20.242 19.316 18.715C20.949 17.617 22 15.918 22 14C22 11.965 20.813 10.172 19 9.086"}),
          h('path', {"d":"M7.914 4.078C4.566 4.527 2 7.004 2 10C2 11.918 3.051 13.617 4.684 14.719C4.309 16.242 3.656 17.344 3 18C5.617 18 7.789 17.141 9.27 15.988C13.012 15.863 16 13.234 16 10"})
        ]
      );
  }
});

module.exports = ChatStackEdit;
module.exports.ChatStackEdit = ChatStackEdit;
module.exports.default = ChatStackEdit;
