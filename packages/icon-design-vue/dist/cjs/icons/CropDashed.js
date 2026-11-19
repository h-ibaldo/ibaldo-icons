'use strict';

const { defineComponent, h } = require('vue');

const CropDashed = defineComponent({
  name: 'CropDashed',
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
          h('path', {"d":"M6 2L6 16C6 17.105 6.895 18 8 18L22 18"}),
          h('path', {"d":"M18 14L18 8C18 6.895 17.105 6 16 6L10 6"}),
          h('path', {"d":"M6 6L2 6"}),
          h('path', {"d":"M18 22L18 18"}),
          h('path', {"d":"M20 4L21 3"}),
          h('path', {"d":"M17 7L18 6"}),
          h('path', {"d":"M14 10L15 9"}),
          h('path', {"d":"M11 13L12 12"}),
          h('path', {"d":"M7 17L9 15"})
        ]
      );
  }
});

module.exports = CropDashed;
module.exports.CropDashed = CropDashed;
module.exports.default = CropDashed;
