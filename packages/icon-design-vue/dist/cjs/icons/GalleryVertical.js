'use strict';

const { defineComponent, h } = require('vue');

const GalleryVertical = defineComponent({
  name: 'GalleryVertical',
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
          h('path', {"d":"M2 2L22 2"}),
          h('path', {"d":"M2 22L22 22"}),
          h('path', {"d":"M20 17L4 17C2.895 17 2 16.105 2 15L2 9C2 7.895 2.895 7 4 7L20 7C21.105 7 22 7.895 22 9L22 15C22 16.105 21.105 17 20 17Z"})
        ]
      );
  }
});

module.exports = GalleryVertical;
module.exports.GalleryVertical = GalleryVertical;
module.exports.default = GalleryVertical;
