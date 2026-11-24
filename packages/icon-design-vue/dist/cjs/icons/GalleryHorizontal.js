'use strict';

const { defineComponent, h } = require('vue');

const GalleryHorizontal = defineComponent({
  name: 'GalleryHorizontal',
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
          h('path', {"d":"M2 22L2 2"}),
          h('path', {"d":"M22 22L22 2"}),
          h('path', {"d":"M17 4L17 20C17 21.105 16.105 22 15 22L9 22C7.895 22 7 21.105 7 20L7 4C7 2.895 7.895 2 9 2L15 2C16.105 2 17 2.895 17 4Z"})
        ]
      );
  }
});

module.exports = GalleryHorizontal;
module.exports.GalleryHorizontal = GalleryHorizontal;
module.exports.default = GalleryHorizontal;
