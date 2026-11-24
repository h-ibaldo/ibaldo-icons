'use strict';

const { defineComponent, h } = require('vue');

const ChatStackLaughNotch = defineComponent({
  name: 'ChatStackLaughNotch',
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
          h('path', {"d":"M7 9L13 9C13 10.656 11.656 12 10 12C8.344 12 7 10.656 7 9Z"}),
          h('path', {"d":"M8 6L8 6"}),
          h('path', {"d":"M12 6L12 6"}),
          h('path', {"d":"M2 4L2 13C2 14.105 2.895 15 4 15L5 15L5 18L10 15L16 15C17.105 15 18 14.105 18 13L18 4C18 2.895 17.105 2 16 2L4 2C2.895 2 2 2.895 2 4Z"}),
          h('path', {"d":"M22 8L22 17C22 18.105 21.105 19 20 19L19 19L19 22L14 19L12 19"})
        ]
      );
  }
});

module.exports = ChatStackLaughNotch;
module.exports.ChatStackLaughNotch = ChatStackLaughNotch;
module.exports.default = ChatStackLaughNotch;
