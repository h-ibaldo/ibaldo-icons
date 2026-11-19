'use strict';

const { defineComponent, h } = require('vue');

const MapPinNodes = defineComponent({
  name: 'MapPinNodes',
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
          h('path', {"d":"M12 7L12 7"}),
          h('path', {"d":"M12 3C14.211 3 16 4.789 16 7C16 10 12 14 12 14C12 14 8 10 8 7C8 4.789 9.789 3 12 3"}),
          h('path', {"d":"M14 19C14 17.895 13.105 17 12 17C10.895 17 10 17.895 10 19C10 20.105 10.895 21 12 21C13.105 21 14 20.105 14 19Z"}),
          h('path', {"d":"M21 14C21 13.449 20.555 13 20 13C19.445 13 19 13.449 19 14C19 14.551 19.445 15 20 15C20.555 15 21 14.551 21 14Z"}),
          h('path', {"d":"M5 14C5 13.449 4.555 13 4 13C3.445 13 3 13.449 3 14C3 14.551 3.445 15 4 15C4.555 15 5 14.551 5 14Z"}),
          h('path', {"d":"M4 14L10.309 17.941"}),
          h('path', {"d":"M13.691 17.941L20 14"})
        ]
      );
  }
});

module.exports = MapPinNodes;
module.exports.MapPinNodes = MapPinNodes;
module.exports.default = MapPinNodes;
