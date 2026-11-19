'use strict';

const { defineComponent, h } = require('vue');

const SunStarHalfSquare = defineComponent({
  name: 'SunStarHalfSquare',
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
          h('rect', {"x":"1.999999990796823","y":"2.000000000448381","width":"20","height":"20","rx":"3","ry":"3"}),
          h('polygon', {"points":"16.999999990796823 14.000000000448381 18.999999990796823 12.000000000448381 16.999999990796823 10.000000000448381 16.999999990796823 7.000000000448381 13.999999990796823 7.000000000448381 11.999999990796823 5.000000000448381 9.999999990796823 7.000000000448381 6.999999990796823 7.000000000448381 6.999999990796823 10.000000000448381 4.999999990796823 12.000000000448381 6.999999990796823 14.000000000448381 6.999999990796823 17.000000000448381 9.999999990796823 17.000000000448381 11.999999990796823 19.000000000448381 13.999999990796823 17.000000000448381 16.999999990796823 17.000000000448381 16.999999990796823 14.000000000448381"}),
          h('line', {"x1":"11.999999990796823","y1":"5.000000000448381","x2":"11.999999990796823","y2":"19.000000000448381"}),
          h('line', {"x1":"4.999999990796823","y1":"12.0000000004502","x2":"11.999999990796823","y2":"12.000000000448381"}),
          h('line', {"x1":"6.999999990796823","y1":"9.000000000448381","x2":"11.999999990796823","y2":"9.000000000446562"}),
          h('line', {"x1":"6.999999990796823","y1":"15.0000000004502","x2":"11.999999990796823","y2":"15.000000000448381"})
        ]
      );
  }
});

module.exports = SunStarHalfSquare;
module.exports.SunStarHalfSquare = SunStarHalfSquare;
module.exports.default = SunStarHalfSquare;
