'use strict';

const { defineComponent, h } = require('vue');

const BluetoothRectangleRoundBroken = defineComponent({
  name: 'BluetoothRectangleRoundBroken',
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
          h('path', {"d":"M12 12L12 19"}),
          h('path', {"d":"M14.547 9.773L16 8.5L12 5L12 7.184"}),
          h('path', {"d":"M17.586 16.887L6.414 7.113"}),
          h('path', {"d":"M12 12L8 15.5"}),
          h('path', {"d":"M12 19L16 15.5"})
        ]
      );
  }
});

module.exports = BluetoothRectangleRoundBroken;
module.exports.BluetoothRectangleRoundBroken = BluetoothRectangleRoundBroken;
module.exports.default = BluetoothRectangleRoundBroken;
