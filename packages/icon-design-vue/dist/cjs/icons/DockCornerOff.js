'use strict';

const { defineComponent, h } = require('vue');

const DockCornerOff = defineComponent({
  name: 'DockCornerOff',
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
          h('path', {"d":"M15 16L9 16"}),
          h('path', {"d":"M18.398 20L3 20C2.449 20 2 19.551 2 19L2 5C2 4.449 2.449 4 3 4L5.602 4"}),
          h('path', {"d":"M11.602 4L21 4C21.551 4 22 4.449 22 5L22 17"}),
          h('path', {"d":"M20 22L4 2"})
        ]
      );
  }
});

module.exports = DockCornerOff;
module.exports.DockCornerOff = DockCornerOff;
module.exports.default = DockCornerOff;
