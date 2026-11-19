'use strict';

const { defineComponent, h } = require('vue');

const ChatStackEditBroken = defineComponent({
  name: 'ChatStackEditBroken',
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
          h('path', {"d":"M15 2L5 2C3.344 2 2 3.344 2 5L2 13"}),
          h('path', {"d":"M11 6L9 6C7.344 6 6 7.344 6 9L6 15C6 16.656 7.344 18 9 18L11 18"}),
          h('path', {"d":"M14 22L17 18L19 18C20.656 18 22 16.656 22 15L22 11"}),
          h('path', {"d":"M21.414 3.414L21.586 3.586C22.367 4.367 22.367 5.633 21.586 6.414L15 13L12 13L12 10L18.586 3.414C19.367 2.633 20.633 2.633 21.414 3.414Z"}),
          h('path', {"d":"M17 5L20 8"})
        ]
      );
  }
});

module.exports = ChatStackEditBroken;
module.exports.ChatStackEditBroken = ChatStackEditBroken;
module.exports.default = ChatStackEditBroken;
