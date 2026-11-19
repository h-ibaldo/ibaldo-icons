'use strict';

const { defineComponent, h } = require('vue');

const ChatTextLargeSide = defineComponent({
  name: 'ChatTextLargeSide',
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
          h('path', {"d":"M7 20L20 20C21.105 20 22 19.105 22 18L22 6C22 4.895 21.105 4 20 4L7 4C5.895 4 5 4.895 5 6L5 10L2 12L5 14L5 18C5 19.105 5.895 20 7 20Z"}),
          h('path', {"d":"M9 12L18 12"}),
          h('path', {"d":"M9 8L18 8"}),
          h('path', {"d":"M9 16L15 16"})
        ]
      );
  }
});

module.exports = ChatTextLargeSide;
module.exports.ChatTextLargeSide = ChatTextLargeSide;
module.exports.default = ChatTextLargeSide;
