'use strict';

const { defineComponent, h } = require('vue');

const BookOpenSquareCurved = defineComponent({
  name: 'BookOpenSquareCurved',
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
          h('path', {"d":"M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z"}),
          h('path', {"d":"M6 8C7.656 6.668 10.344 6.668 12 8"}),
          h('path', {"d":"M12 8C13.656 6.668 16.344 6.668 18 8"}),
          h('path', {"d":"M6 17C7.656 15.668 10.344 15.668 12 17"}),
          h('path', {"d":"M12 17C13.656 15.668 16.344 15.668 18 17"}),
          h('path', {"d":"M12 8L12 17"}),
          h('path', {"d":"M6 8L6 17"}),
          h('path', {"d":"M18 8L18 17"})
        ]
      );
  }
});

module.exports = BookOpenSquareCurved;
module.exports.BookOpenSquareCurved = BookOpenSquareCurved;
module.exports.default = BookOpenSquareCurved;
