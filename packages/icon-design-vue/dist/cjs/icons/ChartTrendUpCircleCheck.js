'use strict';

const { defineComponent, h } = require('vue');

const ChartTrendUpCircleCheck = defineComponent({
  name: 'ChartTrendUpCircleCheck',
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
          h('path', {"d":"M21.748596185920178,10.000000000298314c.131225585939319.646240234371362.200866699219659,1.31494140625.200866699219659,2,0,5.52294921875-4.477172851559772,10-10,10S1.949462885139837,17.522949219048314,1.949462885139837,12.000000000298314C1.949462885139837,6.477172851860814,6.426635736699609,2.000000000298314,11.949462885139837,2.000000000298314c.684997558590112,0,1.353698730469659.069580078121362,2,.200927734371362"}),
          h('polyline', {"points":"16.949462885139837 5.000000000298314 18.949462885139837 7.000000000298314 21.949462885139837 4.000000000298314"}),
          h('polyline', {"points":"6.949462885139837 15.000000000480213 9.949462885139837 12.000000000480213 11.949462885139837 14.000000000480213 15.949462885139837 10.000000000480213"}),
          h('polyline', {"points":"15.949462885139837 13.000000000480213 15.949462885139837 10.000000000480213 12.949462885139837 10.000000000480213"})
        ]
      );
  }
});

module.exports = ChartTrendUpCircleCheck;
module.exports.ChartTrendUpCircleCheck = ChartTrendUpCircleCheck;
module.exports.default = ChartTrendUpCircleCheck;
