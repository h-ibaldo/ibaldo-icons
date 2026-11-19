'use strict';

const { defineComponent, h } = require('vue');

const CalendarStarCheck = defineComponent({
  name: 'CalendarStarCheck',
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
          h('path', {"d":"M8 2L8 4"}),
          h('path', {"d":"M16 2L16 4"}),
          h('path', {"d":"M22 13L22 5C22 3.895 21.105 3 20 3L4 3C2.895 3 2 3.895 2 5L2 20C2 21.105 2.895 22 4 22L12 22"}),
          h('path', {"d":"M12.574 7.371L13.766 9.785L16.43 10.172C16.977 10.254 17.191 10.922 16.801 11.305L14.871 13.184L15.324 15.84C15.418 16.383 14.848 16.797 14.363 16.539L11.977 15.285L9.594 16.539C9.105 16.797 8.539 16.383 8.629 15.84L9.086 13.184L7.156 11.305C6.762 10.922 6.98 10.254 7.523 10.172L10.191 9.785L11.383 7.371C11.625 6.875 12.328 6.875 12.574 7.371Z"}),
          h('path', {"d":"M16 20L18 22L22 17"})
        ]
      );
  }
});

module.exports = CalendarStarCheck;
module.exports.CalendarStarCheck = CalendarStarCheck;
module.exports.default = CalendarStarCheck;
