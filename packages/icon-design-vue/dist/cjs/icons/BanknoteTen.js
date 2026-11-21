'use strict';

const { defineComponent, h } = require('vue');

const BanknoteTen = defineComponent({
  name: 'BanknoteTen',
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
          h('path', {"d":"M2 20L22 20L22 4L2 4Z"}),
          h('path', {"d":"M17 20C17 17.238 19.238 15 22 15"}),
          h('path', {"d":"M2 9C4.762 9 7 6.762 7 4"}),
          h('path', {"d":"M15 12C15 14.211 13.656 16 12 16C10.344 16 9 14.211 9 12C9 9.789 10.344 8 12 8C13.656 8 15 9.789 15 12Z"}),
          h('path', {"d":"M19 10L19 7L18 7"}),
          h('path', {"d":"M6 17L6 14L5 14"})
        ]
      );
  }
});

module.exports = BanknoteTen;
module.exports.BanknoteTen = BanknoteTen;
module.exports.default = BanknoteTen;
