'use strict';

const { defineComponent, h } = require('vue');

const CalendarArrowRightDown = defineComponent({
  name: 'CalendarArrowRightDown',
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
          h('path', {"d":"M8 2L8 4"}),
          h('path', {"d":"M16 2L16 4"}),
          h('path', {"d":"M22 20L22 5C22 3.895 21.105 3 20 3L4 3C2.895 3 2 3.895 2 5L2 20C2 21.105 2.895 22 4 22L20 22C21.105 22 22 21.105 22 20Z"}),
          h('path', {"d":"M6 8L6 8"}),
          h('path', {"d":"M16 18L16 18"}),
          h('path', {"d":"M10 8L14 8C15.105 8 16 8.895 16 10L16 14"}),
          h('path', {"d":"M14 12L16 14L18 12"})
        ]
      );
  }
});

module.exports = CalendarArrowRightDown;
module.exports.CalendarArrowRightDown = CalendarArrowRightDown;
module.exports.default = CalendarArrowRightDown;
