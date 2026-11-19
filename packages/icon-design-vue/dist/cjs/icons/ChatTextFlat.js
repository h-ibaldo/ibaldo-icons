'use strict';

const { defineComponent, h } = require('vue');

const ChatTextFlat = defineComponent({
  name: 'ChatTextFlat',
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
          h('path', {"d":"M20 18C21.105 18 22 17.105 22 16L22 8C22 6.895 21.105 6 20 6L7 6C5.895 6 5 6.895 5 8L5 14L2 18Z"}),
          h('path', {"d":"M9 10L18 10"}),
          h('path', {"d":"M9 14L15 14"})
        ]
      );
  }
});

module.exports = ChatTextFlat;
module.exports.ChatTextFlat = ChatTextFlat;
module.exports.default = ChatTextFlat;
