'use strict';

const { defineComponent, h } = require('vue');

const LockOpenCheckCornerRound = defineComponent({
  name: 'LockOpenCheckCornerRound',
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
          h('path', {"d":"M15.527343744516656,5.000000000480213c-.772216796875-1.764404296875-2.5286865234375-3-4.577880859375-3-2.761413574217841,0-5,2.23858642578125-5,5v3"}),
          h('polyline', {"points":"13.949462885141656 19.000000000480213 16.949462885141656 22.000000000480213 21.949462885141656 17.000000000480213"}),
          h('path', {"d":"M17.949462885141656,15.000000000480213c0-3.86602783203125-3.134033203125-7-7-7s-7,3.13397216796875-7,7c0,3.865966796875,3.134033203125,7,7,7"})
        ]
      );
  }
});

module.exports = LockOpenCheckCornerRound;
module.exports.LockOpenCheckCornerRound = LockOpenCheckCornerRound;
module.exports.default = LockOpenCheckCornerRound;
