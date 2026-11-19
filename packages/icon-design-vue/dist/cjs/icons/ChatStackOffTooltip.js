'use strict';

const { defineComponent, h } = require('vue');

const ChatStackOffTooltip = defineComponent({
  name: 'ChatStackOffTooltip',
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
          h('path', {"d":"M22 14L22 5C22 3.344 20.656 2 19 2L8 2"}),
          h('path', {"d":"M2 2L20 21"}),
          h('path', {"d":"M5.789 6L5 6C3.344 6 2 7.344 2 9L2 15C2 16.656 3.344 18 5 18L7 18L10 22L13 18L15 18C15.621 18 16.195 17.813 16.676 17.488"}),
          h('path', {"d":"M18 12.723L18 9C18 7.344 16.656 6 15 6L11.633 6"})
        ]
      );
  }
});

module.exports = ChatStackOffTooltip;
module.exports.ChatStackOffTooltip = ChatStackOffTooltip;
module.exports.default = ChatStackOffTooltip;
