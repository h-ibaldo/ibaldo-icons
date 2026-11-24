'use strict';

const { defineComponent, h } = require('vue');

const ArrowUpRightSquare = defineComponent({
  name: 'ArrowUpRightSquare',
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
          h('rect', {"x":"1.999999998563908","y":"1.999999999045031","width":"20","height":"20","rx":"1.999999999998408","ry":"1.999999999998408"}),
          h('polyline', {"points":"9.999999999998181 8.999999999045031 14.999999999998181 8.999999999045031 14.999999999998181 13.999999999045031"}),
          h('line', {"x1":"8.999999999998181","y1":"14.999999999045031","x2":"14.999999999998181","y2":"8.999999999045031"})
        ]
      );
  }
});

module.exports = ArrowUpRightSquare;
module.exports.ArrowUpRightSquare = ArrowUpRightSquare;
module.exports.default = ArrowUpRightSquare;
