'use strict';

const { defineComponent, h } = require('vue');

const ScanBarcode = defineComponent({
  name: 'ScanBarcode',
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
          h('path', {"d":"M6 16L6 8"}),
          h('path', {"d":"M10 16L10 8"}),
          h('path', {"d":"M14 16L14 8"}),
          h('path', {"d":"M18 16L18 8"}),
          h('path', {"d":"M22 17L22 20C22 21.105 21.105 22 20 22L17 22"}),
          h('path', {"d":"M2 7L2 4C2 2.895 2.895 2 4 2L7 2"}),
          h('path', {"d":"M17 2L20 2C21.105 2 22 2.895 22 4L22 7"}),
          h('path', {"d":"M7 22L4 22C2.895 22 2 21.105 2 20L2 17"})
        ]
      );
  }
});

module.exports = ScanBarcode;
module.exports.ScanBarcode = ScanBarcode;
module.exports.default = ScanBarcode;
