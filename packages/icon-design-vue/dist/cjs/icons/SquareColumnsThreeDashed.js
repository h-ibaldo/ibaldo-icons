'use strict';

const { defineComponent, h } = require('vue');

const SquareColumnsThreeDashed = defineComponent({
  name: 'SquareColumnsThreeDashed',
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
          h('path', {"d":"M15 22L15 20"}),
          h('path', {"d":"M15 16L15 14"}),
          h('path', {"d":"M15 10L15 8"}),
          h('path', {"d":"M15 4L15 2"}),
          h('path', {"d":"M9 22L9 20"}),
          h('path', {"d":"M9 16L9 14"}),
          h('path', {"d":"M9 10L9 8"}),
          h('path', {"d":"M9 4L9 2"})
        ]
      );
  }
});

module.exports = SquareColumnsThreeDashed;
module.exports.SquareColumnsThreeDashed = SquareColumnsThreeDashed;
module.exports.default = SquareColumnsThreeDashed;
