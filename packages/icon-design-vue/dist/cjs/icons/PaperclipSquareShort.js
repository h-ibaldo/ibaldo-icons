'use strict';

const { defineComponent, h } = require('vue');

const PaperclipSquareShort = defineComponent({
  name: 'PaperclipSquareShort',
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
          h('path', {"d":"M11 14L16.379 8.621C17.207 7.793 17.207 6.449 16.379 5.621C15.551 4.793 14.207 4.793 13.379 5.621L7.242 11.758C5.586 13.414 5.586 16.102 7.242 17.758C8.898 19.414 11.586 19.414 13.242 17.758L17 14"}),
          h('path', {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z"})
        ]
      );
  }
});

module.exports = PaperclipSquareShort;
module.exports.PaperclipSquareShort = PaperclipSquareShort;
module.exports.default = PaperclipSquareShort;
