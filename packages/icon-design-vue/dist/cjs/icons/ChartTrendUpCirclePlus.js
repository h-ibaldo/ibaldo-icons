'use strict';

const { defineComponent, h } = require('vue');

const ChartTrendUpCirclePlus = defineComponent({
  name: 'ChartTrendUpCirclePlus',
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
          h('line', {"x1":"19.5","y1":"7.499999999909051","x2":"19.499999999909051","y2":"2.5"}),
          h('line', {"x1":"17","y1":"5","x2":"21.999999999909051","y2":"4.999999999909051"}),
          h('polyline', {"points":"7 15.000000000181899 10 12.000000000181899 12 14.000000000181899 16 10.000000000181899"}),
          h('polyline', {"points":"16 13.000000000181899 16 10.000000000181899 13 10.000000000181899"}),
          h('path', {"d":"M14,2.200927734375c-.646240234369543-.13134765625-1.31494140625-.200927734375-2-.200927734375C6.47705078125,2,2,6.4771728515625,2,12c0,5.52294921875,4.47705078125,10,10,10s10-4.47705078125,10-10c0-.33758544921875-.017578125-.67108154296875-.050537109369543-1"})
        ]
      );
  }
});

module.exports = ChartTrendUpCirclePlus;
module.exports.ChartTrendUpCirclePlus = ChartTrendUpCirclePlus;
module.exports.default = ChartTrendUpCirclePlus;
