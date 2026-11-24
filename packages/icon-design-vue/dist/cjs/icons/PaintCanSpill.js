'use strict';

const { defineComponent, h } = require('vue');

const PaintCanSpill = defineComponent({
  name: 'PaintCanSpill',
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
          h('path', {"d":"M11 4C12.273 2.727 15.316 3.711 17.805 6.195C20.289 8.684 21.273 11.727 20 13"}),
          h('path', {"d":"M19.875 9L11.715 9"}),
          h('path', {"d":"M14 12L14 13C14 14.105 14.895 15 16 15L17 15L17 18.5C17 19.328 17.672 20 18.5 20C19.328 20 20 19.328 20 18.5L20 13"}),
          h('path', {"d":"M17 16L12 21C10.727 22.273 7.684 21.289 5.195 18.805C2.711 16.316 1.727 13.273 3 12L11 4C9.727 5.273 10.711 8.316 13.195 10.805C13.461 11.066 13.727 11.313 14 11.539"}),
          h('path', {"d":"M9.027 13L4.609 7.477C3.164 5.672 4.449 3 6.762 3C7.566 3 8.328 3.352 8.852 3.961L9.859 5.141"})
        ]
      );
  }
});

module.exports = PaintCanSpill;
module.exports.PaintCanSpill = PaintCanSpill;
module.exports.default = PaintCanSpill;
