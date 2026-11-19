'use strict';

const { defineComponent, h } = require('vue');

const PaperclipCircleArrowRightLong = defineComponent({
  name: 'PaperclipCircleArrowRightLong',
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
          h('path', {"d":"M6 6L8 4L6 2"}),
          h('path', {"d":"M2 4L8 4"}),
          h('path', {"d":"M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 10.953 2.16 9.945 2.461 9"}),
          h('path', {"d":"M16 12L12 16C10.895 17.105 9.105 17.105 8 16C6.895 14.895 6.895 13.105 8 12L13 7C13.555 6.449 14.445 6.449 15 7C15.555 7.551 15.555 8.449 15 9L11 13"})
        ]
      );
  }
});

module.exports = PaperclipCircleArrowRightLong;
module.exports.PaperclipCircleArrowRightLong = PaperclipCircleArrowRightLong;
module.exports.default = PaperclipCircleArrowRightLong;
