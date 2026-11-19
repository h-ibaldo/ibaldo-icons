'use strict';

const { defineComponent, h } = require('vue');

const CalendarCurl = defineComponent({
  name: 'CalendarCurl',
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
          h('path', {"d":"M6 3L6 7"}),
          h('path', {"d":"M14 3L14 7"}),
          h('path', {"d":"M2 11L18 11"}),
          h('path', {"d":"M18 16L18 7C18 5.895 17.105 5 16 5L4 5C2.895 5 2 5.895 2 7L2 17C2 19.211 3.789 21 6 21C8.211 21 10 19.211 10 17L10 16L22 16L22 17C22 19.211 20.211 21 18 21L17 21"}),
          h('path', {"d":"M6 21L18 21"})
        ]
      );
  }
});

module.exports = CalendarCurl;
module.exports.CalendarCurl = CalendarCurl;
module.exports.default = CalendarCurl;
