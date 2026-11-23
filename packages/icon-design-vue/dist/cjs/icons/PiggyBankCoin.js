'use strict';

const { defineComponent, h } = require('vue');

const PiggyBankCoin = defineComponent({
  name: 'PiggyBankCoin',
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
          h('path', {"d":"M21 10L21.27 9.73C22.223 8.773 22.223 7.227 21.27 6.27L21 6"}),
          h('path', {"d":"M12.766 7C12.289 6.473 12 5.77 12 5C12 3.344 13.344 2 15 2C16.656 2 18 3.344 18 5C18 6.031 17.48 6.938 16.691 7.477"}),
          h('path', {"d":"M7 8L7 4C7 4 8.98 4.09 10.199 4.945C11.766 6.039 12 7 12 7C12 7 12.754 7 13 7C18.68 7 22 9.91 22 13.5C22 15.145 21.301 16.648 20 17.793L20 21C20 21.551 19.551 22 19 22L17 22C16.449 22 16 21.551 16 21L16 19.695C15.09 19.895 14.09 20 13 20C12.297 20 11.629 19.957 11 19.871L11 21C11 21.551 10.551 22 10 22L8 22C7.449 22 7 21.551 7 21L7 18.527C5.906 17.855 5.094 16.992 4.594 16L2 16L2 12L3 12C4 12 6.316 9.902 7 8Z"}),
          h('path', {"d":"M8 12L8 12"})
        ]
      );
  }
});

module.exports = PiggyBankCoin;
module.exports.PiggyBankCoin = PiggyBankCoin;
module.exports.default = PiggyBankCoin;
