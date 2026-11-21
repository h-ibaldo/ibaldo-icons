'use strict';

const { defineComponent, h } = require('vue');

const IdCardClipTall = defineComponent({
  name: 'IdCardClipTall',
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
          h('path', {"d":"M13 5L18 5C19.105 5 20 5.895 20 7L20 20C20 21.105 19.105 22 18 22L6 22C4.895 22 4 21.105 4 20L4 7C4 5.895 4.895 5 6 5L9.5 5"}),
          h('path', {"d":"M9.5 13.5C9.5 12.121 10.621 11 12 11C13.379 11 14.5 12.121 14.5 13.5C14.5 14.879 13.379 16 12 16C10.621 16 9.5 14.879 9.5 13.5Z"}),
          h('path', {"d":"M10 8L14 8"}),
          h('path', {"d":"M7.004 1.996L12 8"}),
          h('path', {"d":"M14 5L17 2"}),
          h('path', {"d":"M7 19C7 17.344 8.344 16 10 16L14 16C15.656 16 17 17.344 17 19"})
        ]
      );
  }
});

module.exports = IdCardClipTall;
module.exports.IdCardClipTall = IdCardClipTall;
module.exports.default = IdCardClipTall;
