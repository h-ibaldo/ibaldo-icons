'use strict';

const { defineComponent, h } = require('vue');

const ListXSquareCorner = defineComponent({
  name: 'ListXSquareCorner',
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
          h('path', {"d":"M5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2Z"}),
          h('path', {"d":"M18 15L14.5 18.5"}),
          h('path', {"d":"M14.5 15L18 18.5"}),
          h('path', {"d":"M17 11L7 11"}),
          h('path', {"d":"M11 15L7 15"}),
          h('path', {"d":"M17 7L7 7"})
        ]
      );
  }
});

module.exports = ListXSquareCorner;
module.exports.ListXSquareCorner = ListXSquareCorner;
module.exports.default = ListXSquareCorner;
