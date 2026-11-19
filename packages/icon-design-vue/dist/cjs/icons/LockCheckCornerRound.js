'use strict';

const { defineComponent, h } = require('vue');

const LockCheckCornerRound = defineComponent({
  name: 'LockCheckCornerRound',
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
          h('path', {"d":"M5.949462885141656,10.000000000480213v-3c0-2.761420987731981,2.238574012269964-5,4.999995000000126-5l.000010000000657.000004999998055c2.761420987728343,0,4.999994999999217,2.238574012269964,4.999994999999217,4.999995000001945v3"}),
          h('polyline', {"points":"13.949462885141656 19.000000000480213 16.949462885141656 22.000000000480213 21.949462885141656 17.000000000480213"}),
          h('path', {"d":"M17.949462885141656,15.000000000480213c0-3.86602783203125-3.134033203125-7-7-7s-7,3.13397216796875-7,7c0,3.865966796875,3.134033203125,7,7,7"})
        ]
      );
  }
});

module.exports = LockCheckCornerRound;
module.exports.LockCheckCornerRound = LockCheckCornerRound;
module.exports.default = LockCheckCornerRound;
