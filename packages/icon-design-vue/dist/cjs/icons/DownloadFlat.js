'use strict';

const { defineComponent, h } = require('vue');

const DownloadFlat = defineComponent({
  name: 'DownloadFlat',
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
          h('polyline', {"points":"16.974731450037325 11.00000000113414 11.974731449364299 16.000000000462023 6.974731450037325 10.999999999786269"}),
          h('line', {"x1":"11.974731451114167","y1":"3.000000000462023","x2":"11.974731449364299","y2":"16.000000000462023"}),
          h('line', {"x1":"2.974731450037325","y1":"21.000000000462933","x2":"20.974731450037325","y2":"21.000000000462933"})
        ]
      );
  }
});

module.exports = DownloadFlat;
module.exports.DownloadFlat = DownloadFlat;
module.exports.default = DownloadFlat;
