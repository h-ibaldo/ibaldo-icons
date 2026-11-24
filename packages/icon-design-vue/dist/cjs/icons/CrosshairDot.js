'use strict';

const { defineComponent, h } = require('vue');

const CrosshairDot = defineComponent({
  name: 'CrosshairDot',
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
          h('path', {"d":"M3 12C3 7.031 7.031 3 12 3C16.969 3 21 7.031 21 12C21 16.969 16.969 21 12 21C7.031 21 3 16.969 3 12Z"}),
          h('path', {"d":"M11 12C11 11.449 11.449 11 12 11C12.551 11 13 11.449 13 12C13 12.551 12.551 13 12 13C11.449 13 11 12.551 11 12Z"}),
          h('path', {"d":"M12 2L12 6"}),
          h('path', {"d":"M12 18L12 22"}),
          h('path', {"d":"M22 12L18 12"}),
          h('path', {"d":"M6 12L2 12"})
        ]
      );
  }
});

module.exports = CrosshairDot;
module.exports.CrosshairDot = CrosshairDot;
module.exports.default = CrosshairDot;
