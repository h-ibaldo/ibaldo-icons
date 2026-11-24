'use strict';

const { defineComponent, h } = require('vue');

const ChatStackCheckCornerFlipped = defineComponent({
  name: 'ChatStackCheckCornerFlipped',
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
          h('path', {"d":"M16 14L4 14C2.895 14 2 13.105 2 12L2 8C2 6.895 2.895 6 4 6L5 6L5 2L10 6L12 6"}),
          h('path', {"d":"M22 13L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L7 18"}),
          h('path', {"d":"M16 8L18 10L22 6"})
        ]
      );
  }
});

module.exports = ChatStackCheckCornerFlipped;
module.exports.ChatStackCheckCornerFlipped = ChatStackCheckCornerFlipped;
module.exports.default = ChatStackCheckCornerFlipped;
