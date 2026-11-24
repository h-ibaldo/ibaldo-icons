'use strict';

const { defineComponent, h } = require('vue');

const ScannerRound = defineComponent({
  name: 'ScannerRound',
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
          h('line', {"x1":"4.999999981189831","y1":"1.999996564258254","x2":"21.999999981189831","y2":"12.999996564258254"}),
          h('line', {"x1":"5.999999981189831","y1":"16.999996564258254","x2":"6.999999981189831","y2":"16.999996564258254"})
        ]
      );
  }
});

module.exports = ScannerRound;
module.exports.ScannerRound = ScannerRound;
module.exports.default = ScannerRound;
