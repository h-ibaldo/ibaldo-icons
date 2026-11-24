'use strict';

const { defineComponent, h } = require('vue');

const CalendarHeart = defineComponent({
  name: 'CalendarHeart',
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
          h('path', {"d":"M8 2L8 5"}),
          h('path', {"d":"M16 2L16 5"}),
          h('path', {"d":"M22 20L22 6C22 4.895 21.105 4 20 4L4 4C2.895 4 2 4.895 2 6L2 20C2 21.105 2.895 22 4 22L20 22C21.105 22 22 21.105 22 20Z"}),
          h('path', {"d":"M10.586 17.414L7 13.828C5.895 12.723 5.895 10.934 7 9.828C8.105 8.723 9.895 8.723 11 9.828L12 10.828L13 9.828C14.105 8.723 15.895 8.723 17 9.828C18.105 10.934 18.105 12.723 17 13.828L13.414 17.414C12.633 18.195 11.367 18.195 10.586 17.414Z"})
        ]
      );
  }
});

module.exports = CalendarHeart;
module.exports.CalendarHeart = CalendarHeart;
module.exports.default = CalendarHeart;
