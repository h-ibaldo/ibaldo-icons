'use strict';

const { defineComponent, h } = require('vue');

const CalendarStackCheck = defineComponent({
  name: 'CalendarStackCheck',
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
          h('path', {"d":"M8 2L7.922 4"}),
          h('path', {"d":"M14.078 2L14 4"}),
          h('path', {"d":"M19 6L21.07 6C21.586 6 22 6.449 22 7L22 21C22 21.551 21.586 22 21.07 22L9.008 22C8.492 22 8.078 21.551 8.078 21L8.078 18"}),
          h('path', {"d":"M8 11L10 13L14 9"}),
          h('path', {"d":"M5 3L17 3C17.551 3 18 3.449 18 4L18 12.93C18 14.254 17.473 15.527 16.535 16.465L15.262 17.738C15.094 17.906 14.867 18 14.629 18L3.172 18C2.371 18 1.969 17.031 2.535 16.465C3.473 15.527 4 14.254 4 12.93L4 4C4 3.449 4.449 3 5 3Z"})
        ]
      );
  }
});

module.exports = CalendarStackCheck;
module.exports.CalendarStackCheck = CalendarStackCheck;
module.exports.default = CalendarStackCheck;
