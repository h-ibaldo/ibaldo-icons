'use strict';

const { defineComponent, h } = require('vue');

const BanknoteDollarArrowUp = defineComponent({
  name: 'BanknoteDollarArrowUp',
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
          h('path', {"d":"M22 13L22 2L2 2L2 18L13 18"}),
          h('path', {"d":"M17 2C17 4.762 19.238 7 22 7"}),
          h('path', {"d":"M2 13C4.762 13 7 15.238 7 18"}),
          h('path', {"d":"M2 7C4.762 7 7 4.762 7 2"}),
          h('path', {"d":"M14.586 7C14.063 6.406 13.105 6 12 6C10.344 6 9 6.895 9 8C9 9.105 10.344 10 12 10"}),
          h('path', {"d":"M9.414 13C9.938 13.594 10.895 14 12 14C13.656 14 15 13.105 15 12C15 10.895 13.656 10 12 10"}),
          h('path', {"d":"M12 5L12 6"}),
          h('path', {"d":"M12 14L12 15"}),
          h('path', {"d":"M19 22L19 15"}),
          h('path', {"d":"M16 18L19 15L22 18"})
        ]
      );
  }
});

module.exports = BanknoteDollarArrowUp;
module.exports.BanknoteDollarArrowUp = BanknoteDollarArrowUp;
module.exports.default = BanknoteDollarArrowUp;
