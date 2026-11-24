'use strict';

const { defineComponent, h } = require('vue');

const FileArticleCut = defineComponent({
  name: 'FileArticleCut',
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
          h('path', {"d":"M21 20L21 7.828C21 7.298 20.789 6.789 20.414 6.414L16.586 2.586C16.211 2.211 15.702 2 15.172 2L5.172 2C4.067 2 3.172 2.895 3.172 4L3.172 20C3.172 21.105 4.067 22 5.172 22L19 22C20.105 22 21 21.105 21 20Z"}),
          h('path', {"d":"M11 10L7 10L7 6L11 6L11 10Z"}),
          h('path', {"d":"M15 10L17 10"}),
          h('path', {"d":"M7 14L17 14"}),
          h('path', {"d":"M7 18L17 18"})
        ]
      );
  }
});

module.exports = FileArticleCut;
module.exports.FileArticleCut = FileArticleCut;
module.exports.default = FileArticleCut;
