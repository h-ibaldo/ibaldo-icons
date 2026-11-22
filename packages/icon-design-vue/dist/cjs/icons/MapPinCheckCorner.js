'use strict';

const { defineComponent, h } = require('vue');

const MapPinCheckCorner = defineComponent({
  name: 'MapPinCheckCorner',
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
          h('path', {"d":"M8 8C8 6.895 8.895 6 10 6C11.105 6 12 6.895 12 8C12 9.105 11.105 10 10 10C8.895 10 8 9.105 8 8Z"}),
          h('path', {"d":"M16 19L18 21L21 17"}),
          h('path', {"d":"M10 22.004L4.5 11.691C3.035 8.945 3.656 5.551 6 3.504C8.289 1.5 11.711 1.5 14 3.504C16.344 5.551 16.965 8.945 15.5 11.691Z"})
        ]
      );
  }
});

module.exports = MapPinCheckCorner;
module.exports.MapPinCheckCorner = MapPinCheckCorner;
module.exports.default = MapPinCheckCorner;
