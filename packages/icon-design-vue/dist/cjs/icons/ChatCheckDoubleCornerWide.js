'use strict';

const { defineComponent, h } = require('vue');

const ChatCheckDoubleCornerWide = defineComponent({
  name: 'ChatCheckDoubleCornerWide',
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
          h('path', {"d":"M12 4L13.5 6L18 2"}),
          h('path', {"d":"M16.801 7.066L17.5 8L22 4"}),
          h('path', {"d":"M8 3.078C4.609 3.566 2 6.477 2 10C2 13.172 4.109 15.848 7 16.707L7 21L11.57 17L15 17C18.867 17 22 13.867 22 10"})
        ]
      );
  }
});

module.exports = ChatCheckDoubleCornerWide;
module.exports.ChatCheckDoubleCornerWide = ChatCheckDoubleCornerWide;
module.exports.default = ChatCheckDoubleCornerWide;
