'use strict';

const { defineComponent, h } = require('vue');

const FileLinesEditCornerCut = defineComponent({
  name: 'FileLinesEditCornerCut',
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
          h('path', {"d":"M21.414 21.243C22.195 20.462 22.195 19.195 21.414 18.414L16 13L13 13L13 16L18.414 21.414C19.195 22.195 20.462 22.195 21.243 21.414L21.414 21.243Z"}),
          h('path', {"d":"M17 20L20 17"}),
          h('path', {"d":"M18 21"}),
          h('path', {"d":"M19 11L19 7.828C19 7.298 18.789 6.789 18.414 6.414L14.586 2.586C14.211 2.211 13.702 2 13.172 2L5 2C3.895 2 3 2.895 3 4L3 20C3 21.105 3.895 22 5 22L14 22"}),
          h('path', {"d":"M7 8L14 8"}),
          h('path', {"d":"M7 12L9 12"}),
          h('path', {"d":"M7 16L9 16"})
        ]
      );
  }
});

module.exports = FileLinesEditCornerCut;
module.exports.FileLinesEditCornerCut = FileLinesEditCornerCut;
module.exports.default = FileLinesEditCornerCut;
