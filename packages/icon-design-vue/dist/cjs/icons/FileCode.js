'use strict';

const { defineComponent, h } = require('vue');

const FileCode = defineComponent({
  name: 'FileCode',
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
          h('path', {"d":"M6 12L6 3C6 2.449 6.449 2 7 2L15.172 2C15.703 2 16.211 2.211 16.586 2.586L21.414 7.414C21.789 7.789 22 8.297 22 8.828L22 21C22 21.551 21.551 22 21 22L19 22"}),
          h('path', {"d":"M15 2L15 8C15 8.551 15.449 9 16 9L22 9"}),
          h('path', {"d":"M5 16L2 19L5 22"}),
          h('path', {"d":"M13 16L16 19L13 22"}),
          h('path', {"d":"M8 22L10 16"})
        ]
      );
  }
});

module.exports = FileCode;
module.exports.FileCode = FileCode;
module.exports.default = FileCode;
