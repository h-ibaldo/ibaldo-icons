'use strict';

const { defineComponent, h } = require('vue');

const PlaySquare = defineComponent({
  name: 'PlaySquare',
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
          h('path', {"d":"M8 7.766L8 16.234C8 17.012 8.848 17.492 9.516 17.09L16.57 12.855C17.219 12.469 17.219 11.531 16.57 11.141L9.516 6.91C8.848 6.508 8 6.988 8 7.766Z"}),
          h('path', {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z"})
        ]
      );
  }
});

module.exports = PlaySquare;
module.exports.PlaySquare = PlaySquare;
module.exports.default = PlaySquare;
