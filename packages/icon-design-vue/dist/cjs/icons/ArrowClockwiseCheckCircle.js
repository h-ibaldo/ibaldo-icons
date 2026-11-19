'use strict';

const { defineComponent, h } = require('vue');

const ArrowClockwiseCheckCircle = defineComponent({
  name: 'ArrowClockwiseCheckCircle',
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
          h('polyline', {"points":"19.000000000029104 1.999999999979991 19.000000000029104 5.999999999979991 15.000000000029104 5.999999999979991"}),
          h('polyline', {"points":"14.000000000029104 15.999999999979991 15.500000000029104 17.499999999979991 18.000000000029104 14.999999999979991"}),
          h('circle', {"cx":"16.000000000029104","cy":"15.999999999979991","r":"6"}),
          h('path', {"d":"M19.000000000029104,5.999999999979991v-.31646728515625c-1.738037109378638-2.23779296875-4.447204589849207-3.68353271484375-7.5-3.68353271484375C6.253295898470242,1.999999999979991,2.000000000029104,6.253295898417491,2.000000000029104,11.499999999979991s4.253295898441138,9.5,9.5,9.5c.365905761720569,0,.722900390621362-.0347900390625,1.078002929691138-.0750732421875"})
        ]
      );
  }
});

module.exports = ArrowClockwiseCheckCircle;
module.exports.ArrowClockwiseCheckCircle = ArrowClockwiseCheckCircle;
module.exports.default = ArrowClockwiseCheckCircle;
