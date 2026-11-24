'use strict';

const { defineComponent, h } = require('vue');

const MapPinSearch = defineComponent({
  name: 'MapPinSearch',
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
          h('path', {"d":"M19 10C19 12.211 17.211 14 15 14C12.789 14 11 12.211 11 10C11 7.789 12.789 6 15 6C17.211 6 19 7.789 19 10Z"}),
          h('path', {"d":"M19 10C19 12.211 17.211 14 15 14C12.789 14 11 12.211 11 10C11 7.789 12.789 6 15 6C17.211 6 19 7.789 19 10Z"}),
          h('path', {"d":"M17.828 12.828L21 16"}),
          h('path', {"d":"M12.254 16.441L9.285 22L3.789 11.691C2.324 8.941 2.945 5.551 5.285 3.5C7.492 1.57 10.742 1.5 13.023 3.281"})
        ]
      );
  }
});

module.exports = MapPinSearch;
module.exports.MapPinSearch = MapPinSearch;
module.exports.default = MapPinSearch;
