'use strict';

const { defineComponent, h } = require('vue');

const ArrowDownRightSquare = defineComponent({
  name: 'ArrowDownRightSquare',
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
          h('rect', {"x":"2.000000001433364","y":"1.999999999043212","width":"20","height":"20","rx":"1.999999999998636","ry":"1.999999999998636"}),
          h('polyline', {"points":"10.000000002868546 14.999999999045031 15.000000002868546 14.999999999045031 15.000000002868546 9.999999999045031"}),
          h('line', {"x1":"9.000000002868546","y1":"8.999999999045031","x2":"15.000000002868546","y2":"14.999999999045031"})
        ]
      );
  }
});

module.exports = ArrowDownRightSquare;
module.exports.ArrowDownRightSquare = ArrowDownRightSquare;
module.exports.default = ArrowDownRightSquare;
