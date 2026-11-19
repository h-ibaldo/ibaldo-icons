'use strict';

const { defineComponent, h } = require('vue');

const ChatCheckDoubleCorner = defineComponent({
  name: 'ChatCheckDoubleCorner',
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
          h('path', {"d":"M8 4.668C4.469 5.906 2 8.719 2 12C2 14.84 3.855 17.328 6.645 18.75C6.664 19.895 6.391 21.078 5.719 22.113C5.48 22.48 5.766 22.973 6.195 22.898C8.313 22.535 9.781 21.23 10.715 19.926C11.137 19.969 11.563 20 12 20C17.523 20 22 16.418 22 12"}),
          h('path', {"d":"M12 6L13.5 8L18 4"}),
          h('path', {"d":"M16.801 9.066L17.5 10L22 6"})
        ]
      );
  }
});

module.exports = ChatCheckDoubleCorner;
module.exports.ChatCheckDoubleCorner = ChatCheckDoubleCorner;
module.exports.default = ChatCheckDoubleCorner;
