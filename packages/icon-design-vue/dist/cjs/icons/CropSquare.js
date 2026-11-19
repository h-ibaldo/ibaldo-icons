'use strict';

const { defineComponent, h } = require('vue');

const CropSquare = defineComponent({
  name: 'CropSquare',
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
          h('path', {"d":"M8 6L8 14C8 15.105 8.895 16 10 16L18 16"}),
          h('path', {"d":"M16 13L16 10C16 8.895 15.105 8 14 8L11 8"}),
          h('path', {"d":"M8 8L6 8"}),
          h('path', {"d":"M16 18L16 16"}),
          h('path', {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z"})
        ]
      );
  }
});

module.exports = CropSquare;
module.exports.CropSquare = CropSquare;
module.exports.default = CropSquare;
