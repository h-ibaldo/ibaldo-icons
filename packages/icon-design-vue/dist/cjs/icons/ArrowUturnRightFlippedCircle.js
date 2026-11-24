'use strict';

const { defineComponent, h } = require('vue');

const ArrowUturnRightFlippedCircle = defineComponent({
  name: 'ArrowUturnRightFlippedCircle',
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
          h('path', {"d":"M13 18L16 15L13 12"}),
          h('path', {"d":"M16 15L11 15C8.789 15 7 13.211 7 11C7 8.789 8.789 7 11 7L13 7"}),
          h('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z"})
        ]
      );
  }
});

module.exports = ArrowUturnRightFlippedCircle;
module.exports.ArrowUturnRightFlippedCircle = ArrowUturnRightFlippedCircle;
module.exports.default = ArrowUturnRightFlippedCircle;
