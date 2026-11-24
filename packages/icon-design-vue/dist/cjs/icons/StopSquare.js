'use strict';

const { defineComponent, h } = require('vue');

const StopSquare = defineComponent({
  name: 'StopSquare',
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
          h('path', {"d":"M16 17L8 17C7.445 17 7 16.551 7 16L7 8C7 7.449 7.445 7 8 7L16 7C16.555 7 17 7.449 17 8L17 16C17 16.551 16.555 17 16 17Z"}),
          h('path', {"d":"M22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5Z"})
        ]
      );
  }
});

module.exports = StopSquare;
module.exports.StopSquare = StopSquare;
module.exports.default = StopSquare;
