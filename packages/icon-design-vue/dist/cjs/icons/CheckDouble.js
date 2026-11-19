'use strict';

const { defineComponent, h } = require('vue');

const CheckDouble = defineComponent({
  name: 'CheckDouble',
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
          h('polyline', {"points":"7.974731440090181 11.000000003874447 12.974731440090181 17.000000003874447 20.974731440090181 7.000000003874447"}),
          h('polyline', {"points":"2.974731440090181 11.000000003874447 7.974731440090181 17.000000003874447 10.423706049479733 13.938781742155697"}),
          h('line', {"x1":"12.709411615869612","y1":"11.081604007787973","x2":"15.974731440090181","y2":"7.000000003874447"})
        ]
      );
  }
});

module.exports = CheckDouble;
module.exports.CheckDouble = CheckDouble;
module.exports.default = CheckDouble;
