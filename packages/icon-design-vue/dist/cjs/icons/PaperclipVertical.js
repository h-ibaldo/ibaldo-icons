'use strict';

const { defineComponent, h } = require('vue');

const PaperclipVertical = defineComponent({
  name: 'PaperclipVertical',
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
          h('path', {"d":"M18 8L18 16C18 19.313 15.313 22 12 22C8.688 22 6 19.313 6 16L6 6C6 3.789 7.789 2 10 2C12.211 2 14 3.789 14 6L14 15C14 16.105 13.105 17 12 17C10.895 17 10 16.105 10 15L10 8"})
        ]
      );
  }
});

module.exports = PaperclipVertical;
module.exports.PaperclipVertical = PaperclipVertical;
module.exports.default = PaperclipVertical;
