'use strict';

const { defineComponent, h } = require('vue');

const CursorLargeCircle = defineComponent({
  name: 'CursorLargeCircle',
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
          h('path', {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z"}),
          h('path', {"d":"M7.855 7.855L10.449 16.813L12.469 14.793L14.777 17.098L17.098 14.777L14.793 12.469L16.813 10.449Z"})
        ]
      );
  }
});

module.exports = CursorLargeCircle;
module.exports.CursorLargeCircle = CursorLargeCircle;
module.exports.default = CursorLargeCircle;
