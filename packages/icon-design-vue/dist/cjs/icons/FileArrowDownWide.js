'use strict';

const { defineComponent, h } = require('vue');

const FileArrowDownWide = defineComponent({
  name: 'FileArrowDownWide',
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
          h('path', {"d":"M22 20L22 7.828C22 7.297 21.789 6.789 21.414 6.414L17.586 2.586C17.211 2.211 16.703 2 16.172 2L4 2C2.895 2 2 2.895 2 4L2 20C2 21.105 2.895 22 4 22L20 22C21.105 22 22 21.105 22 20Z"}),
          h('path', {"d":"M16 2L16 7C16 7.551 16.449 8 17 8L22 8"}),
          h('path', {"d":"M12 9L12 16"}),
          h('path', {"d":"M15 13L12 16L9 13"})
        ]
      );
  }
});

module.exports = FileArrowDownWide;
module.exports.FileArrowDownWide = FileArrowDownWide;
module.exports.default = FileArrowDownWide;
