'use strict';

const { defineComponent, h } = require('vue');

const CreditCardX = defineComponent({
  name: 'CreditCardX',
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
          h('path', {"d":"M13 19L4 19C2.895 19 2 18.105 2 17L2 7C2 5.895 2.895 5 4 5L20 5C21.105 5 22 5.895 22 7L22 12"}),
          h('path', {"d":"M2 9L22 9"}),
          h('path', {"d":"M17 16L21 20"}),
          h('path', {"d":"M21 16L17 20"})
        ]
      );
  }
});

module.exports = CreditCardX;
module.exports.CreditCardX = CreditCardX;
module.exports.default = CreditCardX;
