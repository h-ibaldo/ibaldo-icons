'use strict';

const { defineComponent, h } = require('vue');

const ChevronLeft = defineComponent({
  name: 'ChevronLeft',
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
          h('path', {"d":"M16 20L8 12L16 4"})
        ]
      );
  }
});

module.exports = ChevronLeft;
module.exports.ChevronLeft = ChevronLeft;
module.exports.default = ChevronLeft;
