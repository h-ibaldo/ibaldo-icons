'use strict';

const { defineComponent, h } = require('vue');

const FileGrid = defineComponent({
  name: 'FileGrid',
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
          h('path', {"d":"M19 9L19 7.984C19 7.355 18.75 6.75 18.305 6.305L14.695 2.695C14.25 2.25 13.645 2 13.016 2L5 2C3.895 2 3 2.895 3 4L3 20C3 21.105 3.895 22 5 22L6 22"}),
          h('path', {"d":"M13 2L13 7C13 7.551 13.449 8 14 8L19 8"}),
          h('path', {"d":"M9 12L21 12L21 22L9 22Z"}),
          h('path', {"d":"M9 17L21 17"}),
          h('path', {"d":"M17 12L17 21.5"}),
          h('path', {"d":"M13 12L13 21.5"})
        ]
      );
  }
});

module.exports = FileGrid;
module.exports.FileGrid = FileGrid;
module.exports.default = FileGrid;
