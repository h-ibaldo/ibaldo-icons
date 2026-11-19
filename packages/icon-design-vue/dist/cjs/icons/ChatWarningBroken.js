'use strict';

const { defineComponent, h } = require('vue');

const ChatWarningBroken = defineComponent({
  name: 'ChatWarningBroken',
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
          h('path', {"d":"M9 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L9 18"}),
          h('path', {"d":"M13.77 3.004L9.902 9.699C9.059 11.168 10.117 13 11.809 13L19.191 13C20.883 13 21.941 11.168 21.098 9.699L17.234 3.004C16.461 1.668 14.539 1.668 13.77 3.004Z"}),
          h('path', {"d":"M15.5 7L15.5 6"}),
          h('path', {"d":"M15.5 10L15.5 10"}),
          h('path', {"d":"M12 22L15 18L19 18C20.305 18 21.402 17.164 21.816 16"})
        ]
      );
  }
});

module.exports = ChatWarningBroken;
module.exports.ChatWarningBroken = ChatWarningBroken;
module.exports.default = ChatWarningBroken;
