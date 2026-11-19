'use strict';

const { defineComponent, h } = require('vue');

const CropArrowBend = defineComponent({
  name: 'CropArrowBend',
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
          h('path', {"d":"M18 6L20 8L22 6"}),
          h('path', {"d":"M20 8L20 4C20 2.895 19.105 2 18 2L14 2"}),
          h('path', {"d":"M6 18L4 16L2 18"}),
          h('path', {"d":"M4 16L4 20C4 21.105 4.895 22 6 22L10 22"}),
          h('path', {"d":"M8 6L8 14C8 15.105 8.895 16 10 16L18 16"}),
          h('path', {"d":"M16 13L16 10C16 8.895 15.105 8 14 8L11 8"}),
          h('path', {"d":"M8 8L6 8"}),
          h('path', {"d":"M16 18L16 16"})
        ]
      );
  }
});

module.exports = CropArrowBend;
module.exports.CropArrowBend = CropArrowBend;
module.exports.default = CropArrowBend;
