'use strict';

const { defineComponent, h } = require('vue');

const CardImageCursorSmall = defineComponent({
  name: 'CardImageCursorSmall',
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
          h('path', {"d":"M22 15L22 4C22 2.895 21.105 2 20 2L4 2C2.895 2 2 2.895 2 4L2 20C2 21.105 2.895 22 4 22L15 22"}),
          h('path', {"d":"M6 14L18 14L18 6L6 6Z"}),
          h('path', {"d":"M14 18L11 18"}),
          h('path', {"d":"M7 18L6 18"}),
          h('path', {"d":"M22 22L19 19"}),
          h('path', {"d":"M22 19L18 18L19 22"})
        ]
      );
  }
});

module.exports = CardImageCursorSmall;
module.exports.CardImageCursorSmall = CardImageCursorSmall;
module.exports.default = CardImageCursorSmall;
