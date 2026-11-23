'use strict';

const { defineComponent, h } = require('vue');

const FileBrushPlain = defineComponent({
  name: 'FileBrushPlain',
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
          h('path', {"d":"M4 17.034L4 18.62C4 19.525 3.64 20.393 3 21.034L2 22.034L12.586 22.034C13.491 22.034 14.36 21.674 15 21.034L15 21.034C15.64 20.393 16 19.525 16 18.62L16 17.034C16 15.929 15.105 15.034 14 15.034L6 15.034C4.895 15.034 4 15.929 4 17.034Z"}),
          h('path', {"d":"M10 15.034L9.064 10.355C9.023 10.147 9.052 9.931 9.146 9.741L9.146 9.741C9.498 9.038 10.502 9.038 10.854 9.741L10.854 9.741C10.948 9.931 10.977 10.147 10.936 10.355L10 15.034Z"}),
          h('path', {"d":"M19 22.034C20.105 22.034 21 21.138 21 20.034L21 4.034C21 2.929 20.105 2.034 19 2.034L7 2.034C5.895 2.034 5 2.929 5 4.034L5 11.034"})
        ]
      );
  }
});

module.exports = FileBrushPlain;
module.exports.FileBrushPlain = FileBrushPlain;
module.exports.default = FileBrushPlain;
