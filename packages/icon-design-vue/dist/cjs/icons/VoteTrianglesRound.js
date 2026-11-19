'use strict';

const { defineComponent, h } = require('vue');

const VoteTrianglesRound = defineComponent({
  name: 'VoteTrianglesRound',
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
          h('path', {"d":"M7.216630450971934,8.40000000047803l4-5.333333333332121c.400000000001455-.533333333332848,1.199999999998909-.533333333332848,1.600000000000364,0l4,5.333333333332121c.494427190998977.65923625466894.024045318335993,1.600000000002183-.800000000000182,1.600000000002183h-8c-.824045318333447,0-1.294427191001887-.940763745333243-.800000000000182-1.600000000002183Z"}),
          h('path', {"d":"M16.816630450972298,15.600000000478758l-4,5.333333333335759c-.400000000001455.533333333332848-1.199999999998909.533333333332848-1.600000000000364,0l-4-5.333333333335759c-.494427191001705-.659236254665302-.024045318333265-1.599999999998545.800000000000182-1.599999999998545h8c.824045318336175,0,1.294427190999158.940763745333243.800000000000182,1.599999999998545Z"})
        ]
      );
  }
});

module.exports = VoteTrianglesRound;
module.exports.VoteTrianglesRound = VoteTrianglesRound;
module.exports.default = VoteTrianglesRound;
