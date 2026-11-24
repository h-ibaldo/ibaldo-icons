'use strict';

const { defineComponent, h } = require('vue');

const ArrowUpCircleOut = defineComponent({
  name: 'ArrowUpCircleOut',
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
          h('path', {"d":"M9 6L12 3L15 6"}),
          h('path', {"d":"M12 15L12 3"}),
          h('path', {"d":"M18 3.02C20.426 4.844 22 7.73 22 11C22 16.523 17.523 21 12 21C6.477 21 2 16.523 2 11C2 7.73 3.574 4.844 6 3.02"})
        ]
      );
  }
});

module.exports = ArrowUpCircleOut;
module.exports.ArrowUpCircleOut = ArrowUpCircleOut;
module.exports.default = ArrowUpCircleOut;
