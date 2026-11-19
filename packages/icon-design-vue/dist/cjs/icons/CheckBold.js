'use strict';

const { defineComponent, h } = require('vue');

const CheckBold = defineComponent({
  name: 'CheckBold',
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
          h('polygon', {"points":"2.949462885140747 12.000000000480213 5.949462885140747 9.000000000480213 9.949462885140747 13.000000000480213 17.949462885140747 5.000000000480213 20.949462885140747 8.000000000480213 9.949462885140747 19.000000000480213 2.949462885140747 12.000000000480213"})
        ]
      );
  }
});

module.exports = CheckBold;
module.exports.CheckBold = CheckBold;
module.exports.default = CheckBold;
