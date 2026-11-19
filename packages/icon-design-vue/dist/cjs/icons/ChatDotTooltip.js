'use strict';

const { defineComponent, h } = require('vue');

const ChatDotTooltip = defineComponent({
  name: 'ChatDotTooltip',
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
          h('path', {"d":"M16 5C16 6.656 17.344 8 19 8C20.656 8 22 6.656 22 5C22 3.344 20.656 2 19 2C17.344 2 16 3.344 16 5Z"}),
          h('path', {"d":"M13 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L8 18L12 22L16 18L19 18C20.656 18 22 16.656 22 15L22 11"})
        ]
      );
  }
});

module.exports = ChatDotTooltip;
module.exports.ChatDotTooltip = ChatDotTooltip;
module.exports.default = ChatDotTooltip;
