'use strict';

const { defineComponent, h } = require('vue');

const CalendarOne = defineComponent({
  name: 'CalendarOne',
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
          h('path', {"d":"M12 17L12 11L11 11"})
        ]
      );
  }
});

module.exports = CalendarOne;
module.exports.CalendarOne = CalendarOne;
module.exports.default = CalendarOne;
