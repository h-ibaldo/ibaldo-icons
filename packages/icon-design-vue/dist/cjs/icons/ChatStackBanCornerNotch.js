'use strict';

const { defineComponent, h } = require('vue');

const ChatStackBanCornerNotch = defineComponent({
  name: 'ChatStackBanCornerNotch',
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
          h('path', {"d":"M22 14L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L12 18"}),
          h('path', {"d":"M10 2L4 2C2.895 2 2 2.895 2 4L2 12C2 13.105 2.895 14 4 14L5 14L5 18L10 14L11 14"}),
          h('path', {"d":"M22 7C22 9.762 19.762 12 17 12C14.238 12 12 9.762 12 7C12 4.238 14.238 2 17 2C19.762 2 22 4.238 22 7Z"}),
          h('path', {"d":"M20.535 3.465L13.465 10.535"})
        ]
      );
  }
});

module.exports = ChatStackBanCornerNotch;
module.exports.ChatStackBanCornerNotch = ChatStackBanCornerNotch;
module.exports.default = ChatStackBanCornerNotch;
