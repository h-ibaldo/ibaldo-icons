'use strict';

const { defineComponent, h } = require('vue');

const CalendarSevenSlot = defineComponent({
  name: 'CalendarSevenSlot',
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
          h('path', {"d":"M19.777 22L4.223 22C2.996 22 2 21.004 2 19.777L2 4.223C2 2.996 2.996 2 4.223 2L19.777 2C21.004 2 22 2.996 22 4.223L22 19.777C22 21.004 21.004 22 19.777 22Z"}),
          h('path', {"d":"M7 6L9 6"}),
          h('path', {"d":"M15 6L17 6"}),
          h('path', {"d":"M10 11L14 11L11 18"})
        ]
      );
  }
});

module.exports = CalendarSevenSlot;
module.exports.CalendarSevenSlot = CalendarSevenSlot;
module.exports.default = CalendarSevenSlot;
