'use strict';

const { defineComponent, h } = require('vue');

const DownloadSquare = defineComponent({
  name: 'DownloadSquare',
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
          h('rect', {"x":"1.974731450037325","y":"2.000000000459295","width":"20","height":"20","rx":"3","ry":"3"}),
          h('polyline', {"points":"14.974731450037325 11.000000000462023 11.974731449364299 14.000000000462023 8.974731450037325 11.000000000462023"}),
          h('line', {"x1":"11.974731451114167","y1":"6.000000000462023","x2":"11.974731449364299","y2":"14.000000000462023"}),
          h('line', {"x1":"6.974731450037325","y1":"18.000000000462023","x2":"16.974731450037325","y2":"18.000000000462023"})
        ]
      );
  }
});

module.exports = DownloadSquare;
module.exports.DownloadSquare = DownloadSquare;
module.exports.default = DownloadSquare;
