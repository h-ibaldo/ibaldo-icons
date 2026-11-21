'use strict';

const { defineComponent, h } = require('vue');

const UsbStick = defineComponent({
  name: 'UsbStick',
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
          h('path', {"d":"M15 7L22 7L22 17L15 17"}),
          h('path', {"d":"M19 10L18 10"}),
          h('path', {"d":"M19 14L18 14"}),
          h('path', {"d":"M7 6L15 6L15 18L7 18C4.238 18 2 15.762 2 13L2 11C2 8.238 4.238 6 7 6Z"}),
          h('path', {"d":"M19 10L18 10"}),
          h('path', {"d":"M19 14L18 14"})
        ]
      );
  }
});

module.exports = UsbStick;
module.exports.UsbStick = UsbStick;
module.exports.default = UsbStick;
