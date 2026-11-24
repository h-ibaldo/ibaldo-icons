'use strict';

const { defineComponent, h } = require('vue');

const SwatchBook = defineComponent({
  name: 'SwatchBook',
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
          h('path', {"d":"M4 2L8 2C9.105 2 10 2.895 10 4L10 20C10 21.105 9.105 22 8 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2Z"}),
          h('path', {"d":"M10 8L14.586 3.414C15.367 2.633 16.633 2.633 17.414 3.414L20.586 6.586C21.367 7.367 21.367 8.633 20.586 9.414L10 20"}),
          h('path', {"d":"M16 14L20 14C21.105 14 22 14.895 22 16L22 20C22 21.105 21.105 22 20 22L8 22"}),
          h('path', {"d":"M6 18L6 18"})
        ]
      );
  }
});

module.exports = SwatchBook;
module.exports.SwatchBook = SwatchBook;
module.exports.default = SwatchBook;
