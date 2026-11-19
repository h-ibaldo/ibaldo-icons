'use strict';

const { defineComponent, h } = require('vue');

const ChatStackLaughTooltip = defineComponent({
  name: 'ChatStackLaughTooltip',
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
          h('path', {"d":"M2 9L2 15C2 16.656 3.344 18 5 18L7 18L10 22L13 18L15 18C16.656 18 18 16.656 18 15L18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9Z"}),
          h('path', {"d":"M22 14L22 5C22 3.344 20.656 2 19 2L7 2"}),
          h('path', {"d":"M7 12L13 12C13 13.656 11.656 15 10 15C8.344 15 7 13.656 7 12Z"}),
          h('path', {"d":"M8 9L8 9"}),
          h('path', {"d":"M12 9L12 9"})
        ]
      );
  }
});

module.exports = ChatStackLaughTooltip;
module.exports.ChatStackLaughTooltip = ChatStackLaughTooltip;
module.exports.default = ChatStackLaughTooltip;
