'use strict';

const { defineComponent, h } = require('vue');

const ChatStackEditFacing = defineComponent({
  name: 'ChatStackEditFacing',
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
          h('path', {"d":"M14 2L4 2C2.895 2 2 2.895 2 5L2 19L7 15L15.586 15C16.492 15 17.359 14.641 18 14"}),
          h('path', {"d":"M8 18C8 19.105 8.895 20 10 20L17 20L22 22L22 10.414"}),
          h('path', {"d":"M19.707 2.707L21.293 4.293C21.684 4.684 21.684 5.316 21.293 5.707L16 11L13 11L13 8L18.293 2.707C18.684 2.316 19.316 2.316 19.707 2.707Z"})
        ]
      );
  }
});

module.exports = ChatStackEditFacing;
module.exports.ChatStackEditFacing = ChatStackEditFacing;
module.exports.default = ChatStackEditFacing;
