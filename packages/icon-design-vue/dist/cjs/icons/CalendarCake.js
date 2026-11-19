'use strict';

const { defineComponent, h } = require('vue');

const CalendarCake = defineComponent({
  name: 'CalendarCake',
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
          h('path', {"d":"M2 20L2 6C2 4.895 2.895 4 4 4L20 4C21.105 4 22 4.895 22 6L22 7"}),
          h('path', {"d":"M8 2L8 6"}),
          h('path', {"d":"M16 2L16 6"}),
          h('path', {"d":"M6 22L22 22"}),
          h('path', {"d":"M8 22L8 16L20 16L20 22"}),
          h('path', {"d":"M10 14L10 16"}),
          h('path', {"d":"M14 14L14 16"}),
          h('path', {"d":"M18 14L18 16"}),
          h('path', {"d":"M11 11L10 10"}),
          h('path', {"d":"M15 11L14 10"}),
          h('path', {"d":"M19 11L18 10"})
        ]
      );
  }
});

module.exports = CalendarCake;
module.exports.CalendarCake = CalendarCake;
module.exports.default = CalendarCake;
