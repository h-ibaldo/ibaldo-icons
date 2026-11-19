'use strict';

const { defineComponent, h } = require('vue');

const UploadFlat = defineComponent({
  name: 'UploadFlat',
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
          h('polyline', {"points":"6.97473145017193 7.999999999336069 11.974731451296975 3.000000000462023 16.97473145017193 8.000000001585249"}),
          h('line', {"x1":"11.974731448378407","y1":"16.000000000462023","x2":"11.974731451296975","y2":"3.000000000462023"}),
          h('line', {"x1":"2.974731450037325","y1":"21.000000000462933","x2":"20.974731450037325","y2":"21.000000000462933"})
        ]
      );
  }
});

module.exports = UploadFlat;
module.exports.UploadFlat = UploadFlat;
module.exports.default = UploadFlat;
