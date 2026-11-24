'use strict';

const { defineComponent, h } = require('vue');

const ChatLetterTTooltip = defineComponent({
  name: 'ChatLetterTTooltip',
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
          h('path', {"d":"M10.5 6L10.5 12C10.5 13.105 11.395 14 12.5 14L13.5 14"}),
          h('path', {"d":"M13.5 9L10.5 9"}),
          h('path', {"d":"M2 5L2 15C2 16.656 3.344 18 5 18L8 18L12 22L16 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z"})
        ]
      );
  }
});

module.exports = ChatLetterTTooltip;
module.exports.ChatLetterTTooltip = ChatLetterTTooltip;
module.exports.default = ChatLetterTTooltip;
