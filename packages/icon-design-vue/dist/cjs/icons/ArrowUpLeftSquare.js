'use strict';

const { defineComponent, h } = require('vue');

const ArrowUpLeftSquare = defineComponent({
  name: 'ArrowUpLeftSquare',
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
          h('rect', {"x":"2.000000001433364","y":"1.999999999045031","width":"20","height":"20","rx":"1.999999999999545","ry":"1.999999999999545"}),
          h('polyline', {"points":"14.000000000129148 8.999999999132342 9.000000000129148 8.999999998910425 8.999999999909051 13.999999998910425"}),
          h('line', {"x1":"14.999999999859938","y1":"14.999999999179636","x2":"9.000000000129148","y2":"8.999999998910425"})
        ]
      );
  }
});

module.exports = ArrowUpLeftSquare;
module.exports.ArrowUpLeftSquare = ArrowUpLeftSquare;
module.exports.default = ArrowUpLeftSquare;
