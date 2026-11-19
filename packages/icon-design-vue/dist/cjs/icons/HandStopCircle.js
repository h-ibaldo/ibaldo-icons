'use strict';

const { defineComponent, h } = require('vue');

const HandStopCircle = defineComponent({
  name: 'HandStopCircle',
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
          h('circle', {"cx":"11.999999968595148","cy":"11.997562036226554","r":"10"}),
          h('path', {"d":"M5.999999968586053,9.997562036226554v2.437699666097615c.000000000009095,3.071973648391577,2.49032668550899,5.562300333902385,5.562300333900566,5.562300333902385h.000008999999409c2.10684394495911,0,4.032863402459043-1.190345486229489,4.975072660348815-3.074763996730326l1.462618005760305-2.925236003269674"}),
          h('line', {"x1":"8.999999968586053","y1":"6.997562036226554","x2":"8.999999968595148","y2":"12.997562036226554"}),
          h('line', {"x1":"11.999999968586053","y1":"5.997562036226554","x2":"11.999999968595148","y2":"11.997562036226554"}),
          h('line', {"x1":"14.999999968586053","y1":"6.997562036226554","x2":"14.999999968595148","y2":"15.997562036226554"})
        ]
      );
  }
});

module.exports = HandStopCircle;
module.exports.HandStopCircle = HandStopCircle;
module.exports.default = HandStopCircle;
