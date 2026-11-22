'use strict';

const { defineComponent, h } = require('vue');

const MapPinWide = defineComponent({
  name: 'MapPinWide',
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
          h('path', {"d":"M12 2C7.582 2 4 5.582 4 10C4 12.563 5.016 15.016 6.828 16.828L12 22L17.172 16.828C18.984 15.016 20 12.563 20 10C20 5.582 16.418 2 12 2Z"}),
          h('path', {"d":"M16 10C16 12.211 14.211 14 12 14C9.789 14 8 12.211 8 10C8 7.789 9.789 6 12 6C14.211 6 16 7.789 16 10Z"})
        ]
      );
  }
});

module.exports = MapPinWide;
module.exports.MapPinWide = MapPinWide;
module.exports.default = MapPinWide;
