'use strict';

const { defineComponent, h } = require('vue');

const ArrowUturnLeftFlipped = defineComponent({
  name: 'ArrowUturnLeftFlipped',
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
          h('path', {"d":"M7 12L3 16L7 20"}),
          h('path', {"d":"M3 16L15 16C18.313 16 21 13.313 21 10C21 6.688 18.313 4 15 4L12 4"})
        ]
      );
  }
});

module.exports = ArrowUturnLeftFlipped;
module.exports.ArrowUturnLeftFlipped = ArrowUturnLeftFlipped;
module.exports.default = ArrowUturnLeftFlipped;
