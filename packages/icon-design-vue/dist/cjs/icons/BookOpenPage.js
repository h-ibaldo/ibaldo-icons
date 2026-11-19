'use strict';

const { defineComponent, h } = require('vue');

const BookOpenPage = defineComponent({
  name: 'BookOpenPage',
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
          h('path', {"d":"M12 9C12 5 15 2 18 2L18 15C15 15 12 17 12 22L12 9"}),
          h('path', {"d":"M12 22C10 19 5 18 2 18L2 5C5 5 10 6 12 9"}),
          h('path', {"d":"M12 22C14 19 19 18 22 18L22 5C20.863 5 19.438 5.145 18 5.484"})
        ]
      );
  }
});

module.exports = BookOpenPage;
module.exports.BookOpenPage = BookOpenPage;
module.exports.default = BookOpenPage;
