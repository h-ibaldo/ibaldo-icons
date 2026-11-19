'use strict';

const { defineComponent, h } = require('vue');

const BookBookmarkRibbonCurved = defineComponent({
  name: 'BookBookmarkRibbonCurved',
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
          h('path', {"d":"M19 14L19 19"}),
          h('path', {"d":"M16 19L20 19"}),
          h('path', {"d":"M4 16.5L4 4.5C4 3.117 5.117 2 6.5 2L19 2C19.551 2 20 2.449 20 3L20 13C20 13.551 19.551 14 19 14L6.5 14C5.117 14 4 15.117 4 16.5C4 17.883 5.117 19 6.5 19L10 19"}),
          h('path', {"d":"M9 2L9 14"}),
          h('path', {"d":"M10 17L10 22L13 21L16 22L16 17Z"})
        ]
      );
  }
});

module.exports = BookBookmarkRibbonCurved;
module.exports.BookBookmarkRibbonCurved = BookBookmarkRibbonCurved;
module.exports.default = BookBookmarkRibbonCurved;
