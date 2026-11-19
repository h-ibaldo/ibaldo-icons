'use strict';

const { defineComponent, h } = require('vue');

const PointerUpRightSquare = defineComponent({
  name: 'PointerUpRightSquare',
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
          h('path', {"d":"M15.969 8.805L13.316 16.758C13.152 17.254 12.48 17.328 12.211 16.879L10.305 13.699L7.121 11.785C6.672 11.52 6.746 10.848 7.242 10.684L15.195 8.031C15.672 7.871 16.125 8.328 15.969 8.805Z"}),
          h('path', {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z"})
        ]
      );
  }
});

module.exports = PointerUpRightSquare;
module.exports.PointerUpRightSquare = PointerUpRightSquare;
module.exports.default = PointerUpRightSquare;
