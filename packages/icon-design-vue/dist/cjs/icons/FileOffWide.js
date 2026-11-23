'use strict';

const { defineComponent, h } = require('vue');

const FileOffWide = defineComponent({
  name: 'FileOffWide',
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
          h('path', {"d":"M15 3L15 8C15 8.551 15.449 9 16 9L21 9"}),
          h('path', {"d":"M2 2L22 22"}),
          h('path', {"d":"M8 3L15.172 3C15.703 3 16.211 3.211 16.586 3.586L20.414 7.414C20.789 7.789 21 8.297 21 8.828L21 16"}),
          h('path', {"d":"M20.414 20.414C20.051 20.777 19.551 21 19 21L5 21C3.895 21 3 20.105 3 19L3 5C3 4.449 3.223 3.949 3.586 3.586"})
        ]
      );
  }
});

module.exports = FileOffWide;
module.exports.FileOffWide = FileOffWide;
module.exports.default = FileOffWide;
