'use strict';

const { defineComponent, h } = require('vue');

const ChatDotsCircleBroken = defineComponent({
  name: 'ChatDotsCircleBroken',
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
          h('path', {"d":"M9 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L9 18"}),
          h('path', {"d":"M22 7C22 9.762 19.762 12 17 12C14.238 12 12 9.762 12 7C12 4.238 14.238 2 17 2C19.762 2 22 4.238 22 7Z"}),
          h('path', {"d":"M15.5 7L15.5 7"}),
          h('path', {"d":"M18.5 7L18.5 7"}),
          h('path', {"d":"M22 14L22 15C22 16.656 20.656 18 19 18L15 18L12 22"})
        ]
      );
  }
});

module.exports = ChatDotsCircleBroken;
module.exports.ChatDotsCircleBroken = ChatDotsCircleBroken;
module.exports.default = ChatDotsCircleBroken;
