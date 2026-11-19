'use strict';

const { defineComponent, h } = require('vue');

const UploadSquareStackCorner = defineComponent({
  name: 'UploadSquareStackCorner',
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
          h('rect', {"x":"6.974731450026411","y":"2.000000000462023","width":"14","height":"16","rx":"3","ry":"3","transform":"translate(27.949462900052822 20.000000000924047) rotate(180)"}),
          h('path', {"d":"M16.974731450026411,22.000000000462933H5.974731450026411c-1.656854249493335,0-3-1.343145750510303-3-3.000000000000909V6.000000000462023"}),
          h('polyline', {"points":"10.974731450026411 9.000000000462023 13.974731450699437 6.000000000462023 16.974731450026411 9.000000000462023"}),
          h('line', {"x1":"13.974731448949569","y1":"14.000000000462023","x2":"13.974731450699437","y2":"6.000000000462023"})
        ]
      );
  }
});

module.exports = UploadSquareStackCorner;
module.exports.UploadSquareStackCorner = UploadSquareStackCorner;
module.exports.default = UploadSquareStackCorner;
