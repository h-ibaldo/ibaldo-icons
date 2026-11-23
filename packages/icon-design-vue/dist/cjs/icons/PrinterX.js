'use strict';

const { defineComponent, h } = require('vue');

const PrinterX = defineComponent({
  name: 'PrinterX',
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
          h('path', {"d":"M7 18L3 18C2.445 18 2 17.555 2 17L2 9C2 8.449 2.445 8 3 8L21 8C21.555 8 22 8.449 22 9L22 15"}),
          h('path', {"d":"M15 22L7 22L7 13"}),
          h('path', {"d":"M17 8L17 2L7 2L7 8"}),
          h('path', {"d":"M6 13L18 13"}),
          h('path', {"d":"M18 18L22 22"}),
          h('path', {"d":"M22 18L18 22"})
        ]
      );
  }
});

module.exports = PrinterX;
module.exports.PrinterX = PrinterX;
module.exports.default = PrinterX;
