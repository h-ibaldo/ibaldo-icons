'use strict';

const { defineComponent, h } = require('vue');

const BluetoothOff = defineComponent({
  name: 'BluetoothOff',
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
          h('path', {"d":"M3.332 4L20.668 20"}),
          h('path', {"d":"M15.332 8.922C16.5 7.848 18.5 6 18.5 6L12 2L12 5.848"}),
          h('path', {"d":"M18.5 18L12 22"}),
          h('path', {"d":"M12 12L12 22"}),
          h('path', {"d":"M5.5 18L12 12"})
        ]
      );
  }
});

module.exports = BluetoothOff;
module.exports.BluetoothOff = BluetoothOff;
module.exports.default = BluetoothOff;
