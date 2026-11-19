'use strict';

const { defineComponent, h } = require('vue');

const FilePushpinCut = defineComponent({
  name: 'FilePushpinCut',
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
          h('path', {"d":"M20 15L15 10"}),
          h('path', {"d":"M13 20L19 14"}),
          h('path', {"d":"M9 16L14 21"}),
          h('path', {"d":"M16 11L10 17"}),
          h('path', {"d":"M16 17L20 21"}),
          h('path', {"d":"M20 10L20 7.828C20 7.298 19.789 6.789 19.414 6.414L15.586 2.586C15.211 2.211 14.702 2 14.172 2L6 2C4.895 2 4 2.895 4 4L4 20C4 21.105 4.895 22 6 22L10 22"})
        ]
      );
  }
});

module.exports = FilePushpinCut;
module.exports.FilePushpinCut = FilePushpinCut;
module.exports.default = FilePushpinCut;
