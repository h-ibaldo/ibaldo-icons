'use strict';

const { defineComponent, h } = require('vue');

const ReceiptCentWavy = defineComponent({
  name: 'ReceiptCentWavy',
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
          h('path', {"d":"M12 6L12 16"}),
          h('path', {"d":"M4 22L6 20L8 22L10 20L12 22L14 20L16 22L18 20L20 22L20 2L4 2Z"}),
          h('path', {"d":"M15.465 13C14.773 14.195 13.48 15 12 15C9.789 15 8 13.211 8 11C8 8.789 9.789 7 12 7C13.48 7 14.773 7.805 15.465 9"})
        ]
      );
  }
});

module.exports = ReceiptCentWavy;
module.exports.ReceiptCentWavy = ReceiptCentWavy;
module.exports.default = ReceiptCentWavy;
