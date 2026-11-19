'use strict';

const { defineComponent, h } = require('vue');

const SquareStackSquareDashed = defineComponent({
  name: 'SquareStackSquareDashed',
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
          h('path', {"d":"M10 22L14 22"}),
          h('path', {"d":"M22 6.5L22 5C22 3.344 20.656 2 19 2L18 2"}),
          h('path', {"d":"M2 10.5L2 14.5"}),
          h('path', {"d":"M6 2L5 2C3.344 2 2 3.344 2 5L2 6.5"}),
          h('path', {"d":"M18 22L19 22C20.656 22 22 20.656 22 19L22 18.5"}),
          h('path', {"d":"M2 18.5L2 19C2 20.656 3.344 22 5 22L6 22"}),
          h('path', {"d":"M14 2L10 2"}),
          h('path', {"d":"M22 14.5L22 10.5"}),
          h('path', {"d":"M12 18L16 18C17.105 18 18 17.105 18 16L18 12C18 10.895 17.105 10 16 10L12 10C10.895 10 10 10.895 10 12L10 16C10 17.105 10.895 18 12 18Z"}),
          h('path', {"d":"M14 10L14 8C14 6.895 13.105 6 12 6L8 6C6.895 6 6 6.895 6 8L6 12C6 13.105 6.895 14 8 14L10 14"})
        ]
      );
  }
});

module.exports = SquareStackSquareDashed;
module.exports.SquareStackSquareDashed = SquareStackSquareDashed;
module.exports.default = SquareStackSquareDashed;
