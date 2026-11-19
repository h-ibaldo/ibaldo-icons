'use strict';

const { defineComponent, h } = require('vue');

const ChatLockTooltip = defineComponent({
  name: 'ChatLockTooltip',
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
          h('path', {"d":"M2 5L2 15C2 16.656 3.344 18 5 18L8 18L12 22L16 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z"}),
          h('path', {"d":"M15 14L9 14L9 10L15 10Z"}),
          h('path', {"d":"M14 10L10 10L10 8C10 6.895 10.895 6 12 6C13.105 6 14 6.895 14 8Z"})
        ]
      );
  }
});

module.exports = ChatLockTooltip;
module.exports.ChatLockTooltip = ChatLockTooltip;
module.exports.default = ChatLockTooltip;
