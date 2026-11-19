'use strict';

const { defineComponent, h } = require('vue');

const FileCodeRight = defineComponent({
  name: 'FileCodeRight',
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
          h('path', {"d":"M19 12L19 8.828C19 8.297 18.789 7.789 18.414 7.414L13.586 2.586C13.211 2.211 12.703 2 12.172 2L3 2C2.449 2 2 2.449 2 3L2 21C2 21.551 2.449 22 3 22L5 22"}),
          h('path', {"d":"M12 2L12 8C12 8.551 12.449 9 13 9L19 9"}),
          h('path', {"d":"M11 16L8 19L11 22"}),
          h('path', {"d":"M19 16L22 19L19 22"}),
          h('path', {"d":"M14 22L16 16"})
        ]
      );
  }
});

module.exports = FileCodeRight;
module.exports.FileCodeRight = FileCodeRight;
module.exports.default = FileCodeRight;
