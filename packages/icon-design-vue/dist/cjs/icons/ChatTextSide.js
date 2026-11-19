'use strict';

const { defineComponent, h } = require('vue');

const ChatTextSide = defineComponent({
  name: 'ChatTextSide',
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
          h('path', {"d":"M7 19L20 19C21.105 19 22 18.105 22 17L22 7C22 5.895 21.105 5 20 5L7 5C5.895 5 5 5.895 5 7L5 10L2 12L5 14L5 17C5 18.105 5.895 19 7 19Z"}),
          h('path', {"d":"M9 10L18 10"}),
          h('path', {"d":"M9 14L15 14"})
        ]
      );
  }
});

module.exports = ChatTextSide;
module.exports.ChatTextSide = ChatTextSide;
module.exports.default = ChatTextSide;
