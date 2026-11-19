'use strict';

const { defineComponent, h } = require('vue');

const ClockNumberOne = defineComponent({
  name: 'ClockNumberOne',
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
          h('polyline', {"points":"3 14.999999999887223 4 14.999999999887223 4 21.999999999887223"}),
          h('path', {"d":"M9,21.540771484258585c.947265625.297607421878638,1.95458984375.459228515628638,3,.459228515628638,5.52294921875,0,10-4.477172851558862,10-10,0-5.522827148439319-4.47705078125-10-10-10C7.162475585939319,1.999999999887223,3.131103515619543,5.436157226447904,2.204223632810681,9.999999999887223"})
        ]
      );
  }
});

module.exports = ClockNumberOne;
module.exports.ClockNumberOne = ClockNumberOne;
module.exports.default = ClockNumberOne;
