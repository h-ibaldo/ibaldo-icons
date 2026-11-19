'use strict';

const { defineComponent, h } = require('vue');

const BluetoothSmall = defineComponent({
  name: 'BluetoothSmall',
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
          h('path', {"d":"M12 6L12 18"}),
          h('path', {"d":"M8 9L12 12L16 9L12 6"}),
          h('path', {"d":"M12 18L16 15L12 12L8 15"})
        ]
      );
  }
});

module.exports = BluetoothSmall;
module.exports.BluetoothSmall = BluetoothSmall;
module.exports.default = BluetoothSmall;
