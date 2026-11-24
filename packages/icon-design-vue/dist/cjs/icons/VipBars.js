'use strict';

const { defineComponent, h } = require('vue');

const VipBars = defineComponent({
  name: 'VipBars',
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
          h('polyline', {"points":"1.999999968595148 7.997562036226554 4.999999968595148 15.997562036226554 7.999999968595148 7.997562036226554"}),
          h('line', {"x1":"16.999999968595148","y1":"7.997562036226554","x2":"16.999999968595148","y2":"15.997562036226554"}),
          h('line', {"x1":"11.999999968595148","y1":"7.997562036226554","x2":"11.999999968595148","y2":"15.997562036226554"}),
          h('path', {"d":"M16.999999968595148,7.997562036226554h3c1.104569499661011,0,2,.895430500338989,2,2v1c0,1.10456949966192-.895430500338989,2-2,2h-3"}),
          h('line', {"x1":"1.999999968586053","y1":"3.997562036226554","x2":"21.999999968586053","y2":"3.997562036226554"}),
          h('line', {"x1":"1.999999968586053","y1":"19.997562036226554","x2":"21.999999968586053","y2":"19.997562036226554"})
        ]
      );
  }
});

module.exports = VipBars;
module.exports.VipBars = VipBars;
module.exports.default = VipBars;
