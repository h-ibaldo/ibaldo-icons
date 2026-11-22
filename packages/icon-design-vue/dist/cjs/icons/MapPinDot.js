'use strict';

const { defineComponent, h } = require('vue');

const MapPinDot = defineComponent({
  name: 'MapPinDot',
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
          h('path', {"d":"M12 22L6.5 11.691C5.035 8.941 5.656 5.551 8 3.5C10.289 1.496 13.711 1.496 16 3.5C18.344 5.551 18.965 8.941 17.5 11.691Z"}),
          h('path', {"d":"M11 8C11 7.449 11.449 7 12 7C12.551 7 13 7.449 13 8C13 8.551 12.551 9 12 9C11.449 9 11 8.551 11 8Z"})
        ]
      );
  }
});

module.exports = MapPinDot;
module.exports.MapPinDot = MapPinDot;
module.exports.default = MapPinDot;
