'use strict';

const { defineComponent, h } = require('vue');

const DoorSquareArrowIn = defineComponent({
  name: 'DoorSquareArrowIn',
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
          h('path', {"d":"M21.974731450043691,16.000000000481123v2.999999999998181c0,1.656854249491516-1.343145750505755,3-3,3H4.974731450043691c-1.656854249493335,0-3-1.343145750508484-3-3V5.000000000479304c0-1.656854249491516,1.343145750506665-3,3-3h14c1.656854249494245,0,3,1.343145750508484,3,3v3.000000000001819"}),
          h('polyline', {"points":"17.974731450043691 15.000000000481123 14.974731450043691 12.000000000481123 17.974731450043691 9.000000000481123"}),
          h('line', {"x1":"21.974731450043691","y1":"12.000000000481123","x2":"14.974731450043691","y2":"12.000000000481123"}),
          h('line', {"x1":"7.974731450043691","y1":"8.000000000481123","x2":"7.974731450043691","y2":"10.000000000481123"}),
          h('polyline', {"points":"3.283752446137441 21.476379395012373 11.974731450043691 17.000000000481123 11.974731450043691 2.000000000481123"})
        ]
      );
  }
});

module.exports = DoorSquareArrowIn;
module.exports.DoorSquareArrowIn = DoorSquareArrowIn;
module.exports.default = DoorSquareArrowIn;
