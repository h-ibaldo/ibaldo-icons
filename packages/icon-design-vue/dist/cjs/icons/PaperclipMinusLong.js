'use strict';

const { defineComponent, h } = require('vue');

const PaperclipMinusLong = defineComponent({
  name: 'PaperclipMinusLong',
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
          h('path', {"d":"M14 9L7.828 16.172C6.723 17.277 6.723 19.066 7.828 20.172C8.934 21.277 10.723 21.277 11.828 20.172L19.551 11.449C21.484 9.516 21.484 6.383 19.551 4.449C17.617 2.516 14.484 2.516 12.551 4.449L6 12"}),
          h('path', {"d":"M3 4L8 4"})
        ]
      );
  }
});

module.exports = PaperclipMinusLong;
module.exports.PaperclipMinusLong = PaperclipMinusLong;
module.exports.default = PaperclipMinusLong;
