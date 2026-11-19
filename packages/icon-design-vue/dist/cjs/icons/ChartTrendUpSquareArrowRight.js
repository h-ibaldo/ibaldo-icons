'use strict';

const { defineComponent, h } = require('vue');

const ChartTrendUpSquareArrowRight = defineComponent({
  name: 'ChartTrendUpSquareArrowRight',
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
          h('path', {"d":"M1.949462884870627,9.000000001378794l.000000000722139,8c.000000000250111,2.761423749150708,2.238576251289487,4.999999999799911,5.0000000004502,4.999999999548891l10-.000000000898581c2.761423749149799-.000000000251021,4.999999999799911-2.238576251300401,4.9999999995498-5.000000000451109l-.0000000009004-10c-.000000000240107-2.76142374914707-2.238576251289487-4.999999999799911-5.0000000004502-4.999999999548891l-4.99999999910051.000000000542059"}),
          h('polyline', {"points":"5.949462885141656 6.000000000480213 7.949462885141656 4.000000000480213 5.949462885141656 2.000000000480213"}),
          h('line', {"x1":"1.949462885141656","y1":"4.000000000480213","x2":"7.949462885141656","y2":"4.000000000480213"}),
          h('polyline', {"points":"6.949462885141656 15.000000000480213 9.949462885141656 12.000000000480213 11.949462885141656 14.000000000480213 16.949462885141656 9.000000000480213"}),
          h('polyline', {"points":"16.949462885141656 12.000000000480213 16.949462885141656 9.000000000480213 13.949462885141656 9.000000000480213"})
        ]
      );
  }
});

module.exports = ChartTrendUpSquareArrowRight;
module.exports.ChartTrendUpSquareArrowRight = ChartTrendUpSquareArrowRight;
module.exports.default = ChartTrendUpSquareArrowRight;
