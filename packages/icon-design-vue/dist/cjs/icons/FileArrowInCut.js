'use strict';

const { defineComponent, h } = require('vue');

const FileArrowInCut = defineComponent({
  name: 'FileArrowInCut',
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
          h('path', {"d":"M9 22L12 19L9 16"}),
          h('path', {"d":"M4 19L12 19"}),
          h('path', {"d":"M4 14L4 4C4 2.895 4.895 2 6 2L14.172 2C14.702 2 15.211 2.211 15.586 2.586L19.414 6.414C19.789 6.789 20 7.298 20 7.828L20 20C20 21.105 19.105 22 18 22L16 22"})
        ]
      );
  }
});

module.exports = FileArrowInCut;
module.exports.FileArrowInCut = FileArrowInCut;
module.exports.default = FileArrowInCut;
