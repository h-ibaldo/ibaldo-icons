'use strict';

const { defineComponent, h } = require('vue');

const ChatStackSearchCornerLayered = defineComponent({
  name: 'ChatStackSearchCornerLayered',
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
          h('path', {"d":"M5 6L5 5C5 3.344 6.344 2 8 2L19 2C20.656 2 22 3.344 22 5L22 12"}),
          h('path', {"d":"M21 17.5C21 19.434 19.434 21 17.5 21C15.566 21 14 19.434 14 17.5C14 15.566 15.566 14 17.5 14C19.434 14 21 15.566 21 17.5Z"}),
          h('path', {"d":"M19.973 19.973L22 22"})
        ]
      );
  }
});

module.exports = ChatStackSearchCornerLayered;
module.exports.ChatStackSearchCornerLayered = ChatStackSearchCornerLayered;
module.exports.default = ChatStackSearchCornerLayered;
