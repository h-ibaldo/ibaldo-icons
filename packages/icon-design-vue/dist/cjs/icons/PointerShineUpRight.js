'use strict';

const { defineComponent, h } = require('vue');

const PointerShineUpRight = defineComponent({
  name: 'PointerShineUpRight',
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
          h('path', {"d":"M15.949 9.23L11.906 21.363C11.652 22.117 10.633 22.23 10.223 21.547L7.309 16.691L2.453 13.777C1.77 13.367 1.883 12.344 2.637 12.094L14.77 8.051C15.5 7.805 16.191 8.5 15.949 9.23Z"}),
          h('path', {"d":"M15 2L15 3"}),
          h('path', {"d":"M22 9L21 9"}),
          h('path', {"d":"M19.949 4.051L19.242 4.758"}),
          h('path', {"d":"M19.949 13.949L19.242 13.242"}),
          h('path', {"d":"M10.758 4.758L10.051 4.051"})
        ]
      );
  }
});

module.exports = PointerShineUpRight;
module.exports.PointerShineUpRight = PointerShineUpRight;
module.exports.default = PointerShineUpRight;
