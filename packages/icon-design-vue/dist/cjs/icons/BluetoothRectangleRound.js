'use strict';

const { defineComponent, h } = require('vue');

const BluetoothRectangleRound = defineComponent({
  name: 'BluetoothRectangleRound',
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
          h('path', {"d":"M15 22L9 22C5.688 22 3 19.313 3 16L3 8C3 4.688 5.688 2 9 2L15 2C18.313 2 21 4.688 21 8L21 16C21 19.313 18.313 22 15 22Z"}),
          h('path', {"d":"M12 5L12 19"}),
          h('path', {"d":"M8 8.5L12 12L16 8.5L12 5"}),
          h('path', {"d":"M12 19L16 15.5L12 12L8 15.5"})
        ]
      );
  }
});

module.exports = BluetoothRectangleRound;
module.exports.BluetoothRectangleRound = BluetoothRectangleRound;
module.exports.default = BluetoothRectangleRound;
