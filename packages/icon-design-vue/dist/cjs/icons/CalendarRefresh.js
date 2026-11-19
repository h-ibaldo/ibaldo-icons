'use strict';

const { defineComponent, h } = require('vue');

const CalendarRefresh = defineComponent({
  name: 'CalendarRefresh',
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
          h('path', {"d":"M21 7L21 6C21 4.895 20.105 4 19 4L5 4C3.895 4 3 4.895 3 6L3 19C3 20.105 3.895 21 5 21L6 21"}),
          h('path', {"d":"M10 22L10 18L14 18"}),
          h('path', {"d":"M10.348 18C11.172 20.328 13.391 22 16 22C19.313 22 22 19.313 22 16C22 12.688 19.313 10 16 10C13.391 10 11.172 11.672 10.348 14"})
        ]
      );
  }
});

module.exports = CalendarRefresh;
module.exports.CalendarRefresh = CalendarRefresh;
module.exports.default = CalendarRefresh;
