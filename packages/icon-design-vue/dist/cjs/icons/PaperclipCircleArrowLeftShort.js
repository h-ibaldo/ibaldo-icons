'use strict';

const { defineComponent, h } = require('vue');

const PaperclipCircleArrowLeftShort = defineComponent({
  name: 'PaperclipCircleArrowLeftShort',
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
          h('path', {"d":"M18 18L16 20L18 22"}),
          h('path', {"d":"M22 20L16 20"}),
          h('path', {"d":"M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 13.047 21.84 14.055 21.539 15"}),
          h('path', {"d":"M11.5 13.5L15.379 9.621C16.207 8.793 16.207 7.449 15.379 6.621C14.551 5.793 13.207 5.793 12.379 6.621L7.676 11.324C6.293 12.707 6.293 14.945 7.676 16.324C9.055 17.707 11.293 17.707 12.676 16.324L16 13"})
        ]
      );
  }
});

module.exports = PaperclipCircleArrowLeftShort;
module.exports.PaperclipCircleArrowLeftShort = PaperclipCircleArrowLeftShort;
module.exports.default = PaperclipCircleArrowLeftShort;
