'use strict';

const { defineComponent, h } = require('vue');

const ArrowRightCircleJoined = defineComponent({
  name: 'ArrowRightCircleJoined',
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
          h('path', {"d":"M11 9L14 12L11 15"}),
          h('path', {"d":"M3.348 17C5.234 20.254 8.891 22.352 13.004 21.949C17.633 21.5 21.426 17.762 21.938 13.141C22.605 7.105 17.898 2 12 2C8.008 2 4.563 4.34 2.961 7.723C2.02 9.707 3.484 12 5.68 12L14 12"})
        ]
      );
  }
});

module.exports = ArrowRightCircleJoined;
module.exports.ArrowRightCircleJoined = ArrowRightCircleJoined;
module.exports.default = ArrowRightCircleJoined;
