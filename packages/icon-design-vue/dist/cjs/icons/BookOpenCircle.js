'use strict';

const { defineComponent, h } = require('vue');

const BookOpenCircle = defineComponent({
  name: 'BookOpenCircle',
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
          h('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z"}),
          h('path', {"d":"M12 10L12 17"}),
          h('path', {"d":"M12 10C11.387 8.773 10.133 8 8.766 8L7 8L7 15L8.766 15C10.133 15 11.387 15.773 12 17"}),
          h('path', {"d":"M12 10C12.613 8.773 13.867 8 15.234 8L17 8L17 15L15.234 15C13.867 15 12.613 15.773 12 17"})
        ]
      );
  }
});

module.exports = BookOpenCircle;
module.exports.BookOpenCircle = BookOpenCircle;
module.exports.default = BookOpenCircle;
