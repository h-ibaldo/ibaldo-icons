'use strict';

const { defineComponent, h } = require('vue');

const KeyboardEnter = defineComponent({
  name: 'KeyboardEnter',
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
          h('path', {"d":"M2 19L2 5C2 4.449 2.449 4 3 4L21 4C21.551 4 22 4.449 22 5L22 19C22 19.551 21.551 20 21 20L3 20C2.449 20 2 19.551 2 19Z"}),
          h('path', {"d":"M15 16L9 16"}),
          h('path', {"d":"M18 8L18 12"}),
          h('path', {"d":"M6 8L6 8"}),
          h('path', {"d":"M10 8L10 8"}),
          h('path', {"d":"M14 8L14 8"}),
          h('path', {"d":"M6 12L6 12"}),
          h('path', {"d":"M10 12L10 12"}),
          h('path', {"d":"M14 12L14 12"}),
          h('path', {"d":"M18 16L18 16"}),
          h('path', {"d":"M6 16L6 16"})
        ]
      );
  }
});

module.exports = KeyboardEnter;
module.exports.KeyboardEnter = KeyboardEnter;
module.exports.default = KeyboardEnter;
