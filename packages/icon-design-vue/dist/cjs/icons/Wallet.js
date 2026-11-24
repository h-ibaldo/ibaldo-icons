'use strict';

const { defineComponent, h } = require('vue');

const Wallet = defineComponent({
  name: 'Wallet',
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
          h('path', {"d":"M2 6C2 7.656 3.344 9 5 9L19 9C20.656 9 22 10.344 22 12L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 6C2 4.344 3.344 3 5 3L14.664 3"}),
          h('path', {"d":"M3 8L15.16 2.789C16.176 2.352 17.352 2.824 17.789 3.84L20 9"}),
          h('path', {"d":"M17 15.5C17 15.223 17.223 15 17.5 15C17.777 15 18 15.223 18 15.5C18 15.777 17.777 16 17.5 16C17.223 16 17 15.777 17 15.5Z"})
        ]
      );
  }
});

module.exports = Wallet;
module.exports.Wallet = Wallet;
module.exports.default = Wallet;
