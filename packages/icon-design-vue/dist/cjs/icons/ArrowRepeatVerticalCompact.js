'use strict';

const { defineComponent, h } = require('vue');

const ArrowRepeatVerticalCompact = defineComponent({
  name: 'ArrowRepeatVerticalCompact',
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
          h('polyline', {"points":"22.00000000027012 15.000000000509317 19.000000000400178 18.00000000064756 16.00000000027012 15.000000000778527"}),
          h('path', {"d":"M9.000000000130058,4.000000000097316l6.999999999809916-.000000000097316c1.656854249469689-.000000000022737,2.999999999989996,1.343145750436634,3.000000000040018,2.999999999919055l.000000000420187,11.000000000728505"}),
          h('polyline', {"points":"2 9.000000000508408 4.999999999859938 6.000000000367436 8 9.000000000237378"}),
          h('path', {"d":"M15.000000000130058,20.000000000909495l-6.999999999779902.000000000109139c-1.656854249479693.000000000029104-3.000000000010004-1.343145750430267-3.000000000060027-2.999999999909051l-.000000000430191-11.000000000742148"})
        ]
      );
  }
});

module.exports = ArrowRepeatVerticalCompact;
module.exports.ArrowRepeatVerticalCompact = ArrowRepeatVerticalCompact;
module.exports.default = ArrowRepeatVerticalCompact;
