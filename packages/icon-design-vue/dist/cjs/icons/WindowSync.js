'use strict';

const { defineComponent, h } = require('vue');

const WindowSync = defineComponent({
  name: 'WindowSync',
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
          h('path', {"d":"M20 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 20C22 21.105 21.105 22 20 22Z"}),
          h('path', {"d":"M2 8L22 8"}),
          h('path', {"d":"M5 5L5 5"}),
          h('path', {"d":"M8 5L8 5"}),
          h('path', {"d":"M11 5L11 5"}),
          h('path', {"d":"M16 15L17 13"}),
          h('path', {"d":"M7 17L8 15"}),
          h('path', {"d":"M8 15C8 17.211 9.789 19 12 19C13.008 19 13.918 18.613 14.621 18"}),
          h('path', {"d":"M16 15C16 12.789 14.211 11 12 11C10.992 11 10.082 11.387 9.379 12"})
        ]
      );
  }
});

module.exports = WindowSync;
module.exports.WindowSync = WindowSync;
module.exports.default = WindowSync;
