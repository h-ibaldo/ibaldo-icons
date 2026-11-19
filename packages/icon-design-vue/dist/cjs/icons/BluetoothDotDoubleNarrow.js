'use strict';

const { defineComponent, h } = require('vue');

const BluetoothDotDoubleNarrow = defineComponent({
  name: 'BluetoothDotDoubleNarrow',
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
          h('path', {"d":"M12 2L17 7L12 12L7 7"}),
          h('path', {"d":"M7 17L12 12L17 17L12 22"}),
          h('path', {"d":"M12 2L12 22"}),
          h('path', {"d":"M19 12L19 12"}),
          h('path', {"d":"M5 12L5 12"})
        ]
      );
  }
});

module.exports = BluetoothDotDoubleNarrow;
module.exports.BluetoothDotDoubleNarrow = BluetoothDotDoubleNarrow;
module.exports.default = BluetoothDotDoubleNarrow;
