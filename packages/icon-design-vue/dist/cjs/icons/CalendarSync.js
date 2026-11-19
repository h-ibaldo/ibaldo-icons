'use strict';

const { defineComponent, h } = require('vue');

const CalendarSync = defineComponent({
  name: 'CalendarSync',
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
          h('path', {"d":"M21 6C21 4.895 20.105 4 19 4L5 4C3.895 4 3 4.895 3 6L3 19C3 20.105 3.895 21 5 21L6 21"}),
          h('path', {"d":"M22 10L22 14L18 14"}),
          h('path', {"d":"M10 22L10 18L14 18"}),
          h('path', {"d":"M21 12.715C19.93 11.086 18.098 10 16 10C13.391 10 11.176 11.672 10.352 14"}),
          h('path', {"d":"M11 19.313C12.074 20.934 13.91 22 16 22C18.609 22 20.824 20.328 21.648 18"})
        ]
      );
  }
});

module.exports = CalendarSync;
module.exports.CalendarSync = CalendarSync;
module.exports.default = CalendarSync;
