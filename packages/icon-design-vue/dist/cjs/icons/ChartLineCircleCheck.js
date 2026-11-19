'use strict';

const { defineComponent, h } = require('vue');

const ChartLineCircleCheck = defineComponent({
  name: 'ChartLineCircleCheck',
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
          h('path', {"d":"M21.799133300790345,10c.131225585929315.646240234371362.200866699209655,1.31494140625.200866699209655,2,0,5.52294921875-4.477172851549767,10-10,10-5.522827148440228,0-10-4.47705078125-10-10C2,6.4771728515625,6.477172851559772,2,12,2c.684997558590112,0,1.353698730469659.069580078121362,2,.200927734371362"}),
          h('polyline', {"points":"17 5 19 7 22 4"}),
          h('polyline', {"points":"7 15 10 11 14 14 17 10"})
        ]
      );
  }
});

module.exports = ChartLineCircleCheck;
module.exports.ChartLineCircleCheck = ChartLineCircleCheck;
module.exports.default = ChartLineCircleCheck;
