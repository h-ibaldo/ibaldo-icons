'use strict';

const { defineComponent, h } = require('vue');

const CalendarClockDotted = defineComponent({
  name: 'CalendarClockDotted',
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
          h('path', {"d":"M9 22L4 22C2.895 22 2 21.105 2 20L2 6C2 4.895 2.895 4 4 4L18 4C19.105 4 20 4.895 20 6L20 7"}),
          h('path', {"d":"M7 2L7 6"}),
          h('path', {"d":"M15 2L15 6"}),
          h('path', {"d":"M2 10L8 10"}),
          h('path', {"d":"M6 14L6 14"}),
          h('path', {"d":"M6 18L6 18"}),
          h('path', {"d":"M22 16C22 19.313 19.313 22 16 22C12.688 22 10 19.313 10 16C10 12.688 12.688 10 16 10C19.313 10 22 12.688 22 16Z"}),
          h('path', {"d":"M16 14L16 16L18 16"})
        ]
      );
  }
});

module.exports = CalendarClockDotted;
module.exports.CalendarClockDotted = CalendarClockDotted;
module.exports.default = CalendarClockDotted;
