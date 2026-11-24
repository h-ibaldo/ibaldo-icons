'use strict';

const { defineComponent, h } = require('vue');

const FilePlusCorner = defineComponent({
  name: 'FilePlusCorner',
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
          h('path', {"d":"M19 16L19 22"}),
          h('path', {"d":"M22 19L16 19"}),
          h('path', {"d":"M13 22L5 22C3.895 22 3 21.105 3 20L3 4C3 2.895 3.895 2 5 2L13.016 2C13.646 2 14.25 2.25 14.696 2.696L18.304 6.304C18.75 6.75 19 7.354 19 7.984L19 12"}),
          h('path', {"d":"M13 2L13 7C13 7.552 13.448 8 14 8L19 8"})
        ]
      );
  }
});

module.exports = FilePlusCorner;
module.exports.FilePlusCorner = FilePlusCorner;
module.exports.default = FilePlusCorner;
