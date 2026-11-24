'use strict';

const { defineComponent, h } = require('vue');

const UsbPort = defineComponent({
  name: 'UsbPort',
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
          h('path', {"d":"M5 9L19 9C20.656 9 22 10.344 22 12C22 13.656 20.656 15 19 15L5 15C3.344 15 2 13.656 2 12C2 10.344 3.344 9 5 9Z"}),
          h('path', {"d":"M6 12L18 12"})
        ]
      );
  }
});

module.exports = UsbPort;
module.exports.UsbPort = UsbPort;
module.exports.default = UsbPort;
