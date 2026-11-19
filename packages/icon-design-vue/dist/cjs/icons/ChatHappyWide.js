'use strict';

const { defineComponent, h } = require('vue');

const ChatHappyWide = defineComponent({
  name: 'ChatHappyWide',
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
          h('path', {"d":"M15 3L9 3C5.133 3 2 6.133 2 10C2 13.172 4.109 15.848 7 16.707L7 21L11.57 17L15 17C18.867 17 22 13.867 22 10C22 6.133 18.867 3 15 3Z"}),
          h('path', {"d":"M10 7L10 8"}),
          h('path', {"d":"M14 7L14 8"}),
          h('path', {"d":"M7 10.652C8.191 12.086 9.988 13 12 13C14.012 13 15.809 12.086 17 10.652"})
        ]
      );
  }
});

module.exports = ChatHappyWide;
module.exports.ChatHappyWide = ChatHappyWide;
module.exports.default = ChatHappyWide;
