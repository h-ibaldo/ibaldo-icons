'use strict';

const { defineComponent, h } = require('vue');

const ChatOneCircleRound = defineComponent({
  name: 'ChatOneCircleRound',
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
          h('path', {"d":"M22 7.5C22 10.539 19.535 13 16.5 13C13.465 13 11 10.539 11 7.5C11 4.461 13.465 2 16.5 2C19.535 2 22 4.461 22 7.5Z"}),
          h('path', {"d":"M17 9L17 6L16 6"}),
          h('path', {"d":"M8 2.84C4.469 4.383 2 7.898 2 12C2 14.625 3.02 17.008 4.676 18.789L2 22L12 22C16.102 22 19.617 19.531 21.16 16"})
        ]
      );
  }
});

module.exports = ChatOneCircleRound;
module.exports.ChatOneCircleRound = ChatOneCircleRound;
module.exports.default = ChatOneCircleRound;
