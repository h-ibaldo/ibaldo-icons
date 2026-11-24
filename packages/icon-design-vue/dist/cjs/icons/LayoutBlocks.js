'use strict';

const { defineComponent, h } = require('vue');

const LayoutBlocks = defineComponent({
  name: 'LayoutBlocks',
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
          h('path', {"d":"M2 14L18 14"}),
          h('path', {"d":"M10 6L10 22"}),
          h('path', {"d":"M15 2L21 2C21.551 2 22 2.449 22 3L22 9C22 9.551 21.551 10 21 10L15 10C14.449 10 14 9.551 14 9L14 3C14 2.449 14.449 2 15 2Z"}),
          h('path', {"d":"M18 14L18 21C18 21.551 17.551 22 17 22L3 22C2.449 22 2 21.551 2 21L2 7C2 6.449 2.449 6 3 6L10 6"})
        ]
      );
  }
});

module.exports = LayoutBlocks;
module.exports.LayoutBlocks = LayoutBlocks;
module.exports.default = LayoutBlocks;
