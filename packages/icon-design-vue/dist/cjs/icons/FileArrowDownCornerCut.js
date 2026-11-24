'use strict';

const { defineComponent, h } = require('vue');

const FileArrowDownCornerCut = defineComponent({
  name: 'FileArrowDownCornerCut',
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
          h('path', {"d":"M16 19L19 22L22 19"}),
          h('path', {"d":"M19 16L19 22"}),
          h('path', {"d":"M19 12L19 7.828C19 7.298 18.789 6.789 18.414 6.414L14.586 2.586C14.211 2.211 13.702 2 13.172 2L5 2C3.895 2 3 2.895 3 4L3 20C3 21.105 3.895 22 5 22L13 22"})
        ]
      );
  }
});

module.exports = FileArrowDownCornerCut;
module.exports.FileArrowDownCornerCut = FileArrowDownCornerCut;
module.exports.default = FileArrowDownCornerCut;
