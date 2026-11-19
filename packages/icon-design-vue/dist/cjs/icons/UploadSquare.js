'use strict';

const { defineComponent, h } = require('vue');

const UploadSquare = defineComponent({
  name: 'UploadSquare',
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
          h('rect', {"x":"1.974731450026411","y":"2.000000000459295","width":"20","height":"20","rx":"3","ry":"3"}),
          h('polyline', {"points":"8.974731450026411 9.000000000462023 11.974731450699437 6.000000000462023 14.974731450026411 9.000000000462023"}),
          h('line', {"x1":"11.974731448949569","y1":"14.000000000462023","x2":"11.974731450699437","y2":"6.000000000462023"}),
          h('line', {"x1":"6.974731450026411","y1":"18.000000000462023","x2":"16.974731450026411","y2":"18.000000000462023"})
        ]
      );
  }
});

module.exports = UploadSquare;
module.exports.UploadSquare = UploadSquare;
module.exports.default = UploadSquare;
