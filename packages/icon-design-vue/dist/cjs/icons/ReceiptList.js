'use strict';

const { defineComponent, h } = require('vue');

const ReceiptList = defineComponent({
  name: 'ReceiptList',
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
          h('path', {"d":"M20 22L20 2L4 2L4 22L8 20L12 22L16 20Z"}),
          h('path', {"d":"M8 7L12 7"}),
          h('path', {"d":"M15 7L16 7"}),
          h('path', {"d":"M8 11L12 11"}),
          h('path', {"d":"M15 11L16 11"}),
          h('path', {"d":"M8 15L12 15"}),
          h('path', {"d":"M15 15L16 15"})
        ]
      );
  }
});

module.exports = ReceiptList;
module.exports.ReceiptList = ReceiptList;
module.exports.default = ReceiptList;
