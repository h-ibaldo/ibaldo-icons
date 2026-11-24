'use strict';

const { defineComponent, h } = require('vue');

const BookStack = defineComponent({
  name: 'BookStack',
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
          h('path', {"d":"M21 9L6 9C4.344 9 3 7.656 3 6C3 4.344 4.344 3 6 3L21 3"}),
          h('path', {"d":"M21 15L6 15C4.344 15 3 13.656 3 12C3 10.344 4.344 9 6 9L21 9"}),
          h('path', {"d":"M21 21L6 21C4.344 21 3 19.656 3 18C3 16.344 4.344 15 6 15L21 15"})
        ]
      );
  }
});

module.exports = BookStack;
module.exports.BookStack = BookStack;
module.exports.default = BookStack;
