'use strict';

const { defineComponent, h } = require('vue');

const CalendarCellsRight = defineComponent({
  name: 'CalendarCellsRight',
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
          h('path', {"d":"M8 2L8 6"}),
          h('path', {"d":"M16 2L16 6"}),
          h('path', {"d":"M22 20L22 6C22 4.895 21.105 4 20 4L4 4C2.895 4 2 4.895 2 6L2 20C2 21.105 2.895 22 4 22L20 22C21.105 22 22 21.105 22 20Z"}),
          h('path', {"d":"M6 12L6 10L8 10"}),
          h('path', {"d":"M11 12L11 10L13 10"}),
          h('path', {"d":"M18 10L16 10L16 12L18 12Z"}),
          h('path', {"d":"M6 18L6 16L8 16"}),
          h('path', {"d":"M11 18L11 16L13 16"}),
          h('path', {"d":"M16 16L18 16L18 18L16 18Z"})
        ]
      );
  }
});

module.exports = CalendarCellsRight;
module.exports.CalendarCellsRight = CalendarCellsRight;
module.exports.default = CalendarCellsRight;
