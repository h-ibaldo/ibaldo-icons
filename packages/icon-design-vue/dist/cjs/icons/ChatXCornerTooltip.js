'use strict';

const { defineComponent, h } = require('vue');

const ChatXCornerTooltip = defineComponent({
  name: 'ChatXCornerTooltip',
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
          h('path', {"d":"M13 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L8 18L12 22L16 18L19 18C20.656 18 22 16.656 22 15L22 12"}),
          h('path', {"d":"M18 7L22 3"}),
          h('path', {"d":"M22 7L18 3"})
        ]
      );
  }
});

module.exports = ChatXCornerTooltip;
module.exports.ChatXCornerTooltip = ChatXCornerTooltip;
module.exports.default = ChatXCornerTooltip;
