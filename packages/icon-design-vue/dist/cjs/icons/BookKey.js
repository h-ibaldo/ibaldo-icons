'use strict';

const { defineComponent, h } = require('vue');

const BookKey = defineComponent({
  name: 'BookKey',
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
          h('path', {"d":"M19 18L7 18C5.895 18 5 18.895 5 20C5 21.105 5.895 22 7 22L19 22"}),
          h('path', {"d":"M19 18L19 12"}),
          h('path', {"d":"M11 4L7 4C5.895 4 5 4.895 5 6"}),
          h('path', {"d":"M5 6L5 20"}),
          h('path', {"d":"M17.5 2C15.566 2 14 3.566 14 5.5C14 5.656 14.027 5.805 14.047 5.953L10 10L10 13L13 13L13 11L15 11L15 9L17.5 9C19.434 9 21 7.434 21 5.5C21 3.566 19.434 2 17.5 2Z"})
        ]
      );
  }
});

module.exports = BookKey;
module.exports.BookKey = BookKey;
module.exports.default = BookKey;
