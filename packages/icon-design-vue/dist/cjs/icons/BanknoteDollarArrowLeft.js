'use strict';

const { defineComponent, h } = require('vue');

const BanknoteDollarArrowLeft = defineComponent({
  name: 'BanknoteDollarArrowLeft',
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
          h('path', {"d":"M22 15L22 3L2 3L2 19L12 19"}),
          h('path', {"d":"M17 3C17 5.762 19.238 8 22 8"}),
          h('path', {"d":"M2 14C4.762 14 7 16.238 7 19"}),
          h('path', {"d":"M2 8C4.762 8 7 5.762 7 3"}),
          h('path', {"d":"M14.586 8C14.063 7.406 13.105 7 12 7C10.344 7 9 7.895 9 9C9 10.105 10.344 11 12 11"}),
          h('path', {"d":"M9.414 14C9.938 14.594 10.895 15 12 15C13.656 15 15 14.105 15 13C15 11.895 13.656 11 12 11"}),
          h('path', {"d":"M12 6L12 7"}),
          h('path', {"d":"M12 15L12 16"}),
          h('path', {"d":"M22 19L15 19"}),
          h('path', {"d":"M18 22L15 19L18 16"})
        ]
      );
  }
});

module.exports = BanknoteDollarArrowLeft;
module.exports.BanknoteDollarArrowLeft = BanknoteDollarArrowLeft;
module.exports.default = BanknoteDollarArrowLeft;
