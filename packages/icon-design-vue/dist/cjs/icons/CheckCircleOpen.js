'use strict';

const { defineComponent, h } = require('vue');

const CheckCircleOpen = defineComponent({
  name: 'CheckCircleOpen',
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
          h('polyline', {"points":"8.949462885140747 11.000000000480213 11.949462885140747 14.000000000480213 19.949462885140747 6.000000000480213"}),
          h('path', {"d":"M15.237121576550635,4.712341309070325c-1.003784179691138-.453674316402612-2.114501953130457-.712341308590112-3.287658691409888-.712341308590112-4.41827392578125,0-8,3.58172607421875-8,8,0,4.418273925777612,3.58172607421875,8,8,8,4.418273925779431,0,8-3.581726074222388,8-8"})
        ]
      );
  }
});

module.exports = CheckCircleOpen;
module.exports.CheckCircleOpen = CheckCircleOpen;
module.exports.default = CheckCircleOpen;
