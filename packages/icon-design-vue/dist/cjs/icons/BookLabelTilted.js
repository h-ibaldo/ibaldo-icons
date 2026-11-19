'use strict';

const { defineComponent, h } = require('vue');

const BookLabelTilted = defineComponent({
  name: 'BookLabelTilted',
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
          h('path', {"d":"M22 11.5L15 22L3 19C2.414 17.719 2.086 16.336 2.035 14.926L2 14L10 2L22 5L14 17L2 14"}),
          h('path', {"d":"M11 7L15 8"})
        ]
      );
  }
});

module.exports = BookLabelTilted;
module.exports.BookLabelTilted = BookLabelTilted;
module.exports.default = BookLabelTilted;
