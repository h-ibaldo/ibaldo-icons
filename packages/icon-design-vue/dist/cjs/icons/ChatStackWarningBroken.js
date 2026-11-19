'use strict';

const { defineComponent, h } = require('vue');

const ChatStackWarningBroken = defineComponent({
  name: 'ChatStackWarningBroken',
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
          h('path', {"d":"M10 2L5 2C3.344 2 2 3.344 2 5L2 13"}),
          h('path', {"d":"M14.27 3.004L10.402 9.699C9.559 11.168 10.617 13 12.309 13L19.691 13C21.383 13 22.441 11.168 21.598 9.699L17.734 3.004C16.961 1.668 15.039 1.668 14.27 3.004Z"}),
          h('path', {"d":"M16 7L16 6"}),
          h('path', {"d":"M16 10L16 10"}),
          h('path', {"d":"M14 22L17 18L19 18C20.305 18 21.402 17.16 21.816 16"}),
          h('path', {"d":"M8 6.184C6.836 6.598 6 7.695 6 9L6 15C6 16.656 7.344 18 9 18L11 18"})
        ]
      );
  }
});

module.exports = ChatStackWarningBroken;
module.exports.ChatStackWarningBroken = ChatStackWarningBroken;
module.exports.default = ChatStackWarningBroken;
