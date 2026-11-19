'use strict';

const { defineComponent, h } = require('vue');

const ChatDotsVerticalTall = defineComponent({
  name: 'ChatDotsVerticalTall',
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
          h('path', {"d":"M22 2L22 2"}),
          h('path', {"d":"M22 6L22 6"}),
          h('path', {"d":"M22 10L22 10"}),
          h('path', {"d":"M17 3.762C15.629 2.66 13.895 2 12 2C7.582 2 4 5.582 4 10C4 14.418 7.582 18 12 18L12 22C15.465 20.613 17.797 17.988 19.012 15"})
        ]
      );
  }
});

module.exports = ChatDotsVerticalTall;
module.exports.ChatDotsVerticalTall = ChatDotsVerticalTall;
module.exports.default = ChatDotsVerticalTall;
