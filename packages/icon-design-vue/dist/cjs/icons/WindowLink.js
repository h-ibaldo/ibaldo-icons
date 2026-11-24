'use strict';

const { defineComponent, h } = require('vue');

const WindowLink = defineComponent({
  name: 'WindowLink',
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
          h('path', {"d":"M14 19L18 19"}),
          h('path', {"d":"M14 22L13 22C11.344 22 10 20.656 10 19C10 17.344 11.344 16 13 16L14 16"}),
          h('path', {"d":"M18 16L19 16C20.656 16 22 17.344 22 19C22 20.656 20.656 22 19 22L18 22"}),
          h('path', {"d":"M7 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 13"}),
          h('path', {"d":"M2 8L22 8"}),
          h('path', {"d":"M5 5L5 5"}),
          h('path', {"d":"M8 5L8 5"}),
          h('path', {"d":"M11 5L11 5"})
        ]
      );
  }
});

module.exports = WindowLink;
module.exports.WindowLink = WindowLink;
module.exports.default = WindowLink;
