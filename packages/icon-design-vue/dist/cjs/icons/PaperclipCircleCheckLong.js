'use strict';

const { defineComponent, h } = require('vue');

const PaperclipCircleCheckLong = defineComponent({
  name: 'PaperclipCircleCheckLong',
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
          h('path', {"d":"M21.797 14C21.93 13.355 22 12.684 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C12.684 22 13.355 21.93 14 21.801"}),
          h('path', {"d":"M17 19L19 21L22 18"}),
          h('path', {"d":"M16 12L12 16C10.895 17.105 9.105 17.105 8 16C6.895 14.895 6.895 13.105 8 12L13 7C13.555 6.449 14.445 6.449 15 7C15.555 7.551 15.555 8.449 15 9L11 13"})
        ]
      );
  }
});

module.exports = PaperclipCircleCheckLong;
module.exports.PaperclipCircleCheckLong = PaperclipCircleCheckLong;
module.exports.default = PaperclipCircleCheckLong;
