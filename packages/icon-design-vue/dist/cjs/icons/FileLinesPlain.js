'use strict';

const { defineComponent, h } = require('vue');

const FileLinesPlain = defineComponent({
  name: 'FileLinesPlain',
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
          h('path', {"d":"M18 22L6 22C4.895 22 4 21.105 4 20L4 4C4 2.895 4.895 2 6 2L18 2C19.105 2 20 2.895 20 4L20 20C20 21.105 19.105 22 18 22Z"}),
          h('path', {"d":"M9 12L15 12"}),
          h('path', {"d":"M9 8L15 8"}),
          h('path', {"d":"M9 16L15 16"})
        ]
      );
  }
});

module.exports = FileLinesPlain;
module.exports.FileLinesPlain = FileLinesPlain;
module.exports.default = FileLinesPlain;
