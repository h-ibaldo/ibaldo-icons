'use strict';

const { defineComponent, h } = require('vue');

const ChatStackHashFacing = defineComponent({
  name: 'ChatStackHashFacing',
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
          h('path', {"d":"M2 4L2 18L6 15L16 15C17.105 15 18 14.105 18 13L18 4C18 2.895 17.105 2 16 2L4 2C2.895 2 2 2.895 2 4Z"}),
          h('path', {"d":"M8 18C8 19.105 8.895 20 10 20L18 20L22 22L22 10.414C22 9.508 21.641 8.641 21 8"}),
          h('path', {"d":"M9 5L7 12"}),
          h('path', {"d":"M13 5L11 12"}),
          h('path', {"d":"M7 7L14 7"}),
          h('path', {"d":"M6 10L13 10"})
        ]
      );
  }
});

module.exports = ChatStackHashFacing;
module.exports.ChatStackHashFacing = ChatStackHashFacing;
module.exports.default = ChatStackHashFacing;
