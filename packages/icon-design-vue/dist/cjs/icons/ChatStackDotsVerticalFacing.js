'use strict';

const { defineComponent, h } = require('vue');

const ChatStackDotsVerticalFacing = defineComponent({
  name: 'ChatStackDotsVerticalFacing',
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
          h('path', {"d":"M2 4L2 18L7 14L15 14C16.105 14 17 13.105 17 12L17 4C17 2.895 16.105 2 15 2L4 2C2.895 2 2 2.895 2 4Z"}),
          h('path', {"d":"M8 17C8 18.105 8.895 19 10 19L17 19L22 22L22 15"}),
          h('path', {"d":"M22 2L22 2"}),
          h('path', {"d":"M22 6L22 6"}),
          h('path', {"d":"M22 10L22 10"})
        ]
      );
  }
});

module.exports = ChatStackDotsVerticalFacing;
module.exports.ChatStackDotsVerticalFacing = ChatStackDotsVerticalFacing;
module.exports.default = ChatStackDotsVerticalFacing;
