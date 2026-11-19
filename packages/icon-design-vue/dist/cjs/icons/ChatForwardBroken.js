'use strict';

const { defineComponent, h } = require('vue');

const ChatForwardBroken = defineComponent({
  name: 'ChatForwardBroken',
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
          h('path', {"d":"M12 22L15 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L9 18"}),
          h('path', {"d":"M8 10L16 10"}),
          h('path', {"d":"M14 8L16 10L14 12"})
        ]
      );
  }
});

module.exports = ChatForwardBroken;
module.exports.ChatForwardBroken = ChatForwardBroken;
module.exports.default = ChatForwardBroken;
