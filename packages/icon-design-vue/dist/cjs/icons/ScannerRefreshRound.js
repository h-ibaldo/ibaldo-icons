'use strict';

const { defineComponent, h } = require('vue');

const ScannerRefreshRound = defineComponent({
  name: 'ScannerRefreshRound',
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
          h('path', {"d":"M1.999999981189831,12.999996564258254h20v6c0,1.655745073481999-1.344254926518001,3-3,3H4.999999981189831c-1.655745073482,0-3-1.344254926518001-3-3v-6h0Z"}),
          h('line', {"x1":"5.999999981189831","y1":"16.999996564258254","x2":"6.999999981189831","y2":"16.999996564258254"}),
          h('polyline', {"points":"1.999999981189831 1.999996564258254 1.999999981189831 4.999996564254616 4.999999981189831 4.999996564254616"}),
          h('path', {"d":"M3.385253887439831,8.999996564258254c.699035644529431.61737060546875,1.607360839840112,1,2.61474609375,1,2.209167480459655,0,4-1.7908935546875,4-4,0-2.20916748046875-1.790832519540345-4-4-4-1.861694335939319,0-3.412475585939319,1.27777099609375-3.858581542970569,3"}),
          h('line', {"x1":"21.999999981189831","y1":"12.999996564258254","x2":"12.999999981189831","y2":"7.176449200977004"})
        ]
      );
  }
});

module.exports = ScannerRefreshRound;
module.exports.ScannerRefreshRound = ScannerRefreshRound;
module.exports.default = ScannerRefreshRound;
