'use strict';

const { defineComponent, h } = require('vue');

const ArrowRepeatVertical = defineComponent({
  name: 'ArrowRepeatVertical',
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
          h('polyline', {"points":"22 16.999999999552529 19.000000000130058 19.999999999690772 16 16.999999999821739"}),
          h('path', {"d":"M8.999999999859938,2.000000000662112l2.99999999963984-.000000000040018c3.865993248819905-.000000000170985,7.000000000140062,3.134006750868139,7.000000000320142,6.999999999688953l.000000000310138,10.999999999379725"}),
          h('polyline', {"points":"1.99999999972988 7.000000001071385 4.999999999589818 4.000000000931323 7.99999999972988 7.000000000800355"}),
          h('path', {"d":"M14.999999999859938,21.999999999950887l-2.99999999963984.000000000049113c-3.865993248819905.000000000170985-7.000000000140062-3.134006750868139-7.000000000310138-6.999999999688953l-.000000000320142-10.999999999379725"})
        ]
      );
  }
});

module.exports = ArrowRepeatVertical;
module.exports.ArrowRepeatVertical = ArrowRepeatVertical;
module.exports.default = ArrowRepeatVertical;
