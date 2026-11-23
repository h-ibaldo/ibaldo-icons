'use strict';

const { defineComponent, h } = require('vue');

const TextSSquare = defineComponent({
  name: 'TextSSquare',
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
          h('path', {"d":"M15 7L10.5 7C9.121 7 8 8.121 8 9.5C8 10.879 9.121 12 10.5 12L13.5 12C14.879 12 16 13.121 16 14.5C16 15.879 14.879 17 13.5 17L9 17"}),
          h('path', {"d":"M5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2Z"})
        ]
      );
  }
});

module.exports = TextSSquare;
module.exports.TextSSquare = TextSSquare;
module.exports.default = TextSSquare;
