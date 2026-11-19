'use strict';

const { defineComponent, h } = require('vue');

const QrCode = defineComponent({
  name: 'QrCode',
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
          h('path', {"d":"M10 12L4 12C2.895 12 2 11.105 2 10L2 4C2 2.895 2.895 2 4 2L10 2C11.105 2 12 2.895 12 4L12 10C12 11.105 11.105 12 10 12Z"}),
          h('path', {"d":"M22 12L18 12C16.895 12 16 11.105 16 10L16 4C16 2.895 16.895 2 18 2L22 2"}),
          h('path', {"d":"M2 22L2 18C2 16.895 2.895 16 4 16L10 16C11.105 16 12 16.895 12 18L12 22"}),
          h('path', {"d":"M16 22L16 18C16 16.895 16.895 16 18 16L22 16"})
        ]
      );
  }
});

module.exports = QrCode;
module.exports.QrCode = QrCode;
module.exports.default = QrCode;
