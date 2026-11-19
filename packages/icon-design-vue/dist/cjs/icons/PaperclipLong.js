'use strict';

const { defineComponent, h } = require('vue');

const PaperclipLong = defineComponent({
  name: 'PaperclipLong',
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
          h('path', {"d":"M14 8L5.828 17.172C4.723 18.277 4.723 20.066 5.828 21.172C6.934 22.277 8.723 22.277 9.828 21.172L19.551 10.449C21.484 8.516 21.484 5.383 19.551 3.449C17.617 1.516 14.484 1.516 12.551 3.449L4 13"})
        ]
      );
  }
});

module.exports = PaperclipLong;
module.exports.PaperclipLong = PaperclipLong;
module.exports.default = PaperclipLong;
