'use strict';

const { defineComponent, h } = require('vue');

const ChatUnderlineTooltip = defineComponent({
  name: 'ChatUnderlineTooltip',
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
          h('path', {"d":"M2 5L2 11C2 12.656 3.344 14 5 14L8 14L12 18L16 14L19 14C20.656 14 22 12.656 22 11L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z"}),
          h('path', {"d":"M19 22L5 22"})
        ]
      );
  }
});

module.exports = ChatUnderlineTooltip;
module.exports.ChatUnderlineTooltip = ChatUnderlineTooltip;
module.exports.default = ChatUnderlineTooltip;
