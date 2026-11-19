'use strict';

const { defineComponent, h } = require('vue');

const CalendarThirtyOneFlip = defineComponent({
  name: 'CalendarThirtyOneFlip',
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
          h('path', {"d":"M20 14L21.379 8.484C21.695 7.223 20.738 6 19.438 6L4.563 6C3.262 6 2.305 7.223 2.621 8.484L4 14L2.621 19.516C2.305 20.777 3.262 22 4.563 22L19.438 22C20.738 22 21.695 20.777 21.379 19.516Z"}),
          h('path', {"d":"M15 11L16 11L16 18"}),
          h('path', {"d":"M9 14C10.105 14 11 14.895 11 16C11 17.105 10.105 18 9 18C8.262 18 7.625 17.594 7.277 17"}),
          h('path', {"d":"M7 11L11 11L9 14"}),
          h('path', {"d":"M4 6L4 4C4 2.895 5.023 2 6.285 2L17.715 2C18.977 2 20 2.895 20 4L20 6"})
        ]
      );
  }
});

module.exports = CalendarThirtyOneFlip;
module.exports.CalendarThirtyOneFlip = CalendarThirtyOneFlip;
module.exports.default = CalendarThirtyOneFlip;
