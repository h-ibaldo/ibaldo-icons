'use strict';

const { defineComponent, h } = require('vue');

const ChatStackTextFlat = defineComponent({
  name: 'ChatStackTextFlat',
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
          h('path', {"d":"M22 22L6 22C4.895 22 4 21.105 4 20L4 16C4 14.895 4.895 14 6 14L18 14C19.105 14 20 14.895 20 16L20 19Z"}),
          h('path', {"d":"M2 10L18 10C19.105 10 20 9.105 20 8L20 4C20 2.895 19.105 2 18 2L6 2C4.895 2 4 2.895 4 4L4 7Z"}),
          h('path', {"d":"M8 6L13 6"}),
          h('path', {"d":"M8 18L13 18"})
        ]
      );
  }
});

module.exports = ChatStackTextFlat;
module.exports.ChatStackTextFlat = ChatStackTextFlat;
module.exports.default = ChatStackTextFlat;
