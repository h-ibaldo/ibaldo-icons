'use strict';

const { defineComponent, h } = require('vue');

const SquareStackPaperclipCurl = defineComponent({
  name: 'SquareStackPaperclipCurl',
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
          h('path', {"d":"M2 17L2 4C2 2.895 2.895 2 4 2L17 2"}),
          h('path', {"d":"M17.5 15L15.328 17.172C14.223 18.277 12.434 18.277 11.328 17.172C10.223 16.066 10.223 14.277 11.328 13.172L14.086 10.414C14.637 9.863 15.535 9.863 16.086 10.414C16.637 10.965 16.637 11.863 16.086 12.414L13.328 15.172"}),
          h('path', {"d":"M20 22L8 22C6.895 22 6 21.105 6 20L6 8C6 6.895 6.895 6 8 6L20 6C21.105 6 22 6.895 22 8L22 20C22 21.105 21.105 22 20 22Z"})
        ]
      );
  }
});

module.exports = SquareStackPaperclipCurl;
module.exports.SquareStackPaperclipCurl = SquareStackPaperclipCurl;
module.exports.default = SquareStackPaperclipCurl;
