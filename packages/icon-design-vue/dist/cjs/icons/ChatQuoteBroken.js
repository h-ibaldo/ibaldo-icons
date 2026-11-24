'use strict';

const { defineComponent, h } = require('vue');

const ChatQuoteBroken = defineComponent({
  name: 'ChatQuoteBroken',
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
          h('path', {"d":"M14 7L17 7L17 9L14 9Z"}),
          h('path', {"d":"M14 13C15.723 12.539 17 10.93 17 9"}),
          h('path', {"d":"M7 7L10 7L10 9L7 9Z"}),
          h('path', {"d":"M7 13C8.723 12.539 10 10.93 10 9"}),
          h('path', {"d":"M12 22L15 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L9 18"})
        ]
      );
  }
});

module.exports = ChatQuoteBroken;
module.exports.ChatQuoteBroken = ChatQuoteBroken;
module.exports.default = ChatQuoteBroken;
