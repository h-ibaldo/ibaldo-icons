'use strict';

const { defineComponent, h } = require('vue');

const ReceiptRupeeWavy = defineComponent({
  name: 'ReceiptRupeeWavy',
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
          h('path', {"d":"M4 22L6 20L8 22L10 20L12 22L14 20L16 22L18 20L20 22L20 2L4 2Z"}),
          h('path', {"d":"M8 6C10.211 6 12 7.789 12 10C12 12.211 10.211 14 8 14"}),
          h('path', {"d":"M8 10L16 10"}),
          h('path', {"d":"M8 6L16 6"}),
          h('path', {"d":"M8 14L12 16"})
        ]
      );
  }
});

module.exports = ReceiptRupeeWavy;
module.exports.ReceiptRupeeWavy = ReceiptRupeeWavy;
module.exports.default = ReceiptRupeeWavy;
