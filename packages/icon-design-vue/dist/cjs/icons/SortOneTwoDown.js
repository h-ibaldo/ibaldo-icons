'use strict';

const { defineComponent, h } = require('vue');

const SortOneTwoDown = defineComponent({
  name: 'SortOneTwoDown',
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
          h('path', {"d":"M6 3L7 3L7 10"}),
          h('path', {"d":"M5 16C5 14.895 5.895 14 7 14C8.105 14 9 14.895 9 16L9 16.172C9 16.703 8.789 17.211 8.414 17.586L5 21L9 21"}),
          h('path', {"d":"M17 6L17 18"}),
          h('path', {"d":"M14 15L17 18L20 15"})
        ]
      );
  }
});

module.exports = SortOneTwoDown;
module.exports.SortOneTwoDown = SortOneTwoDown;
module.exports.default = SortOneTwoDown;
