'use strict';

const { defineComponent, h } = require('vue');

const FileFilm = defineComponent({
  name: 'FileFilm',
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
          h('path', {"d":"M5 22C3.895 22 3 21.105 3 20L3 4C3 2.895 3.895 2 5 2L13.016 2C13.645 2 14.25 2.25 14.695 2.695L18.305 6.305C18.75 6.75 19 7.355 19 7.984L19 9"}),
          h('path', {"d":"M13 2L13 7C13 7.551 13.449 8 14 8L19 8"}),
          h('path', {"d":"M8 12L21 12L21 22L8 22Z"}),
          h('path', {"d":"M11 14.988L11 15"}),
          h('path', {"d":"M11 20.988L11 22"}),
          h('path', {"d":"M18 14.988L18 15"}),
          h('path', {"d":"M11 17.988L11 18"}),
          h('path', {"d":"M18 17.988L18 18"}),
          h('path', {"d":"M18 20.988L18 22"})
        ]
      );
  }
});

module.exports = FileFilm;
module.exports.FileFilm = FileFilm;
module.exports.default = FileFilm;
