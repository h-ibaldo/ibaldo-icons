'use strict';

const { defineComponent, h } = require('vue');

const Text3DSquare = defineComponent({
  name: 'Text3DSquare',
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
          h('path', {"d":"M20 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 20C22 21.105 21.105 22 20 22Z"}),
          h('path', {"d":"M15 17L14 17L14 7L15 7C16.656 7 18 8.344 18 10L18 14C18 15.656 16.656 17 15 17Z"}),
          h('path', {"d":"M6 9C6 7.895 6.895 7 8 7C9.105 7 10 7.895 10 9L10 10C10 11.105 9.105 12 8 12"}),
          h('path', {"d":"M6 15C6 16.105 6.895 17 8 17C9.105 17 10 16.105 10 15L10 14C10 12.895 9.105 12 8 12"})
        ]
      );
  }
});

module.exports = Text3DSquare;
module.exports.Text3DSquare = Text3DSquare;
module.exports.default = Text3DSquare;
