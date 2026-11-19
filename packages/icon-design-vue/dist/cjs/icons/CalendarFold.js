'use strict';

const { defineComponent, h } = require('vue');

const CalendarFold = defineComponent({
  name: 'CalendarFold',
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
          h('path', {"d":"M2 10L22 10"}),
          h('path', {"d":"M20 4L4 4C2.895 4 2 4.895 2 6L2 20C2 21.105 2.895 22 4 22L13.758 22C14.555 22 15.316 21.684 15.879 21.121L21.121 15.879C21.684 15.316 22 14.555 22 13.758L22 6C22 4.895 21.105 4 20 4Z"}),
          h('path', {"d":"M15 21L15 17C15 15.895 15.895 15 17 15L21 15"})
        ]
      );
  }
});

module.exports = CalendarFold;
module.exports.CalendarFold = CalendarFold;
module.exports.default = CalendarFold;
