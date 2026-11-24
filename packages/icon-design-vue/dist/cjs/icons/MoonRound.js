'use strict';

const { defineComponent, h } = require('vue');

const MoonRound = defineComponent({
  name: 'MoonRound',
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
          h('path', {"d":"M2 12C2 6.477 6.477 2 12 2C12.664 2 13.313 2.066 13.941 2.188C11.105 2.887 9 5.449 9 8.5C9 12.09 11.91 15 15.5 15C18.551 15 21.113 12.895 21.813 10.059C21.934 10.688 22 11.336 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z"})
        ]
      );
  }
});

module.exports = MoonRound;
module.exports.MoonRound = MoonRound;
module.exports.default = MoonRound;
