'use strict';

const { defineComponent, h } = require('vue');

const BookStackOverlap = defineComponent({
  name: 'BookStackOverlap',
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
          h('path', {"d":"M22 10L12 10C10.895 10 10 10.895 10 12C10 13.105 10.895 14 12 14L22 14"}),
          h('path', {"d":"M22 10L22 2L12 2C10.895 2 10 2.895 10 4"}),
          h('path', {"d":"M10 4L10 12"}),
          h('path', {"d":"M14 18L4 18C2.895 18 2 18.895 2 20C2 21.105 2.895 22 4 22L14 22"}),
          h('path', {"d":"M14 18L14 17.07"}),
          h('path', {"d":"M7 10L4 10C2.895 10 2 10.895 2 12"}),
          h('path', {"d":"M2 12L2 20"})
        ]
      );
  }
});

module.exports = BookStackOverlap;
module.exports.BookStackOverlap = BookStackOverlap;
module.exports.default = BookStackOverlap;
