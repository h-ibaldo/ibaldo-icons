'use strict';

const { defineComponent, h } = require('vue');

const FileJoinedDotsCut = defineComponent({
  name: 'FileJoinedDotsCut',
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
          h('path', {"d":"M11 11L11 11"}),
          h('path', {"d":"M13 13L13 13"}),
          h('path', {"d":"M15 16L20 16C21.105 16 22 15.105 22 14L22 5.828C22 5.298 21.789 4.789 21.414 4.414L19.586 2.586C19.211 2.211 18.702 2 18.172 2L11 2C9.895 2 9 2.895 9 4L9 8"}),
          h('path', {"d":"M9 8L4 8C2.895 8 2 8.895 2 10L2 20C2 21.105 2.895 22 4 22L13 22C14.105 22 15 21.105 15 20L15 16"})
        ]
      );
  }
});

module.exports = FileJoinedDotsCut;
module.exports.FileJoinedDotsCut = FileJoinedDotsCut;
module.exports.default = FileJoinedDotsCut;
