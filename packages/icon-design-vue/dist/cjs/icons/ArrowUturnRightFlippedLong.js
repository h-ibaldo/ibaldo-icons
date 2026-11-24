'use strict';

const { defineComponent, h } = require('vue');

const ArrowUturnRightFlippedLong = defineComponent({
  name: 'ArrowUturnRightFlippedLong',
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
          h('path', {"d":"M17 12L21 16L17 20"}),
          h('path', {"d":"M21 16L9 16C5.688 16 3 13.313 3 10C3 6.688 5.688 4 9 4L20 4"})
        ]
      );
  }
});

module.exports = ArrowUturnRightFlippedLong;
module.exports.ArrowUturnRightFlippedLong = ArrowUturnRightFlippedLong;
module.exports.default = ArrowUturnRightFlippedLong;
