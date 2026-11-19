'use strict';

const { defineComponent, h } = require('vue');

const CalendarDot = defineComponent({
  name: 'CalendarDot',
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
          h('path', {"d":"M3 10L21 10"}),
          h('path', {"d":"M22 18.5C22 20.434 20.434 22 18.5 22C16.566 22 15 20.434 15 18.5C15 16.566 16.566 15 18.5 15C20.434 15 22 16.566 22 18.5Z"}),
          h('path', {"d":"M8 2L8 6"}),
          h('path', {"d":"M16 2L16 6"}),
          h('path', {"d":"M21 16.055L21 6C21 4.895 20.105 4 19 4L5 4C3.895 4 3 4.895 3 6L3 19C3 20.105 3.895 21 5 21L16.055 21"})
        ]
      );
  }
});

module.exports = CalendarDot;
module.exports.CalendarDot = CalendarDot;
module.exports.default = CalendarDot;
