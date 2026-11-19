'use strict';

const { defineComponent, h } = require('vue');

const WindowStackArrowUpRight = defineComponent({
  name: 'WindowStackArrowUpRight',
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
          h('path', {"d":"M5.999999993642632,12.998779299956368V4.921997073393868c0-1.656854249493335,1.343145750519398-3,3-3h10c1.656854249500611,0,3,1.343145750506665,3,3v10c0,1.656854249489697-1.343145750499389,3-3,3h-8"}),
          h('polyline', {"points":"10.999999993642632 8.998779299956368 14.999999993642632 8.998779299956368 14.999999993642632 12.998779299956368"}),
          h('line', {"x1":"6.999999993642632","y1":"16.998779299956368","x2":"14.999999993642632","y2":"8.998779299956368"}),
          h('path', {"d":"M5.999999993642632,4.998779299956368h-1c-1.656854249489697,0-3,1.343145750506665-3,3v11c0,1.656854249493335,1.343145750510303,3,3,3h12c1.656854249500611,0,3-1.343145750506665,3-3v-1"})
        ]
      );
  }
});

module.exports = WindowStackArrowUpRight;
module.exports.WindowStackArrowUpRight = WindowStackArrowUpRight;
module.exports.default = WindowStackArrowUpRight;
