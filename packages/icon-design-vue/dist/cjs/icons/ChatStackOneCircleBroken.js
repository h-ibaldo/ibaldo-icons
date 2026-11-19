'use strict';

const { defineComponent, h } = require('vue');

const ChatStackOneCircleBroken = defineComponent({
  name: 'ChatStackOneCircleBroken',
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
          h('path', {"d":"M9 2L5 2C3.344 2 2 3.344 2 5L2 13"}),
          h('path', {"d":"M14 22L17 18L19 18C20.656 18 22 16.656 22 15"}),
          h('path', {"d":"M22 7.5C22 10.535 19.535 13 16.5 13C13.465 13 11 10.535 11 7.5C11 4.465 13.465 2 16.5 2C19.535 2 22 4.465 22 7.5Z"}),
          h('path', {"d":"M17 9L17 6L16 6"}),
          h('path', {"d":"M7 6.785C6.391 7.332 6 8.117 6 9L6 15C6 16.656 7.344 18 9 18L11 18"})
        ]
      );
  }
});

module.exports = ChatStackOneCircleBroken;
module.exports.ChatStackOneCircleBroken = ChatStackOneCircleBroken;
module.exports.default = ChatStackOneCircleBroken;
