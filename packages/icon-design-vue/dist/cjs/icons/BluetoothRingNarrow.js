'use strict';

const { defineComponent, h } = require('vue');

const BluetoothRingNarrow = defineComponent({
  name: 'BluetoothRingNarrow',
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
          h('path', {"d":"M8 2L13 7L8 12L3 7"}),
          h('path', {"d":"M3 17L8 12L13 17L8 22"}),
          h('path', {"d":"M8 2L8 22"}),
          h('path', {"d":"M16.281 15.281C17.316 14.559 18 13.359 18 12C18 10.641 17.316 9.441 16.281 8.719"}),
          h('path', {"d":"M19.133 18.133C20.883 16.664 22 14.465 22 12C22 9.535 20.883 7.336 19.133 5.867"})
        ]
      );
  }
});

module.exports = BluetoothRingNarrow;
module.exports.BluetoothRingNarrow = BluetoothRingNarrow;
module.exports.default = BluetoothRingNarrow;
