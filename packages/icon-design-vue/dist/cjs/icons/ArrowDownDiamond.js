'use strict';

const { defineComponent, h } = require('vue');

const ArrowDownDiamond = defineComponent({
  name: 'ArrowDownDiamond',
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
          h('rect', {"x":"4.221825375546285","y":"4.219387443182239","width":"15.556349186088632","height":"15.556349186088632","rx":"2.499999999998875","ry":"2.499999999998875","transform":"translate(-4.96883885696025 11.999285914731155) rotate(-44.999999999992944)"}),
          h('line', {"x1":"12.071067780476369","y1":"14.997562036226554","x2":"12.071067780476369","y2":"7.997562036226554"}),
          h('polyline', {"points":"9.071067780476369 12.997562036226554 12.071067780476369 15.997562036226554 15.071067780476369 12.997562036226554"})
        ]
      );
  }
});

module.exports = ArrowDownDiamond;
module.exports.ArrowDownDiamond = ArrowDownDiamond;
module.exports.default = ArrowDownDiamond;
