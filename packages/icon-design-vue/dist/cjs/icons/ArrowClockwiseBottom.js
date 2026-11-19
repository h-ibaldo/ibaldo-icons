'use strict';

const { defineComponent, h } = require('vue');

const ArrowClockwiseBottom = defineComponent({
  name: 'ArrowClockwiseBottom',
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
          h('polyline', {"points":"4 22.000000000320142 4.000000000130058 18 8.000000000440195 18.000000000138243"}),
          h('path', {"d":"M2.050476074219659,13c-.032653808600116-.328979492191138-.050476074219659-.66241455078125-.050476074219659-1C2,6.477172851558862,6.477172851559772,2,12,2c5.522827148430224,0,10,4.477172851558862,10,10,0,5.522827148439319-4.477172851569776,10-10,10-3.268432617190228,0-6.16162109375-1.5751953125-7.986389160159888-4"})
        ]
      );
  }
});

module.exports = ArrowClockwiseBottom;
module.exports.ArrowClockwiseBottom = ArrowClockwiseBottom;
module.exports.default = ArrowClockwiseBottom;
