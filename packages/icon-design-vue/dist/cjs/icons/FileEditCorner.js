'use strict';

const { defineComponent, h } = require('vue');

const FileEditCorner = defineComponent({
  name: 'FileEditCorner',
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
          h('path', {"d":"M21.414 21.243C22.195 20.462 22.195 19.195 21.414 18.414L16 13L13 13L13 16L18.414 21.414C19.195 22.195 20.462 22.195 21.243 21.414L21.414 21.243Z"}),
          h('path', {"d":"M17 20L20 17"}),
          h('path', {"d":"M18 21"}),
          h('path', {"d":"M14 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L12.016 2C12.646 2 13.25 2.25 13.696 2.696L17.304 6.304C17.75 6.75 18 7.354 18 7.984L18 10"}),
          h('path', {"d":"M12 2L12 7C12 7.552 12.448 8 13 8L18 8"})
        ]
      );
  }
});

module.exports = FileEditCorner;
module.exports.FileEditCorner = FileEditCorner;
module.exports.default = FileEditCorner;
