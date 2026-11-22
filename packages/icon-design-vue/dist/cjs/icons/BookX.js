'use strict';

const { defineComponent, h } = require('vue');

const BookX = defineComponent({
  name: 'BookX',
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
          h('path', {"d":"M19 17L7 17C5.895 17 5 17.895 5 19C5 20.105 5.895 21 7 21L19 21"}),
          h('path', {"d":"M19 17L19 3L7 3C5.895 3 5 3.895 5 5"}),
          h('path', {"d":"M5 5L5 19"}),
          h('path', {"d":"M15 7L9 13"}),
          h('path', {"d":"M15 13L9 7"})
        ]
      );
  }
});

module.exports = BookX;
module.exports.BookX = BookX;
module.exports.default = BookX;
