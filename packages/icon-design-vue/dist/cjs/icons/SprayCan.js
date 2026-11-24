'use strict';

const { defineComponent, h } = require('vue');

const SprayCan = defineComponent({
  name: 'SprayCan',
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
          h('path', {"d":"M3 22L3 13.461C3 11.551 4.477 10 6.301 10L10.699 10C12.523 10 14 11.551 14 13.461L14 22"}),
          h('path', {"d":"M10 8L10 5L7 5L7 8Z"}),
          h('path', {"d":"M2 15L15 15"}),
          h('path', {"d":"M16 5L16 5"}),
          h('path', {"d":"M13 6L13 6"}),
          h('path', {"d":"M19 6L19 6"}),
          h('path', {"d":"M19 3L19 3"}),
          h('path', {"d":"M22 5L22 5"}),
          h('path', {"d":"M22 2L22 2"}),
          h('path', {"d":"M22 8L22 8"}),
          h('path', {"d":"M16 8L16 8"}),
          h('path', {"d":"M22 11L22 11"}),
          h('path', {"d":"M19 9L19 9"})
        ]
      );
  }
});

module.exports = SprayCan;
module.exports.SprayCan = SprayCan;
module.exports.default = SprayCan;
