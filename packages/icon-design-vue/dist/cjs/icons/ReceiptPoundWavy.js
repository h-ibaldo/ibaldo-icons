'use strict';

const { defineComponent, h } = require('vue');

const ReceiptPoundWavy = defineComponent({
  name: 'ReceiptPoundWavy',
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
          h('path', {"d":"M16 9C16 7.344 14.656 6 13 6C11.344 6 10 7.344 10 9L10 16"}),
          h('path', {"d":"M8 16L16 16"}),
          h('path', {"d":"M8 12L13 12"})
        ]
      );
  }
});

module.exports = ReceiptPoundWavy;
module.exports.ReceiptPoundWavy = ReceiptPoundWavy;
module.exports.default = ReceiptPoundWavy;
