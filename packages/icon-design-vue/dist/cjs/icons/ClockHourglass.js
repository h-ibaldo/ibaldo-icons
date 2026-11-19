'use strict';

const { defineComponent, h } = require('vue');

const ClockHourglass = defineComponent({
  name: 'ClockHourglass',
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
          h('polyline', {"points":"12 6.999999999887223 12 11.999999999887223 17 11.999999999887223"}),
          h('path', {"d":"M5,17.999999999887223s-3-1-3-4h6c0,3-3,4-3,4Z"}),
          h('path', {"d":"M5,17.999999999887223s3,1,3,4H2c0-3,3-4,3-4Z"}),
          h('path', {"d":"M12,21.999999999887223c5.522888183590112,0,10-4.477172851558862,10-10,0-5.522827148439319-4.477111816409888-10-10-10C7.162170410159888,1.999999999887223,3.127502441409888,5.435546874887223,2.200866699220569,9.999999999887223"})
        ]
      );
  }
});

module.exports = ClockHourglass;
module.exports.ClockHourglass = ClockHourglass;
module.exports.default = ClockHourglass;
