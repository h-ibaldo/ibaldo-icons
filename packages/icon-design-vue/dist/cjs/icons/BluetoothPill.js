'use strict';

const { defineComponent, h } = require('vue');

const BluetoothPill = defineComponent({
  name: 'BluetoothPill',
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
          h('path', {"d":"M12 22C7.582 22 4 18.418 4 14L4 10C4 5.582 7.582 2 12 2C16.418 2 20 5.582 20 10L20 14C20 18.418 16.418 22 12 22Z"}),
          h('path', {"d":"M12 6L12 18"}),
          h('path', {"d":"M8 9L12 12L16 9L12 6"}),
          h('path', {"d":"M12 18L16 15L12 12L8 15"})
        ]
      );
  }
});

module.exports = BluetoothPill;
module.exports.BluetoothPill = BluetoothPill;
module.exports.default = BluetoothPill;
