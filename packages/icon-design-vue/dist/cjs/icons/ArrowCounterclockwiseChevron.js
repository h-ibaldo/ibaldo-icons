'use strict';

const { defineComponent, h } = require('vue');

const ArrowCounterclockwiseChevron = defineComponent({
  name: 'ArrowCounterclockwiseChevron',
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
          h('path', {"d":"M9 2L6 5L9 8"}),
          h('path', {"d":"M12.5 5C17.195 5 21 8.805 21 13.5C21 18.195 17.195 22 12.5 22C7.805 22 4 18.195 4 13.5C4 12.504 4.18 11.555 4.492 10.668"}),
          h('path', {"d":"M12.5 5L6 5"})
        ]
      );
  }
});

module.exports = ArrowCounterclockwiseChevron;
module.exports.ArrowCounterclockwiseChevron = ArrowCounterclockwiseChevron;
module.exports.default = ArrowCounterclockwiseChevron;
