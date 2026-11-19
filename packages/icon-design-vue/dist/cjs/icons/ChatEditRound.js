'use strict';

const { defineComponent, h } = require('vue');

const ChatEditRound = defineComponent({
  name: 'ChatEditRound',
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
          h('path', {"d":"M21.414 3.414L21.586 3.586C22.367 4.367 22.367 5.633 21.586 6.414L15 13L12 13L12 10L18.586 3.414C19.367 2.633 20.633 2.633 21.414 3.414Z"}),
          h('path', {"d":"M17 5L20 8"}),
          h('path', {"d":"M14 2.199C13.355 2.07 12.684 2 12 2C6.477 2 2 6.477 2 12C2 14.625 3.02 17.008 4.676 18.789L2 22L12 22C17.523 22 22 17.523 22 12"})
        ]
      );
  }
});

module.exports = ChatEditRound;
module.exports.ChatEditRound = ChatEditRound;
module.exports.default = ChatEditRound;
