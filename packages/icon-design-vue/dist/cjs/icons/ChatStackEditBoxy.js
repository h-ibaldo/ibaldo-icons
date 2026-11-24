'use strict';

const { defineComponent, h } = require('vue');

const ChatStackEditBoxy = defineComponent({
  name: 'ChatStackEditBoxy',
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
          h('path', {"d":"M18 10L18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9L2 22L7 18L10 18"}),
          h('path', {"d":"M22 13L22 5C22 3.344 20.656 2 19 2L7 2"}),
          h('path', {"d":"M21.414 21.586L21.586 21.414C22.367 20.633 22.367 19.367 21.586 18.586L15 12L12 12L12 15L18.586 21.586C19.367 22.367 20.633 22.367 21.414 21.586Z"}),
          h('path', {"d":"M17 20L20 17"})
        ]
      );
  }
});

module.exports = ChatStackEditBoxy;
module.exports.ChatStackEditBoxy = ChatStackEditBoxy;
module.exports.default = ChatStackEditBoxy;
