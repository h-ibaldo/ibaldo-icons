'use strict';

const { defineComponent, h } = require('vue');

const ChatStackThreeStaggered = defineComponent({
  name: 'ChatStackThreeStaggered',
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
          h('path', {"d":"M2 6L17 6C17.551 6 18 5.555 18 5L18 3C18 2.445 17.551 2 17 2L5 2C4.449 2 4 2.445 4 3L4 4Z"}),
          h('path', {"d":"M4 14L19 14C19.551 14 20 13.555 20 13L20 11C20 10.445 19.551 10 19 10L7 10C6.449 10 6 10.445 6 11L6 12Z"}),
          h('path', {"d":"M6 22L21 22C21.551 22 22 21.555 22 21L22 19C22 18.445 21.551 18 21 18L9 18C8.449 18 8 18.445 8 19L8 20Z"})
        ]
      );
  }
});

module.exports = ChatStackThreeStaggered;
module.exports.ChatStackThreeStaggered = ChatStackThreeStaggered;
module.exports.default = ChatStackThreeStaggered;
