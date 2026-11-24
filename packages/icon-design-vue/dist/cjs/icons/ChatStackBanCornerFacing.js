'use strict';

const { defineComponent, h } = require('vue');

const ChatStackBanCornerFacing = defineComponent({
  name: 'ChatStackBanCornerFacing',
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
          h('path', {"d":"M10 2L4 2C2.895 2 2 2.895 2 4L2 18L7 14L13 14"}),
          h('path', {"d":"M8 17C8 18.105 8.895 19 10 19L17 19L22 22L22 14"}),
          h('path', {"d":"M22 7C22 9.762 19.762 12 17 12C14.238 12 12 9.762 12 7C12 4.238 14.238 2 17 2C19.762 2 22 4.238 22 7Z"}),
          h('path', {"d":"M20.535 3.465L13.465 10.535"})
        ]
      );
  }
});

module.exports = ChatStackBanCornerFacing;
module.exports.ChatStackBanCornerFacing = ChatStackBanCornerFacing;
module.exports.default = ChatStackBanCornerFacing;
