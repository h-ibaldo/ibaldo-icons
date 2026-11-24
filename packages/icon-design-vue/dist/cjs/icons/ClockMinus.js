'use strict';

const { defineComponent, h } = require('vue');

const ClockMinus = defineComponent({
  name: 'ClockMinus',
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
          h('line', {"x1":"2","y1":"18.999999999887223","x2":"8","y2":"18.999999999887223"}),
          h('path', {"d":"M12,21.999999999887223c5.522827148439319,0,10-4.477172851558862,10-10,0-5.522888183590112-4.477172851560681-10-10-10S2,6.477111816297111,2,11.999999999887223c0,.685852050782159.075988769529431,1.353149414060681.207885742189319,2"}),
          h('polyline', {"points":"12 6.999999999887223 12 11.999999999887223 17 11.999999999887223"})
        ]
      );
  }
});

module.exports = ClockMinus;
module.exports.ClockMinus = ClockMinus;
module.exports.default = ClockMinus;
