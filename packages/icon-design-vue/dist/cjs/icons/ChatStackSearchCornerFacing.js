'use strict';

const { defineComponent, h } = require('vue');

const ChatStackSearchCornerFacing = defineComponent({
  name: 'ChatStackSearchCornerFacing',
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
          h('path', {"d":"M11 2L4 2C2.895 2 2 2.895 2 4L2 18L7 14L15.586 14C16.492 14 17.359 13.641 18 13"}),
          h('path', {"d":"M8 17C8 18.105 8.895 19 10 19L17 19L22 22L22 14"}),
          h('path', {"d":"M21 5.5C21 7.434 19.434 9 17.5 9C15.566 9 14 7.434 14 5.5C14 3.566 15.566 2 17.5 2C19.434 2 21 3.566 21 5.5Z"}),
          h('path', {"d":"M19.973 7.973L22 10"})
        ]
      );
  }
});

module.exports = ChatStackSearchCornerFacing;
module.exports.ChatStackSearchCornerFacing = ChatStackSearchCornerFacing;
module.exports.default = ChatStackSearchCornerFacing;
