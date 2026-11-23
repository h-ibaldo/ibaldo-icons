'use strict';

const { defineComponent, h } = require('vue');

const PenToolVertical = defineComponent({
  name: 'PenToolVertical',
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
          h('path', {"d":"M11 11C11 10.449 11.449 10 12 10C12.551 10 13 10.449 13 11C13 11.551 12.551 12 12 12C11.449 12 11 11.551 11 11Z"}),
          h('path', {"d":"M7 18L7 16.605C7 14.254 6.305 11.957 5 10L11 2L13 2L19 10C17.695 11.957 17 14.254 17 16.605L17 18"}),
          h('path', {"d":"M6 18L18 18L18 22L6 22Z"}),
          h('path', {"d":"M12 2L12 11"})
        ]
      );
  }
});

module.exports = PenToolVertical;
module.exports.PenToolVertical = PenToolVertical;
module.exports.default = PenToolVertical;
