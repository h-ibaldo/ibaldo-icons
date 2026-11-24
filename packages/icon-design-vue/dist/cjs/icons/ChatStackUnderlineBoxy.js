'use strict';

const { defineComponent, h } = require('vue');

const ChatStackUnderlineBoxy = defineComponent({
  name: 'ChatStackUnderlineBoxy',
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
          h('path', {"d":"M12 22L2 22"}),
          h('path', {"d":"M2 9L2 18L5 16L15 16C16.656 16 18 14.656 18 13L18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9Z"}),
          h('path', {"d":"M22 10L22 5C22 3.344 20.656 2 19 2L8 2"})
        ]
      );
  }
});

module.exports = ChatStackUnderlineBoxy;
module.exports.ChatStackUnderlineBoxy = ChatStackUnderlineBoxy;
module.exports.default = ChatStackUnderlineBoxy;
