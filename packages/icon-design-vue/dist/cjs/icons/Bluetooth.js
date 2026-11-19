'use strict';

const { defineComponent, h } = require('vue');

const Bluetooth = defineComponent({
  name: 'Bluetooth',
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
          h('path', {"d":"M12 2L12 22"}),
          h('path', {"d":"M5.5 18L18.5 6"}),
          h('path', {"d":"M5.5 6L18.5 18"}),
          h('path', {"d":"M12 2L18.5 6"}),
          h('path', {"d":"M18.5 18L12 22"})
        ]
      );
  }
});

module.exports = Bluetooth;
module.exports.Bluetooth = Bluetooth;
module.exports.default = Bluetooth;
