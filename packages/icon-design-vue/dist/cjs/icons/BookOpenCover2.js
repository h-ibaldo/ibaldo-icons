'use strict';

const { defineComponent, h } = require('vue');

const BookOpenCover2 = defineComponent({
  name: 'BookOpenCover2',
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
          h('path', {"d":"M12 7L12 20"}),
          h('path', {"d":"M12 20L11.91 19.734C11.367 18.102 9.84 17 8.117 17L7 17C6.449 17 6 16.551 6 16L6 5C6 4.449 6.449 4 7 4L8.117 4C9.84 4 11.367 5.102 11.91 6.734L12 7"}),
          h('path', {"d":"M12 20L12.09 19.734C12.633 18.102 14.16 17 15.883 17L17 17C17.551 17 18 16.551 18 16L18 5C18 4.449 17.551 4 17 4L15.883 4C14.16 4 12.633 5.102 12.09 6.734L12 7"}),
          h('path', {"d":"M18 6L20 6C21.105 6 22 6.895 22 8L22 18C22 19.105 21.105 20 20 20L4 20C2.895 20 2 19.105 2 18L2 8C2 6.895 2.895 6 4 6L6 6"})
        ]
      );
  }
});

module.exports = BookOpenCover2;
module.exports.BookOpenCover2 = BookOpenCover2;
module.exports.default = BookOpenCover2;
