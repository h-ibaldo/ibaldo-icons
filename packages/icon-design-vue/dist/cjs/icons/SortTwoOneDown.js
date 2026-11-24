'use strict';

const { defineComponent, h } = require('vue');

const SortTwoOneDown = defineComponent({
  name: 'SortTwoOneDown',
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
          h('path', {"d":"M6 14L7 14L7 21"}),
          h('path', {"d":"M5 5C5 3.895 5.895 3 7 3C8.105 3 9 3.895 9 5L9 5.172C9 5.703 8.789 6.211 8.414 6.586L5 10L9 10"}),
          h('path', {"d":"M17 6L17 18"}),
          h('path', {"d":"M14 15L17 18L20 15"})
        ]
      );
  }
});

module.exports = SortTwoOneDown;
module.exports.SortTwoOneDown = SortTwoOneDown;
module.exports.default = SortTwoOneDown;
