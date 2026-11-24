'use strict';

const { defineComponent, h } = require('vue');

const FileSearch = defineComponent({
  name: 'FileSearch',
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
          h('path', {"d":"M10 22L6 22C4.895 22 4 21.105 4 20L4 4C4 2.895 4.895 2 6 2L14.016 2C14.646 2 15.25 2.25 15.696 2.696L19.304 6.304C19.75 6.75 20 7.354 20 7.984L20 10"}),
          h('path', {"d":"M14 2L14 7C14 7.552 14.448 8 15 8L20 8"}),
          h('path', {"d":"M19 16C19 18.209 17.209 20 15 20C12.791 20 11 18.209 11 16C11 13.791 12.791 12 15 12C17.209 12 19 13.791 19 16Z"}),
          h('path', {"d":"M18 19L21 22"})
        ]
      );
  }
});

module.exports = FileSearch;
module.exports.FileSearch = FileSearch;
module.exports.default = FileSearch;
