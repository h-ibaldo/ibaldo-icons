'use strict';

const { defineComponent, h } = require('vue');

const BanknoteDollar = defineComponent({
  name: 'BanknoteDollar',
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
          h('path', {"d":"M17 4C17 6.762 19.238 9 22 9"}),
          h('path', {"d":"M2 15C4.762 15 7 17.238 7 20"}),
          h('path', {"d":"M17 20C17 17.238 19.238 15 22 15"}),
          h('path', {"d":"M2 9C4.762 9 7 6.762 7 4"}),
          h('path', {"d":"M14.586 9C14.063 8.406 13.105 8 12 8C10.344 8 9 8.895 9 10C9 11.105 10.344 12 12 12"}),
          h('path', {"d":"M9.414 15C9.938 15.594 10.895 16 12 16C13.656 16 15 15.105 15 14C15 12.895 13.656 12 12 12"}),
          h('path', {"d":"M12 7L12 8"}),
          h('path', {"d":"M12 16L12 17"})
        ]
      );
  }
});

module.exports = BanknoteDollar;
module.exports.BanknoteDollar = BanknoteDollar;
module.exports.default = BanknoteDollar;
