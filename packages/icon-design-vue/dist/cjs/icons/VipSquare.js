'use strict';

const { defineComponent, h } = require('vue');

const VipSquare = defineComponent({
  name: 'VipSquare',
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
          h('polyline', {"points":"4.999999968595148 7.997562036226554 6.999999968595148 15.997562036226554 8.999999968595148 7.997562036226554"}),
          h('line', {"x1":"14.999999968595148","y1":"7.997562036226554","x2":"14.999999968595148","y2":"15.997562036226554"}),
          h('line', {"x1":"11.999999968595148","y1":"7.997562036226554","x2":"11.999999968595148","y2":"15.997562036226554"}),
          h('path', {"d":"M14.999999968595148,7.997562036226554h2c1.104569499661011,0,2,.895430500338989,2,2v1c0,1.10456949966192-.895430500338989,2-2,2h-2"}),
          h('rect', {"x":"1.999999968595148","y":"3.997562036226554","width":"20","height":"16","rx":"2","ry":"2"})
        ]
      );
  }
});

module.exports = VipSquare;
module.exports.VipSquare = VipSquare;
module.exports.default = VipSquare;
