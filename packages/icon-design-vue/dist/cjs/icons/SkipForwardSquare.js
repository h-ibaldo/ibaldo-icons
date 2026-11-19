'use strict';

const { defineComponent, h } = require('vue');

const SkipForwardSquare = defineComponent({
  name: 'SkipForwardSquare',
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
          h('path', {"d":"M17 7L17 17"}),
          h('path', {"d":"M7 7.766L7 16.234C7 17.012 7.848 17.492 8.516 17.09L17 12L8.516 6.91C7.848 6.508 7 6.988 7 7.766Z"}),
          h('path', {"d":"M5 22L19 22C20.656 22 22 20.656 22 19L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5L2 19C2 20.656 3.344 22 5 22Z"})
        ]
      );
  }
});

module.exports = SkipForwardSquare;
module.exports.SkipForwardSquare = SkipForwardSquare;
module.exports.default = SkipForwardSquare;
