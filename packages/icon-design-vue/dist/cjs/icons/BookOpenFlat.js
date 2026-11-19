'use strict';

const { defineComponent, h } = require('vue');

const BookOpenFlat = defineComponent({
  name: 'BookOpenFlat',
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
          h('path', {"d":"M12 7L12 21"}),
          h('path', {"d":"M12 21L11.91 20.734C11.367 19.102 9.84 18 8.117 18L3 18C2.449 18 2 17.551 2 17L2 5C2 4.449 2.449 4 3 4L8.117 4C9.84 4 11.367 5.102 11.91 6.734L12 7"}),
          h('path', {"d":"M12 21L12.09 20.734C12.633 19.102 14.16 18 15.883 18L21 18C21.551 18 22 17.551 22 17L22 5C22 4.449 21.551 4 21 4L15.883 4C14.16 4 12.633 5.102 12.09 6.734L12 7"})
        ]
      );
  }
});

module.exports = BookOpenFlat;
module.exports.BookOpenFlat = BookOpenFlat;
module.exports.default = BookOpenFlat;
