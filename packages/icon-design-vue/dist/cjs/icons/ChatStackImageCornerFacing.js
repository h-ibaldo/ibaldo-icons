'use strict';

const { defineComponent, h } = require('vue');

const ChatStackImageCornerFacing = defineComponent({
  name: 'ChatStackImageCornerFacing',
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
          h('path', {"d":"M9 2L4 2C2.895 2 2 2.895 2 4L2 18L7 14L10 14"}),
          h('path', {"d":"M8 17C8 18.105 8.895 19 10 19L17 19L22 22L22 15"}),
          h('path', {"d":"M20 12L14 12C12.895 12 12 11.105 12 10L12 4C12 2.895 12.895 2 14 2L20 2C21.105 2 22 2.895 22 4L22 10C22 11.105 21.105 12 20 12Z"}),
          h('path', {"d":"M22 6C18.688 6 16 8.688 16 12"}),
          h('path', {"d":"M15 5L15 5"})
        ]
      );
  }
});

module.exports = ChatStackImageCornerFacing;
module.exports.ChatStackImageCornerFacing = ChatStackImageCornerFacing;
module.exports.default = ChatStackImageCornerFacing;
