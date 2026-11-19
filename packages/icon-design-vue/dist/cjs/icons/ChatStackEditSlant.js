'use strict';

const { defineComponent, h } = require('vue');

const ChatStackEditSlant = defineComponent({
  name: 'ChatStackEditSlant',
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
          h('path', {"d":"M2 10L2 15C2 16.656 3.344 18 5 18L7 18L7 22L13 18L15 18C16.656 18 18 16.656 18 15L18 9C18 7.344 16.656 6 15 6L14 6"}),
          h('path', {"d":"M22 14L22 5C22 3.344 20.656 2 19 2L10 2"}),
          h('path', {"d":"M3.586 3.414L3.414 3.586C2.633 4.367 2.633 5.633 3.414 6.414L10 13L13 13L13 10L6.414 3.414C5.633 2.633 4.367 2.633 3.586 3.414Z"}),
          h('path', {"d":"M8 5L5 8"})
        ]
      );
  }
});

module.exports = ChatStackEditSlant;
module.exports.ChatStackEditSlant = ChatStackEditSlant;
module.exports.default = ChatStackEditSlant;
