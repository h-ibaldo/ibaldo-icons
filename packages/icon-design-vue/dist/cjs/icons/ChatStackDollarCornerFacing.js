'use strict';

const { defineComponent, h } = require('vue');

const ChatStackDollarCornerFacing = defineComponent({
  name: 'ChatStackDollarCornerFacing',
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
          h('path', {"d":"M13 2L4 2C2.895 2 2 2.895 2 4L2 17L7 13L14 13"}),
          h('path', {"d":"M22 14L22 22L17 18L10 18C8.895 18 8 17.105 8 16"}),
          h('path', {"d":"M21 3.184L20.449 3C19.82 2.789 19.16 2.684 18.5 2.684C17.395 2.684 16.5 3.578 16.5 4.684C16.5 5.789 17.395 6.684 18.5 6.684L19.5 6.684C20.605 6.684 21.5 7.578 21.5 8.684C21.5 9.789 20.605 10.684 19.5 10.684C18.84 10.684 18.18 10.578 17.551 10.367L17 10.184"}),
          h('path', {"d":"M19 1.684L19 2.684"}),
          h('path', {"d":"M19 10.684L19 11.684"})
        ]
      );
  }
});

module.exports = ChatStackDollarCornerFacing;
module.exports.ChatStackDollarCornerFacing = ChatStackDollarCornerFacing;
module.exports.default = ChatStackDollarCornerFacing;
