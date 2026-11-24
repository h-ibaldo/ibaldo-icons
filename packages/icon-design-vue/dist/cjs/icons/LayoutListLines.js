'use strict';

const { defineComponent, h } = require('vue');

const LayoutListLines = defineComponent({
  name: 'LayoutListLines',
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
          h('path', {"d":"M22 2L14 2"}),
          h('path', {"d":"M22 7L14 7"}),
          h('path', {"d":"M22 12L14 12"}),
          h('path', {"d":"M22 17L14 17"}),
          h('path', {"d":"M22 22L14 22"}),
          h('path', {"d":"M2 9L2 3C2 2.449 2.449 2 3 2L9 2C9.551 2 10 2.449 10 3L10 9C10 9.551 9.551 10 9 10L3 10C2.449 10 2 9.551 2 9Z"}),
          h('path', {"d":"M2 21L2 15C2 14.449 2.449 14 3 14L9 14C9.551 14 10 14.449 10 15L10 21C10 21.551 9.551 22 9 22L3 22C2.449 22 2 21.551 2 21Z"})
        ]
      );
  }
});

module.exports = LayoutListLines;
module.exports.LayoutListLines = LayoutListLines;
module.exports.default = LayoutListLines;
