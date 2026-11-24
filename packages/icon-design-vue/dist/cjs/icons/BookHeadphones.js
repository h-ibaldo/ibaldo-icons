'use strict';

const { defineComponent, h } = require('vue');

const BookHeadphones = defineComponent({
  name: 'BookHeadphones',
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
          h('path', {"d":"M17 18L5 18C3.895 18 3 18.895 3 20C3 21.105 3.895 22 5 22L17 22"}),
          h('path', {"d":"M17 18L17 14"}),
          h('path', {"d":"M8 4L5 4C3.895 4 3 4.895 3 6"}),
          h('path', {"d":"M3 6L3 20"}),
          h('path', {"d":"M11 8L12 8C12.551 8 13 8.449 13 9L13 11C13 11.551 12.551 12 12 12C11.449 12 11 11.551 11 11L11 6C11 3.789 12.789 2 15 2L17 2C19.211 2 21 3.789 21 6L21 11C21 11.551 20.551 12 20 12C19.449 12 19 11.551 19 11L19 9C19 8.449 19.449 8 20 8L21 8"})
        ]
      );
  }
});

module.exports = BookHeadphones;
module.exports.BookHeadphones = BookHeadphones;
module.exports.default = BookHeadphones;
