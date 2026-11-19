'use strict';

const { defineComponent, h } = require('vue');

const WindowLock = defineComponent({
  name: 'WindowLock',
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
          h('path', {"d":"M22 22L14 22L14 17L22 17Z"}),
          h('path', {"d":"M15 17L15 15C15 13.344 16.344 12 18 12C19.656 12 21 13.344 21 15L21 17"}),
          h('path', {"d":"M10 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 9"}),
          h('path', {"d":"M2 8L22 8"}),
          h('path', {"d":"M5 5L5 5"}),
          h('path', {"d":"M8 5L8 5"}),
          h('path', {"d":"M11 5L11 5"})
        ]
      );
  }
});

module.exports = WindowLock;
module.exports.WindowLock = WindowLock;
module.exports.default = WindowLock;
