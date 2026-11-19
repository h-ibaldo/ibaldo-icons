'use strict';

const { defineComponent, h } = require('vue');

const ArrowRightSquare = defineComponent({
  name: 'ArrowRightSquare',
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
          h('polyline', {"points":"13.025268536159274 8.9999999990996 16.025268535620853 11.999999999638021 13.025268535080613 14.9999999990996"}),
          h('line', {"x1":"8.025268535620853","y1":"11.999999998201019","x2":"16.025268535620853","y2":"11.999999999638021"}),
          h('rect', {"x":"2.025268535625401","y":"1.999999998828571","width":"20","height":"20","rx":"1.999999999998408","ry":"1.999999999998408"})
        ]
      );
  }
});

module.exports = ArrowRightSquare;
module.exports.ArrowRightSquare = ArrowRightSquare;
module.exports.default = ArrowRightSquare;
