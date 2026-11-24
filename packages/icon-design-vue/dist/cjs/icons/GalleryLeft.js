'use strict';

const { defineComponent, h } = require('vue');

const GalleryLeft = defineComponent({
  name: 'GalleryLeft',
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
          h('path', {"d":"M7 19L7 5"}),
          h('path', {"d":"M2 17L2 7"}),
          h('path', {"d":"M22 4L22 20C22 21.105 21.105 22 20 22L14 22C12.895 22 12 21.105 12 20L12 4C12 2.895 12.895 2 14 2L20 2C21.105 2 22 2.895 22 4Z"})
        ]
      );
  }
});

module.exports = GalleryLeft;
module.exports.GalleryLeft = GalleryLeft;
module.exports.default = GalleryLeft;
