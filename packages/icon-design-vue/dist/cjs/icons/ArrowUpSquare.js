'use strict';

const { defineComponent, h } = require('vue');

const ArrowUpSquare = defineComponent({
  name: 'ArrowUpSquare',
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
          h('polyline', {"points":"9.025268534540373 10.999999998695785 12.025268534680436 7.99999999883039 15.025268534540373 10.999999998964995"}),
          h('line', {"x1":"12.025268534320276","y1":"15.99999999883039","x2":"12.025268534680436","y2":"7.999999998826752"}),
          h('rect', {"x":"2.025268534409406","y":"1.999999998828571","width":"20","height":"20","rx":"1.999999999997726","ry":"1.999999999997726"})
        ]
      );
  }
});

module.exports = ArrowUpSquare;
module.exports.ArrowUpSquare = ArrowUpSquare;
module.exports.default = ArrowUpSquare;
