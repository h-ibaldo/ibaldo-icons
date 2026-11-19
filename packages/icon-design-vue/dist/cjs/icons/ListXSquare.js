'use strict';

const { defineComponent, h } = require('vue');

const ListXSquare = defineComponent({
  name: 'ListXSquare',
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
          h('path', {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z"}),
          h('path', {"d":"M13.5 10L17 6.5"}),
          h('path', {"d":"M17 10L13.5 6.5"}),
          h('path', {"d":"M7 14L17 14"}),
          h('path', {"d":"M7 10L10 10"}),
          h('path', {"d":"M7 18L17 18"})
        ]
      );
  }
});

module.exports = ListXSquare;
module.exports.ListXSquare = ListXSquare;
module.exports.default = ListXSquare;
