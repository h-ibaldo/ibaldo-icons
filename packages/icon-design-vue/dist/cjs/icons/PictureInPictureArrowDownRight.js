'use strict';

const { defineComponent, h } = require('vue');

const PictureInPictureArrowDownRight = defineComponent({
  name: 'PictureInPictureArrowDownRight',
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
          h('path', {"d":"M16 14L20 14C21.105 14 22 14.895 22 16L22 20C22 21.105 21.105 22 20 22L16 22C14.895 22 14 21.105 14 20L14 16C14 14.895 14.895 14 16 14Z"}),
          h('path', {"d":"M10 16L4 16C2.895 16 2 15.105 2 14L2 4C2 2.895 2.895 2 4 2L19 2C20.105 2 21 2.895 21 4L21 10"}),
          h('path', {"d":"M11 7L11 11L7 11"}),
          h('path', {"d":"M7 7L11 11"})
        ]
      );
  }
});

module.exports = PictureInPictureArrowDownRight;
module.exports.PictureInPictureArrowDownRight = PictureInPictureArrowDownRight;
module.exports.default = PictureInPictureArrowDownRight;
