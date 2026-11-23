'use strict';

const { defineComponent, h } = require('vue');

const PaintbrushVertical = defineComponent({
  name: 'PaintbrushVertical',
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
          h('path', {"d":"M5 12L19 12L19 2L5 2Z"}),
          h('path', {"d":"M10 2L10 6"}),
          h('path', {"d":"M15 2L15 5"}),
          h('path', {"d":"M4 14L4 12L20 12L20 14C20 15.105 19.105 16 18 16L14 16L14 20C14 21.105 13.105 22 12 22C10.895 22 10 21.105 10 20L10 16L6 16C4.895 16 4 15.105 4 14Z"})
        ]
      );
  }
});

module.exports = PaintbrushVertical;
module.exports.PaintbrushVertical = PaintbrushVertical;
module.exports.default = PaintbrushVertical;
