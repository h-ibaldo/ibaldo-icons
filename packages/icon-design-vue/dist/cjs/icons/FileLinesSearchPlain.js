'use strict';

const { defineComponent, h } = require('vue');

const FileLinesSearchPlain = defineComponent({
  name: 'FileLinesSearchPlain',
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
          h('path', {"d":"M18 18.034"}),
          h('path', {"d":"M11 22.034L4 22.034C2.895 22.034 2 21.138 2 20.034L2 4.034C2 2.929 2.895 2.034 4 2.034L16 2.034C17.105 2.034 18 2.929 18 4.034L18 8.034"}),
          h('path', {"d":"M19 21.034"}),
          h('path', {"d":"M20 16.034C20 18.243 18.209 20.034 16 20.034C13.791 20.034 12 18.243 12 16.034C12 13.825 13.791 12.034 16 12.034C18.209 12.034 20 13.825 20 16.034Z"}),
          h('path', {"d":"M19 19.034L22 22.034"}),
          h('path', {"d":"M6 8.034L14 8.034"}),
          h('path', {"d":"M6 12.034L9 12.034"}),
          h('path', {"d":"M6 16.034L8 16.034"})
        ]
      );
  }
});

module.exports = FileLinesSearchPlain;
module.exports.FileLinesSearchPlain = FileLinesSearchPlain;
module.exports.default = FileLinesSearchPlain;
