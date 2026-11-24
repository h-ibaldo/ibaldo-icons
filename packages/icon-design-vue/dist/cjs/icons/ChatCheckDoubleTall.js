'use strict';

const { defineComponent, h } = require('vue');

const ChatCheckDoubleTall = defineComponent({
  name: 'ChatCheckDoubleTall',
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
          h('path', {"d":"M12 22C17.332 19.867 20 14.801 20 10C20 5.582 16.418 2 12 2C7.582 2 4 5.582 4 10C4 14.418 7.582 18 12 18Z"}),
          h('path', {"d":"M8 9L8.5 11L12 8"}),
          h('path', {"d":"M12.176 10.707L12.5 12L16 9"})
        ]
      );
  }
});

module.exports = ChatCheckDoubleTall;
module.exports.ChatCheckDoubleTall = ChatCheckDoubleTall;
module.exports.default = ChatCheckDoubleTall;
