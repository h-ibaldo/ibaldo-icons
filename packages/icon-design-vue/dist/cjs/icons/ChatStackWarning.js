'use strict';

const { defineComponent, h } = require('vue');

const ChatStackWarning = defineComponent({
  name: 'ChatStackWarning',
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
          h('path', {"d":"M8.613 15.445C9.672 17.469 12 18.898 14.73 18.988C16.211 20.141 18.383 21 21 21C20.34 20.34 19.691 19.242 19.316 17.715C20.949 16.617 22 14.918 22 13C22 9.859 19.188 7.289 15.605 7.027"}),
          h('path', {"d":"M6.27 3.004L2.402 9.699C1.559 11.168 2.617 13 4.309 13L11.691 13C13.383 13 14.441 11.168 13.598 9.699L9.734 3.004C8.961 1.668 7.039 1.668 6.27 3.004Z"}),
          h('path', {"d":"M8 7L8 6"}),
          h('path', {"d":"M8 10L8 10"})
        ]
      );
  }
});

module.exports = ChatStackWarning;
module.exports.ChatStackWarning = ChatStackWarning;
module.exports.default = ChatStackWarning;
