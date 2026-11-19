'use strict';

const { defineComponent, h } = require('vue');

const WindowListXCirclePlain = defineComponent({
  name: 'WindowListXCirclePlain',
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
          h('path', {"d":"M18 15L15 18"}),
          h('path', {"d":"M15 15L18 18"}),
          h('path', {"d":"M11 16.5C11 13.461 13.461 11 16.5 11C19.539 11 22 13.461 22 16.5C22 19.539 19.539 22 16.5 22C13.461 22 11 19.539 11 16.5Z"}),
          h('path', {"d":"M10 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 10"}),
          h('path', {"d":"M2 7L22 7"}),
          h('path', {"d":"M9 12L13 12"}),
          h('path', {"d":"M6 12L6 12"}),
          h('path', {"d":"M9 16L11 16"}),
          h('path', {"d":"M6 16L6 16"})
        ]
      );
  }
});

module.exports = WindowListXCirclePlain;
module.exports.WindowListXCirclePlain = WindowListXCirclePlain;
module.exports.default = WindowListXCirclePlain;
