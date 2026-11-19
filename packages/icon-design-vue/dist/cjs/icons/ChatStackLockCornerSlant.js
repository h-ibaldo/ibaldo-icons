'use strict';

const { defineComponent, h } = require('vue');

const ChatStackLockCornerSlant = defineComponent({
  name: 'ChatStackLockCornerSlant',
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
          h('path', {"d":"M22 14L22 5C22 3.344 20.656 2 19 2L13 2"}),
          h('path', {"d":"M10 12L2 12L2 7L10 7Z"}),
          h('path', {"d":"M3 7L3 5C3 3.344 4.344 2 6 2C7.656 2 9 3.344 9 5L9 7"}),
          h('path', {"d":"M2.184 16C2.598 17.16 3.695 18 5 18L7 18L7 22L13 18L15 18C16.656 18 18 16.656 18 15L18 9C18 7.344 16.656 6 15 6L14 6"})
        ]
      );
  }
});

module.exports = ChatStackLockCornerSlant;
module.exports.ChatStackLockCornerSlant = ChatStackLockCornerSlant;
module.exports.default = ChatStackLockCornerSlant;
