'use strict';

const { defineComponent, h } = require('vue');

const ChatXDoubleRound = defineComponent({
  name: 'ChatXDoubleRound',
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
          h('path', {"d":"M12 2C6.477 2 2 6.477 2 12C2 14.625 3.02 17.008 4.676 18.789L2 22L12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"}),
          h('path', {"d":"M14 14L18 10"}),
          h('path', {"d":"M18 14L14 10"}),
          h('path', {"d":"M6 14L10 10"}),
          h('path', {"d":"M10 14L6 10"})
        ]
      );
  }
});

module.exports = ChatXDoubleRound;
module.exports.ChatXDoubleRound = ChatXDoubleRound;
module.exports.default = ChatXDoubleRound;
