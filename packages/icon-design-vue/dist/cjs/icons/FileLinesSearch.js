'use strict';

const { defineComponent, h } = require('vue');

const FileLinesSearch = defineComponent({
  name: 'FileLinesSearch',
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
          h('path', {"d":"M11 22L5 22C3.895 22 3 21.105 3 20L3 4C3 2.895 3.895 2 5 2L13.016 2C13.646 2 14.25 2.25 14.696 2.696L18.304 6.304C18.75 6.75 19 7.354 19 7.984L19 9"}),
          h('path', {"d":"M13 2L13 7C13 7.552 13.448 8 14 8L19 8"}),
          h('path', {"d":"M20 16C20 18.209 18.209 20 16 20C13.791 20 12 18.209 12 16C12 13.791 13.791 12 16 12C18.209 12 20 13.791 20 16Z"}),
          h('path', {"d":"M19 19L22 22"}),
          h('path', {"d":"M7 8L9 8"}),
          h('path', {"d":"M7 12L9 12"}),
          h('path', {"d":"M7 16L9 16"})
        ]
      );
  }
});

module.exports = FileLinesSearch;
module.exports.FileLinesSearch = FileLinesSearch;
module.exports.default = FileLinesSearch;
