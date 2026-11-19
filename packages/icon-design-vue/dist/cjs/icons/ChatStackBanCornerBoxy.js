'use strict';

const { defineComponent, h } = require('vue');

const ChatStackBanCornerBoxy = defineComponent({
  name: 'ChatStackBanCornerBoxy',
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
          h('path', {"d":"M12 18L7 18L2 22L2 9C2 7.344 3.344 6 5 6L15 6C16.656 6 18 7.344 18 9L18 11"}),
          h('path', {"d":"M22 17C22 19.762 19.762 22 17 22C14.238 22 12 19.762 12 17C12 14.238 14.238 12 17 12C19.762 12 22 14.238 22 17Z"}),
          h('path', {"d":"M20.535 13.465L13.465 20.535"}),
          h('path', {"d":"M22 9L22 5C22 3.344 20.656 2 19 2L8 2"})
        ]
      );
  }
});

module.exports = ChatStackBanCornerBoxy;
module.exports.ChatStackBanCornerBoxy = ChatStackBanCornerBoxy;
module.exports.default = ChatStackBanCornerBoxy;
