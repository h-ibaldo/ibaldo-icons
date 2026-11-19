'use strict';

const { defineComponent, h } = require('vue');

const FileCastCornerCut = defineComponent({
  name: 'FileCastCornerCut',
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
          h('path', {"d":"M21 22C21 21.448 21.448 21 22 21"}),
          h('path', {"d":"M17 22C17 19.239 19.239 17 22 17"}),
          h('path', {"d":"M13 22C13 17.029 17.029 13 22 13"}),
          h('path', {"d":"M10 19L6 19C4.895 19 4 18.105 4 17L4 8.243C4 7.447 4.316 6.684 4.879 6.121L7.121 3.879C7.684 3.316 8.447 3 9.243 3L15 3C16.105 3 17 3.895 17 5L17 11"})
        ]
      );
  }
});

module.exports = FileCastCornerCut;
module.exports.FileCastCornerCut = FileCastCornerCut;
module.exports.default = FileCastCornerCut;
